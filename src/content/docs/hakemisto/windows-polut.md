---
title: Windows-polut
description: Hakemisto- ja rekisteriviiteopas Windows 11:lle.
---

## Käyttäjän kansiot

| Muuttuja | Tyypillinen polku | Sisältö |
|----------|------------------|---------|
| `$env:USERPROFILE` | `C:\Users\<nimi>` | Käyttäjän juurikansio |
| `$env:APPDATA` | `C:\Users\<nimi>\AppData\Roaming` | Ohjelmien asetukset (siirtyy profiilin mukana) |
| `$env:LOCALAPPDATA` | `C:\Users\<nimi>\AppData\Local` | Ohjelmien paikalliset tiedot |
| `$env:TEMP` / `$env:TMP` | `C:\Users\<nimi>\AppData\Local\Temp` | Väliaikaiset tiedostot |
| `$env:HOMEPATH` | `\Users\<nimi>` | Suhteellinen kotikansion polku |

### AppData-alikansiot selitettynä

| Kansio | Mitä sinne menee |
|--------|-----------------|
| `AppData\Local` | Värit, tietokannat, iso ohjelma-data -- ei siirry koneiden välillä |
| `AppData\LocalLow` | Matalan turvallisuustason ohjelmat (selaimet, Java) |
| `AppData\Roaming` | Asetustiedostot jotka siirtyvat domain-profiilin mukana |

:::tip[Vinkki]
Helpoin tapa avata AppData-kansio: paina `Win+R`, kirjoita `%appdata%` ja paina Enter. Pääset suoraan Roaming-kansioon.
:::

## Järjestelmäkansiot

| Muuttuja | Tyypillinen polku | Sisältö |
|----------|------------------|---------|
| `$env:SystemRoot` | `C:\Windows` | Windows-käyttöjärjestelmä |
| `$env:SystemDrive` | `C:` | Järjestelmälevyn kirjain |
| `$env:ProgramFiles` | `C:\Program Files` | 64-bittiset ohjelmat |
| `${env:ProgramFiles(x86)}` | `C:\Program Files (x86)` | 32-bittiset ohjelmat |
| `$env:ProgramData` | `C:\ProgramData` | Koko koneen laajuinen ohjelma-data |
| `$env:windir` | `C:\Windows` | Sama kuin SystemRoot |

## Käynnistyskansiot

Ohjelmat näissä kansioissa käynnistyvät automaattisesti kirjautumisen yhteydessä:

| Laajuus | Polku |
|---------|-------|
| Nykyinen käyttäjä | `$env:APPDATA\Microsoft\Windows\Start Menu\Programs\Startup` |
| Kaikki käyttäjät | `$env:ProgramData\Microsoft\Windows\Start Menu\Programs\Startup` |
| Pikakomento | `shell:startup` (käyttäjä) / `shell:common startup` (kaikki) |

:::tip[Vinkki]
Paina `Win+R` ja kirjoita `shell:startup` avataksesi käynnistyskansion suoraan.
:::

## Rekisteripolut

### Pääkantahaarukkat

| Haara | PowerShell-asema | Laajuus |
|-------|-----------------|---------|
| HKEY_CURRENT_USER | `HKCU:` | Nykyisen käyttäjän asetukset |
| HKEY_LOCAL_MACHINE | `HKLM:` | Koko koneen asetukset |
| HKEY_CLASSES_ROOT | `HKCR:` (vaatii `New-PSDrive`) | Tiedostoyhteydet, COM |

### Yleisimmat rekisteripolut

| Polku | Tarkoitus |
|-------|-----------|
| `HKCU:\...\CurrentVersion\Run` | Käyttäjän käynnistysohjelmat |
| `HKLM:\...\CurrentVersion\Run` | Koneen käynnistysohjelmat |
| `HKCU:\...\Explorer\Advanced` | Resurssienhallinnan asetukset |
| `HKLM:\...\Policies\Microsoft\Windows` | Ryhmäkäytäntömääritykset |
| `HKCU:\...\Directory\Background\shell` | Kontekstivalikko (tausta) |
| `HKCU:\...\Directory\shell` | Kontekstivalikko (kansio) |

## GPU-väriesijainnit

| Näytönohjain | Väripolku |
|-------------|-----------|
| NVIDIA | `$env:LOCALAPPDATA\NVIDIA\DXCache` |
| NVIDIA | `$env:LOCALAPPDATA\NVIDIA\GLCache` |
| NVIDIA | `$env:TEMP\NVIDIA Corporation` |
| AMD | `$env:LOCALAPPDATA\AMD\DxCache` |
| AMD | `$env:LOCALAPPDATA\AMD\GLCache` |
| Intel | `$env:LOCALAPPDATA\Intel\ShaderCache` |
| DirectX | `$env:LOCALAPPDATA\D3DSCache` |

## Väliaikais- ja värikansiot

| Polku | Tarkoitus |
|-------|-----------|
| `$env:TEMP` | Käyttäjän väliaikaiset tiedostot |
| `$env:SystemRoot\Temp` | Järjestelmän väliaikaiset tiedostot |
| `$env:LOCALAPPDATA\...\INetCache` | IE/Edge-väri |
| `$env:LOCALAPPDATA\...\Explorer` | Pikkukuvaväri (`thumbcache_*.db`) |
| `$env:SystemRoot\SoftwareDistribution\Download` | Windows Update -lataukset |
| `$env:SystemRoot\Logs\CBS` | Component-Based Servicing -lokit |

## Windows Update ja ylläpito

| Polku | Tarkoitus |
|-------|-----------|
| `$env:SystemRoot\WinSxS` | Side-by-side-komponenttivarasto |
| `$env:SystemRoot\SoftwareDistribution` | Windows Update -data |
| `$env:SystemRoot\Logs\DISM` | DISM-operaatiologit |
| `$env:SystemRoot\Panther` | Asennus- ja päivityslokit |
