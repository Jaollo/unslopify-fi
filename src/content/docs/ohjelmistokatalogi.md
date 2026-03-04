---
title: Ohjelmistokatalogi
description: Kuratoitu FOSS-työkalupakki asennuskomennoilla ja asetusohjilla.
---

Kaikki työkalut asennetaan komennolla `winget install <id>`. Koneluettava katalogi löytyy tiedostosta `phase3-control/reference/tools.json`.

## Työkalut

| Työkalu | Winget ID | Kategoria | Kuvaus |
|---------|-----------|-----------|--------|
| PowerToys | Microsoft.PowerToys | Tuottavuus | Microsoftin oma tehokaytto-työkalupakki: ikkunanhallinta, pikahaku, värin poiminta jne. |
| Everything | voidtools.Everything | Haku | Salamannopea tiedostohaku -- löytää mikä tahansa tiedoston sekunneissa |
| WizTree | AntibodySoftware.WizTree | Levytila | Näyttää mikä vie levytilaa visuaalisesti -- paljon nopeampi kuin WinDirStat |
| EarTrumpet | File-New-Project.EarTrumpet | Ääni | Sovelluskohtainen äänenvoimakkuuden säätö ilmaisinalueelta |
| PDFgear | PDFgear.PDFgear | Tuottavuus | Ilmainen PDF-lukija ja -muokkain ilman vesileimoja |
| BCUninstaller | Klocman.BulkCrapUninstaller | Ylläpito | Massapoista ohjelmia ja niiden jäämät -- parempi kuin Windowsin oma |
| WinRAR | RARLab.WinRAR | Pakkaus | Yleisin pakkaustyö-kalu, tukee kaikkia formaatteja |
| Notepad++ | Notepad++.Notepad++ | Editori | Kevyt ja tehokas tekstieditori koodaajille |
| Helium | ImputNet.Helium | Selain | Kevyt Chromium-selain ilman Googlen seurantaa (suositeltu) |
| Brave | Brave.Brave | Selain | Yksityisyyteen keskittyvä selain sisäänrakennetulla mainosestaajalla |
| VLC | VideoLAN.VLC | Multimedia | Toistaa kaiken -- paras yleismediatoistin |
| mpv.net | mpv.net | Multimedia | Minimalistinen mutta tehokas videotoistin |
| OBS Studio | OBSProject.OBSStudio | Multimedia | Ammattilaistason ruuduntallennus ja suoratoisto |
| YTDownloader | aandrew-me.ytDownloader | Multimedia | Lataa videoita YouTubesta ja muilta sivustoilta |
| Readest | chrox.Readest | Lukija | Moderni e-kirjalukija (EPUB, PDF) |
| Ungoogled Chromium | eloston.ungoogled-chromium | Selain | Chrome ilman Googlen palveluita |
| Windhawk | RamenSoftware.Windhawk | Tuottavuus | Windows-käyttöliittymän muokkaustyökalu -- modit tehtäväpalkille, valikoille jne. |
| Ferrite | (manuaalinen asennus) | Editori | Markdown-editori |
| nomacs | nomacs.nomacs | Kuvankatselin | Nopea ja kevyt kuvankatselin -- korvaa Windowsin Kuvat-sovelluksen |
| Shotcut | Meltytech.Shotcut | Videoeditori | Ilmainen avoimen lähdekoodin videoeditori |
| Greenshot | Greenshot.Greenshot | Kuvakaappaus | Kuvakaappaustyökalu merkintäominaisuuksilla |

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

### Tarkista mitä on jo asennettu

```powershell
winget list --accept-source-agreements
```

## Asetusvihjeet

### Everything -- salamannopea tiedostohaku

- **Asetustiedosto**: `$env:APPDATA\Everything\Everything.ini`
- Asetustiedosto luodaan vasta ensimmäisen käynnistyksen jälkeen

**Suositeltu pikanäppäin** (Ctrl+Alt+Välilyönti):

| INI-avain | Arvo | Merkitys |
|-----------|------|----------|
| `toggle_window_key` | `32` | Välilyönti-näppäin |
| `toggle_window_key_modifiers` | `3` | Ctrl + Alt |

:::tip[Vinkki]
Alt+Välilyönti on varattu PowerToys Runille. Käytä Ctrl+Alt+Välilyönti Everythingille välttääksesi ristiriidat.
:::

### PowerToys -- tehokäyttötyökalut

- **Asetustiedosto**: `$env:LOCALAPPDATA\Microsoft\PowerToys\settings.json`
- Moduulien kytkeminen vaatii PowerToysin uudelleenkäynnistyksen

**Suositellut moduulit (päällä):**
AlwaysOnTop, ColorPicker, CmdPal, FancyZones, File Locksmith, Hosts File Editor, Image Resizer, Keyboard Manager, Peek, PowerRename, PowerToys Run, TextExtractor, EnvironmentVariables

**Suositellut moduulit (pois):**
Awake, CropAndLock, FindMyMouse, Measure Tool, MouseHighlighter, MouseJump, MousePointerCrosshairs, MouseWithoutBorders, NewPlus, RegistryPreview, Shortcut Guide, Video Conference Mute, Workspaces

### Greenshot -- kuvakaappaustyökalu

- **Asetustiedosto**: `$env:APPDATA\Greenshot\Greenshot.ini`

:::caution[Tärkeää]
Sulje Greenshot **ennen** asetustiedoston muokkausta -- se ylikirjoittaa tiedoston sulkiessaan.
:::

| Avain | Arvo | Tarkoitus |
|-------|------|-----------|
| `Destinations` | `FileDefault,Clipboard` | Tallenna tiedostoksi + kopioi leikepöydälle |
| `OutputFileFormat` | `png` | Kuvaformaatti |
| `PlayCameraSound` | `False` | Ei suljinaanta |
| `CaptureMousepointer` | `False` | Ei tallenna kursoria |

### Windhawk -- käyttöliittymään muokkaus

- Asennus: `winget install RamenSoftware.Windhawk`
- Asetukset hallitaan Windhawkin omasta käyttöliittymästä

**Suositellut modit:**

| Modi | Tarkoitus |
|------|-----------|
| Disable grouping on the taskbar | Näyttää jokaisen ikkunan erikseen tehtäväpalkissa (ei ryhmitä) |
| Windows 11 Taskbar Styler | Tehtäväpalkin ulkoasun muokkaus (läpinäkyvyys, värit jne.) |
