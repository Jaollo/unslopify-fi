---
title: Ohjelmistokatalogi
description: Kuratoitu FOSS-tyokalupakki asennuskomennoilla ja asetusohjilla.
---

Kaikki tyokalut asennetaan komennolla `winget install <id>`. Koneluettava katalogi loytyy tiedostosta `phase3-control/reference/tools.json`.

## Tyokalut

| Tyokalu | Winget ID | Kategoria | Kuvaus |
|---------|-----------|-----------|--------|
| PowerToys | Microsoft.PowerToys | Tuottavuus | Microsoftin oma tehokayatto-tyokalupakki: ikkunanhallinta, pikahaku, varin poiminta jne. |
| Everything | voidtools.Everything | Haku | Salamannopea tiedostohaku -- loytaa minka tahansa tiedoston sekunneissa |
| WizTree | AntibodySoftware.WizTree | Levytila | Nayttaa mika vie levytilaa visuaalisesti -- paljon nopeampi kuin WinDirStat |
| EarTrumpet | File-New-Project.EarTrumpet | Aani | Sovelluskohtainen aanenvoimakkuuden saato ilmaisinalueelta |
| PDFgear | PDFgear.PDFgear | Tuottavuus | Ilmainen PDF-lukija ja -muokkain ilman vesileimoja |
| BCUninstaller | Klocman.BulkCrapUninstaller | Yllapito | Massapoista ohjelmia ja niiden jaanteet -- parempi kuin Windowsin oma |
| WinRAR | RARLab.WinRAR | Pakkaus | Yleisin pakkaustyo-kalu, tukee kaikkia formaatteja |
| Notepad++ | Notepad++.Notepad++ | Editori | Kevyt ja tehokas tekstieditori koodaajille |
| Helium | ImputNet.Helium | Selain | Kevyt Chromium-selain ilman Googlen seurantaa (suositeltu) |
| Brave | Brave.Brave | Selain | Yksityisyyteen keskittyva selain sisaanrakennetulla mainosestajalla |
| VLC | VideoLAN.VLC | Multimedia | Toistaa kaiken -- paras yleismediatoistin |
| mpv.net | mpv.net | Multimedia | Minimalistinen mutta tehokas videotoistin |
| OBS Studio | OBSProject.OBSStudio | Multimedia | Ammattilaistason ruuduntallennus ja suoratoisto |
| YTDownloader | aandrew-me.ytDownloader | Multimedia | Lataa videoita YouTubesta ja muilta sivustoilta |
| Readest | chrox.Readest | Lukija | Moderni e-kirjalukija (EPUB, PDF) |
| Ungoogled Chromium | eloston.ungoogled-chromium | Selain | Chrome ilman Googlen palveluita |
| Windhawk | RamenSoftware.Windhawk | Tuottavuus | Windows-kayttoliittyman muokkaustyokalu -- modit tehtavapalkille, valikoille jne. |
| Ferrite | (manuaalinen asennus) | Editori | Markdown-editori |
| nomacs | nomacs.nomacs | Kuvankatselin | Nopea ja kevyt kuvankatselin -- korvaa Windowsin Kuvat-sovelluksen |
| Shotcut | Meltytech.Shotcut | Videoeditori | Ilmainen avoimen lahdekoodin videoeditori |
| Greenshot | Greenshot.Greenshot | Kuvakaappaus | Kuvakaappaustyokalu merkintaominaisuuksilla |

## Asennus

### Kaikki kerralla

```powershell
$tools = Get-Content "phase3-control\reference\tools.json" -Raw | ConvertFrom-Json
foreach ($tool in $tools) {
    winget install $tool.id --silent --accept-source-agreements --accept-package-agreements
}
```

### Yksittain

```powershell
winget install VideoLAN.VLC --silent --accept-source-agreements --accept-package-agreements
```

### Tarkista mita on jo asennettu

```powershell
winget list --accept-source-agreements
```

## Asetusvihjeet

### Everything -- salamannopea tiedostohaku

- **Asetustiedosto**: `$env:APPDATA\Everything\Everything.ini`
- Asetustiedosto luodaan vasta ensimmaisen kaynnistyksen jalkeen

**Suositeltu pikanappain** (Ctrl+Alt+Valilyonti):

| INI-avain | Arvo | Merkitys |
|-----------|------|----------|
| `toggle_window_key` | `32` | Valilyonti-nappain |
| `toggle_window_key_modifiers` | `3` | Ctrl + Alt |

:::tip[Vinkki]
Alt+Valilyonti on varattu PowerToys Runille. Kayta Ctrl+Alt+Valilyonti Everythingille valttaaksesi ristiriidat.
:::

### PowerToys -- tehokaytattotyokalut

- **Asetustiedosto**: `$env:LOCALAPPDATA\Microsoft\PowerToys\settings.json`
- Moduulien kytkeminen vaatii PowerToysin uudelleenkaynnistyksen

**Suositellut moduulit (paalla):**
AlwaysOnTop, ColorPicker, CmdPal, FancyZones, File Locksmith, Hosts File Editor, Image Resizer, Keyboard Manager, Peek, PowerRename, PowerToys Run, TextExtractor, EnvironmentVariables

**Suositellut moduulit (pois):**
Awake, CropAndLock, FindMyMouse, Measure Tool, MouseHighlighter, MouseJump, MousePointerCrosshairs, MouseWithoutBorders, NewPlus, RegistryPreview, Shortcut Guide, Video Conference Mute, Workspaces

### Greenshot -- kuvakaappaustyokalu

- **Asetustiedosto**: `$env:APPDATA\Greenshot\Greenshot.ini`

:::caution[Tarkeaa]
Sulje Greenshot **ennen** asetustiedoston muokkausta -- se ylikirjoittaa tiedoston sulkiessaan.
:::

| Avain | Arvo | Tarkoitus |
|-------|------|-----------|
| `Destinations` | `FileDefault,Clipboard` | Tallenna tiedostoksi + kopioi leikepoydale |
| `OutputFileFormat` | `png` | Kuvaformaatti |
| `PlayCameraSound` | `False` | Ei suljinaanta |
| `CaptureMousepointer` | `False` | Ei tallenna kursoria |

### Windhawk -- kayttoliittymaan muokkaus

- Asennus: `winget install RamenSoftware.Windhawk`
- Asetukset hallitaan Windhawkin omasta kayttoliittymasta

**Suositellut modit:**

| Modi | Tarkoitus |
|------|-----------|
| Disable grouping on the taskbar | Nayttaa jokaisen ikkunan erikseen tehtavapalkissa (ei ryhmitta) |
| Windows 11 Taskbar Styler | Tehtavapalkin ulkoasun muokkaus (lapinakyvyys, varit jne.) |
