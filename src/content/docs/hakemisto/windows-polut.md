---
title: Windows-polut
description: Hakemisto- ja rekisteriviiteopas Windows 11:lle.
---

## Kayttajan kansiot

| Muuttuja | Tyypillinen polku | Sisalto |
|----------|------------------|---------|
| `$env:USERPROFILE` | `C:\Users\<nimi>` | Kayttajan juurikansio |
| `$env:APPDATA` | `C:\Users\<nimi>\AppData\Roaming` | Ohjelmien asetukset (siirtyy profiilin mukana) |
| `$env:LOCALAPPDATA` | `C:\Users\<nimi>\AppData\Local` | Ohjelmien paikalliset tiedot |
| `$env:TEMP` / `$env:TMP` | `C:\Users\<nimi>\AppData\Local\Temp` | Valiaikaiset tiedostot |
| `$env:HOMEPATH` | `\Users\<nimi>` | Suhteellinen kotikansion polku |

### AppData-alikansiot selitettyna

| Kansio | Mita sinne menee |
|--------|-----------------|
| `AppData\Local` | Varit, tietokannat, iso ohjelma-data -- ei siirry koneiden valilla |
| `AppData\LocalLow` | Matalan turvallisuustason ohjelmat (selaimet, Java) |
| `AppData\Roaming` | Asetustiedostot jotka siirtyvat domain-profiilin mukana |

:::tip[Vinkki]
Helpoin tapa avata AppData-kansio: paina `Win+R`, kirjoita `%appdata%` ja paina Enter. Paaset suoraan Roaming-kansioon.
:::

## Jarjestelmakansiot

| Muuttuja | Tyypillinen polku | Sisalto |
|----------|------------------|---------|
| `$env:SystemRoot` | `C:\Windows` | Windows-kayttojarjestelma |
| `$env:SystemDrive` | `C:` | Jarjestelmalevyn kirjain |
| `$env:ProgramFiles` | `C:\Program Files` | 64-bittiset ohjelmat |
| `${env:ProgramFiles(x86)}` | `C:\Program Files (x86)` | 32-bittiset ohjelmat |
| `$env:ProgramData` | `C:\ProgramData` | Koko koneen laajuinen ohjelma-data |
| `$env:windir` | `C:\Windows` | Sama kuin SystemRoot |

## Kaynnistyskansiot

Ohjelmat naissa kansioissa kaynnistyvat automaattisesti kirjautumisen yhteydessa:

| Laajuus | Polku |
|---------|-------|
| Nykyinen kayttaja | `$env:APPDATA\Microsoft\Windows\Start Menu\Programs\Startup` |
| Kaikki kayttajat | `$env:ProgramData\Microsoft\Windows\Start Menu\Programs\Startup` |
| Pikakomento | `shell:startup` (kayttaja) / `shell:common startup` (kaikki) |

:::tip[Vinkki]
Paina `Win+R` ja kirjoita `shell:startup` avataksesi kaynnistyskansion suoraan.
:::

## Rekisteripolut

### Paakantahaarukkat

| Haara | PowerShell-asema | Laajuus |
|-------|-----------------|---------|
| HKEY_CURRENT_USER | `HKCU:` | Nykyisen kayttajan asetukset |
| HKEY_LOCAL_MACHINE | `HKLM:` | Koko koneen asetukset |
| HKEY_CLASSES_ROOT | `HKCR:` (vaatii `New-PSDrive`) | Tiedostoyhteydet, COM |

### Yleisimmat rekisteripolut

| Polku | Tarkoitus |
|-------|-----------|
| `HKCU:\...\CurrentVersion\Run` | Kayttajan kaynnistysohjelmat |
| `HKLM:\...\CurrentVersion\Run` | Koneen kaynnistysohjelmat |
| `HKCU:\...\Explorer\Advanced` | Resurssienhallinnan asetukset |
| `HKLM:\...\Policies\Microsoft\Windows` | Ryhmakaytantomaaritykset |
| `HKCU:\...\Directory\Background\shell` | Kontekstivalikko (tausta) |
| `HKCU:\...\Directory\shell` | Kontekstivalikko (kansio) |

## GPU-varisijainnit

| Naytonohjain | Varipolku |
|-------------|-----------|
| NVIDIA | `$env:LOCALAPPDATA\NVIDIA\DXCache` |
| NVIDIA | `$env:LOCALAPPDATA\NVIDIA\GLCache` |
| NVIDIA | `$env:TEMP\NVIDIA Corporation` |
| AMD | `$env:LOCALAPPDATA\AMD\DxCache` |
| AMD | `$env:LOCALAPPDATA\AMD\GLCache` |
| Intel | `$env:LOCALAPPDATA\Intel\ShaderCache` |
| DirectX | `$env:LOCALAPPDATA\D3DSCache` |

## Valiaikais- ja varikansiot

| Polku | Tarkoitus |
|-------|-----------|
| `$env:TEMP` | Kayttajan valiaikaiset tiedostot |
| `$env:SystemRoot\Temp` | Jarjestelman valiaikaiset tiedostot |
| `$env:LOCALAPPDATA\...\INetCache` | IE/Edge-vari |
| `$env:LOCALAPPDATA\...\Explorer` | Pikkukuvavari (`thumbcache_*.db`) |
| `$env:SystemRoot\SoftwareDistribution\Download` | Windows Update -lataukset |
| `$env:SystemRoot\Logs\CBS` | Component-Based Servicing -lokit |

## Windows Update ja yllapito

| Polku | Tarkoitus |
|-------|-----------|
| `$env:SystemRoot\WinSxS` | Side-by-side-komponenttivarasto |
| `$env:SystemRoot\SoftwareDistribution` | Windows Update -data |
| `$env:SystemRoot\Logs\DISM` | DISM-operaatiologit |
| `$env:SystemRoot\Panther` | Asennus- ja paivityslokit |
