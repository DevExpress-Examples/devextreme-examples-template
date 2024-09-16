param (
    [string]$version = "latest"
)

function Process-JavaScriptProjects {
    param (
        [string]$Path = ".",
        [string[]]$Folders = @("jQuery", "Angular", "Vue", "React")
    )
    Write-Host "Processing JavaScript Projects"

    foreach ($folder in $Folders) {
        if (-not (Test-Path $folder)) {
            Write-Host "Directory $folder does not exist. Skipping..."
            continue
        }

        Write-Host "`nProcessing folder: $folder"
        
        Set-Location $folder

        Write-Host "Running 'npm install' in $folder"
        $installResult = & npm install -PassThru
        if ($LASTEXITCODE -ne 0) {
            Write-Error "npm install failed in $folder"
            $errorCode = 1
        }

        Write-Host "Running 'npm run build' in $folder"
        $buildResult = & npm run build -PassThru
        if ($LASTEXITCODE -ne 0) {
            Write-Error "npm run build failed in $folder"
            $errorCode = 1
        }

        Set-Location ..
    }
}

function Process-DotNetProjects {
    param (
        [string]$RootDirectory = "."
    )
    Write-Host "`nProcessing .NET Projects";

    $slnFiles = Get-ChildItem -Path $RootDirectory -Filter *.sln -Recurse -Depth 1

    if ($slnFiles.Count -eq 0) {
        Write-Host "No solution files (.sln) found in the specified directory at level 1."
        exit 1
    }

    foreach ($slnFile in $slnFiles) {
        Write-Host "Found solution file: $($slnFile.FullName)"
        
        dotnet build $slnFile.FullName -c Release

        if ($LASTEXITCODE -eq 0) {
            Write-Host "Build succeeded for $($slnFile.FullName)."
        } else {
            Write-Host "Build failed for $($slnFile.FullName)."
            errorCode = 1;
        }
    }
} 

$errorCode = 0;

Write-Host "Version: $version"
Process-JavaScriptProjects
Process-DotNetProjects

exit $errorCode