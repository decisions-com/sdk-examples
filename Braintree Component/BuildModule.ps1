#Requires -RunAsAdministrator

param (
    [Parameter(Mandatory=$false)][string]$msbuild,
    [Parameter(Mandatory=$false)][string]$framework
)

function FindMSBuild {
    $guess = Join-Path -Path ${Env:ProgramFiles(x86)} -ChildPath "Microsoft Visual Studio\2019\BuildTools\MSBuild\Current\Bin\msbuild.exe"
    if (Test-Path -PathType leaf -LiteralPath $guess ) {
        return $guess
    }

    # Check for Visual Studio MSBuild version 2019 (15.0)
    $guess = Join-Path -Path ${Env:ProgramFiles(x86)} -ChildPath "Microsoft Visual Studio\2019\Enterprise\MSBuild\Current\bin\msbuild.exe"
    if (Test-Path -PathType leaf -LiteralPath $guess ) {
        return $guess
    }

    # Check for Visual Studio MSBuild version 2019 (15.0)
    $guess = Join-Path -Path ${Env:ProgramFiles(x86)} -ChildPath "Microsoft Visual Studio\2019\Professional\MSBuild\Current\bin\msbuild.exe"
        if (Test-Path -PathType leaf -LiteralPath $guess ) {
        return $guess
    }

    $guess = Join-Path -Path ${Env:ProgramFiles(x86)} -ChildPath "\Microsoft Visual Studio\2019\BuildTools\MSBuild\Current\Bin\msbuild.exe"
    if (Test-Path -PathType leaf -LiteralPath $guess ) {
        return $guess
    }

    $guess = Join-Path -Path ${Env:ProgramFiles(x86)} -ChildPath "\Microsoft Visual Studio\2019\Enterprise\MSBuild\Current\bin\msbuild.exe"
    if (Test-Path -PathType leaf -LiteralPath $guess ) {
        return $guess
    }

    $guess = Join-Path -Path ${Env:ProgramFiles(x86)} -ChildPath "\Microsoft Visual Studio\2019\Professional\MSBuild\Current\bin\msbuild.exe"
    if (Test-Path -PathType leaf -LiteralPath $guess ) {
        return $guess
    }

    $guess = Join-Path -Path ${Env:ProgramFiles(x86)} -ChildPath "\Microsoft Visual Studio\2017\Professional\MSBuild\15.0\bin\msbuild.exe"
    if (Test-Path -PathType leaf -LiteralPath $guess ) {
        return $guess
    }

    $guess = Join-Path -Path ${Env:ProgramFiles(x86)} -ChildPath "\Microsoft Visual Studio\2019\Community\MSBuild\Current\Bin\msbuild.exe"
    if (Test-Path -PathType leaf -LiteralPath $guess ) {
        return $guess
    }
}

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
    Write-Output "Decisions Server Started."
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

if ($msbuild) {
    Write-Output "Using $msbuild"
} else {
    Write-Output "Looking for MSBUILD.exe"
    $msbuild = FindMSBuild
    Write-Output "Found and Trying $msbuild"
}

$basePath = (Get-Location).Path
Write-Output "Using basePath = $basePath"

Write-Output "Compiling Project by build.proj, or by .sln file."
$compiletarget = GetCompileTarget $basepath

$solution = FindSolutionFile($basePath)
& $msbuild -t:restore $solution
& $msbuild $compiletarget
if ($LastExitCode -ne 0)
{
   throw "Compile failed with the return code: $LastExitCode"
}

StopDecisionsServer
CopyModule($basePath)
StartDecisionsServer