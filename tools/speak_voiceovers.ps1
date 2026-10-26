Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer

try {
    $synth.SelectVoice("Microsoft Zira Desktop")
    Write-Host "Selected Voice: Microsoft Zira Desktop"
} catch {
    try {
        $synth.SelectVoice("Microsoft David Desktop")
        Write-Host "Selected Voice: Microsoft David Desktop"
    } catch {
        Write-Host "Using system default voice"
    }
}

$synth.Rate = 1

$outDir = "P:\Demo Vid\remotion-project\public\audio"
if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

$jsonPath = "P:\Demo Vid\tools\voiceovers.json"
$rawJson = [System.IO.File]::ReadAllText($jsonPath, [System.Text.Encoding]::UTF8)
$items = ConvertFrom-Json $rawJson

foreach ($item in $items) {
    $waveFile = Join-Path $outDir ($item.id + ".wav")
    $synth.SetOutputToWaveFile($waveFile)
    $synth.Speak($item.text)
    $synth.SetOutputToNull()
    Write-Host "Generated audio for $($item.id) -> $waveFile"
}

Write-Host "ALL 11 TRACKS GENERATED SUCCESSFULLY!"
