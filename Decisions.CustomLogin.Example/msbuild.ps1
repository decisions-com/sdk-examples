#Decisions 2017 - Master build script.
#Run this to build and install the full platform.  
#This script is a replacement for msbuild.bat

# call common PS1 script to get msbuild path
$MSBUILDEXE = & "../../GetMSBuildPath.ps1"
& $MSBUILDEXE build.proj



if (Get-Service "DecisionsServer" -ErrorAction SilentlyContinue) {
		    $local:service = (get-service "DecisionsServer");
		
		    if ($local:service.get_status() -ne "Stopped") {
			   $local:service.Stop()
			   $local:service.WaitForStatus("Stopped");
			   Start-Sleep -Milliseconds 500
			   echo "DecisionsServer stoped."
		    }
		}
		else {
		    iisreset /stop
		}
		
			
		$modulePath = ".\..\..\output\modules\Decisions.CustomLogin.Example.zip"
if (Test-Path $modulePath)
{
	Write-Output "copying Decisions.CustomLogin.Example module..."
			Copy-Item $modulePath "C:\Program Files\Decisions\Decisions Server\Modules\Decisions.CustomLogin.Example.zip"
}
else
{
	Write-Output "Not copying Decisions.CustomLogin.Example module..."
}

if (Get-Service "DecisionsServer" -ErrorAction SilentlyContinue) {
		    echo "Starting DecisionsServer..."
		    $local:service.Refresh();
		    $local:service.Start();

		    for ($i = 0; $i -le 100; $i = ($i + 1) % 100) {
			   Write-Progress -Activity "DecisionsServer" -PercentComplete $i -Status "Starting" -CurrentOperation "Waiting to start..."
			   Start-Sleep -Milliseconds 500
			   $local:service.Refresh();
			   if ($local:service.Status -eq "Running") {
				  Write-Progress -Activity "SHM" -Completed
				  Write-Output "DecisionsServer is running!"
				  break
			   }
			   if ($local:service.Status -eq "Stopped") {
				  Write-Progress -Activity "DecisionsServer" -Completed
				  Write-Output "DecisionsServer Failed to start"
				  # Should prompt and open logs, but CF will yell at me.  
				  break
			   }
		    }
		}
		else {
		    iisreset /start
		}