# Verify Card Stack Images Script
# This script checks if all required card stack images are present

$requiredImages = @(
    "cardstack_1_red_veil.jpg",
    "cardstack_2_celebration.jpg",
    "cardstack_3_photographer.jpg",
    "cardstack_4_outdoor.jpg",
    "cardstack_5_field.jpg"
)

$assetsPath = "F:\Clients\1 Github\Dad\CQDigitalStudio\attached_assets"

Write-Host "`n=== Card Stack Images Verification ===" -ForegroundColor Cyan
Write-Host "Checking for required images in: $assetsPath`n" -ForegroundColor Gray

$allPresent = $true
$missingCount = 0

foreach ($image in $requiredImages) {
    $fullPath = Join-Path $assetsPath $image
    if (Test-Path $fullPath) {
        $fileSize = (Get-Item $fullPath).Length / 1MB
        Write-Host "✓ $image" -ForegroundColor Green -NoNewline
        Write-Host " - $([math]::Round($fileSize, 2)) MB" -ForegroundColor Gray
    } else {
        Write-Host "✗ $image" -ForegroundColor Red -NoNewline
        Write-Host " - MISSING" -ForegroundColor Red
        $allPresent = $false
        $missingCount++
    }
}

Write-Host ""

if ($allPresent) {
    Write-Host "SUCCESS! All 5 card stack images are present." -ForegroundColor Green
    Write-Host "Your card stack component is ready to use!" -ForegroundColor Green
} else {
    Write-Host "WARNING: $missingCount image(s) missing." -ForegroundColor Yellow
    Write-Host "Please save the missing images to the attached_assets folder." -ForegroundColor Yellow
    Write-Host "See SAVE_CARDSTACK_IMAGES.md for detailed instructions." -ForegroundColor Yellow
}

Write-Host ""
