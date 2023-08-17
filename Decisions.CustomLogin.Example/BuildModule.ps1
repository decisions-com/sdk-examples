#Requires -RunAsAdministrator

param (
    [Parameter(Mandatory=$false)][string]$msbuild,
    [Parameter(Mandatory=$false)][string]$framework
)

function GetCompileTarget($basePath) {
    $guess = Join-Path -Path $basePath -ChildPath "build.proj"
    if (Test-Path -PathType leaf -LiteralPath $guess ) {
        return $guess
    }
    throw "Could not find a build.proj file, please create one."
}

function StopDecisionsServer {
    $local:service = (get-service "DecisionsServer");

    if ($local:service.status -eq "Running") {
        $local:service.Stop()
    }

    Write-Output "stopping Decisions Server..."
    do { $local:service.refresh(); sleep 1; } until ($local:service.status -eq "Stopped")
}

function StartDecisionsServer {
    $local:service = (get-service "DecisionsServer");
    Write-Output "starting Decisions Server..."
    $local:service.Start()

    do { $local:service.refresh(); sleep 1; } until ($local:service.status -eq "Running")
    Write-Output "SHM Started."
}

function FindModuleName($buildProj)
{
    [xml]$local:XmlDocument = Get-Content -Path $buildProj

    foreach($local:target in $local:XmlDocument.Project.Target){
        if($local:target.Name -eq "build_module")
        {
            $local:cmdline = $local:target.Exec.Command
            break
        }
    }

    $local:cmdline = $local:cmdline -split ' '
    $local:index = [array]::indexof($local:cmdline,"-buildmodule")
    $local:index++

    return $local:cmdline[$local:index]
}

function CopyModule($basePath)
{
    $local:moduleName = FindModuleName("$basePath\build.proj")
    $local:fullModuleName = "$basePath\$local:moduleName.zip"
    $local:destination  = "C:\Program Files\Decisions\Decisions Server\CustomModules\$local:moduleName.zip"

    Write-Output "Copying module..."
    Copy-Item $local:fullModuleName $local:destination
}

function FindSolutionFile($basePath) {
    $local:filelist = Get-ChildItem -Path "$basePath\*.sln"
    if($local:filelist.Length -eq 0)
    {
        throw "Can not find *.sln file"
    }
    return $local:filelist[0].FullName
}

$basePath = (Get-Location).Path
Write-Output "Using basePath = $basePath"

Write-Output "Compiling Project by build.proj, or by .sln file."
$compiletarget = GetCompileTarget $basepath

$solution = FindSolutionFile($basePath)
& dotnet build -t:restore $solution
& dotnet build $compiletarget
if ($LastExitCode -ne 0)
{
   throw "Compile failed with the return code: $LastExitCode"
}

StopDecisionsServer
CopyModule($basePath)
StartDecisionsServer