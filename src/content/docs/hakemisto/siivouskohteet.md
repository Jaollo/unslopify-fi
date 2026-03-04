---
title: Siivouskohteet
description: "~150 tunnettua bloatware- ja orpotiedostokaavaa kategorioittain."
---

Tunnetut bloatware- ja orpotiedostokaavat on kerätty Vaiheen 1 skripteista 03 ja 18. Järjestelmäskanneri (`scan-system.ps1`) käyttää näitä tunnistakseen jäänteet. Kaikki polut käyttävät ympäristömuuttujia.

## Program Files (~35 kohdetta)

### Mainosohjelmat / Paketoidut ohjelmat

Nämä tulevat usein valmiiksi asennettuina uusissa tietokoneissa:

- `$env:ProgramFiles\Adobe`
- `$env:ProgramFiles\CapCut`
- `$env:ProgramFiles\Lavasoft`
- `${env:ProgramFiles(x86)}\Adobe`
- `${env:ProgramFiles(x86)}\CapCut`

### Antivirusohjelmien kokeiluversiot / Jäänteet

OEM-valmistajat asentavat näitä uusiin koneisiin. Poiston jälkeen ne jättävät usein kansioita:

- `$env:ProgramFiles\McAfee`
- `$env:ProgramFiles\McAfee.com`
- `$env:ProgramFiles\Norton`
- `$env:ProgramFiles\NortonLifeLock`
- `$env:ProgramFiles\Symantec`
- `$env:ProgramFiles\Kaspersky Lab`
- `$env:ProgramFiles\ESET`
- `$env:ProgramFiles\Avast Software`
- `$env:ProgramFiles\AVG`
- `$env:ProgramFiles\Malwarebytes`
- `${env:ProgramFiles(x86)}\McAfee`
- `${env:ProgramFiles(x86)}\McAfee.com`
- `${env:ProgramFiles(x86)}\Norton`
- `${env:ProgramFiles(x86)}\NortonLifeLock`
- `${env:ProgramFiles(x86)}\Symantec`
- `${env:ProgramFiles(x86)}\SymSilent`
- `${env:ProgramFiles(x86)}\Malwarebytes`

### Apple (lopetettu / EOL)

iTunes ja QuickTime ovat aikansa eläneitä mutta jäävät usein koneelle:

- `$env:ProgramFiles\Bonjour`
- `$env:ProgramFiles\iTunes`
- `$env:ProgramFiles\QuickTime`
- `$env:ProgramFiles\iPod`
- `$env:ProgramFiles\Common Files\Apple`
- `${env:ProgramFiles(x86)}\Apple Software Update`
- `${env:ProgramFiles(x86)}\Bonjour`
- `${env:ProgramFiles(x86)}\iTunes`
- `${env:ProgramFiles(x86)}\QuickTime`
- `${env:ProgramFiles(x86)}\iPod`
- `${env:ProgramFiles(x86)}\Common Files\Apple`

### Kuolleet mediasoittimet

- `$env:ProgramFiles\Real`
- `$env:ProgramFiles\RealNetworks`
- `${env:ProgramFiles(x86)}\Real`
- `${env:ProgramFiles(x86)}\RealNetworks`

### Tietokonevalmistajien bloatware

Nämä tulevat valmiiksi HP-, Dell-, Lenovo- ja muiden valmistajien koneissa:

- `$env:ProgramFiles\HP`
- `$env:ProgramFiles\HPSoftware`
- `$env:ProgramFiles\Dell`
- `$env:ProgramFiles\Lenovo`
- `$env:ProgramFiles\ASUS`
- `$env:ProgramFiles\ASUSTeK`
- `$env:ProgramFiles\Acer`
- `$env:ProgramFiles\MSI`
- `$env:ProgramFiles\Samsung`
- `$env:ProgramFiles\Toshiba`
- `${env:ProgramFiles(x86)}\HP`
- `${env:ProgramFiles(x86)}\Lenovo`
- `${env:ProgramFiles(x86)}\Dell`
- `${env:ProgramFiles(x86)}\ASUS`

### Etahallinta / Apuohjelmat

- `$env:ProgramFiles\TeamViewer`
- `$env:ProgramFiles\AnyDesk`
- `$env:ProgramFiles\CCleaner`

### Kuolleet suoritusympäristöt / Mainosstyökalupalkit

Nämä ovat jopa vuosikymmenia vanhoja ohjelmia jotka roikkuvat järjestelmässä:

- `$env:ProgramFiles\Microsoft Silverlight`
- `${env:ProgramFiles(x86)}\Microsoft Silverlight`
- `${env:ProgramFiles(x86)}\Ask.com`
- `${env:ProgramFiles(x86)}\Babylon`
- `${env:ProgramFiles(x86)}\Conduit`
- `${env:ProgramFiles(x86)}\Search Protect`
- `${env:ProgramFiles(x86)}\Qualcomm`

---

## ProgramData (~15 kohdetta)

Koko koneen laajuista ohjelma-dataa -- nämä jäävät usein poiston jälkeen:

- `$env:ProgramData\Adobe`
- `$env:ProgramData\CapCut`
- `$env:ProgramData\Dbg`
- `$env:ProgramData\install_clap`
- `$env:ProgramData\Package Cache`
- `$env:ProgramData\McAfee`
- `$env:ProgramData\Norton`
- `$env:ProgramData\Symantec`
- `$env:ProgramData\Kaspersky Lab`
- `$env:ProgramData\ESET`
- `$env:ProgramData\Avast Software`
- `$env:ProgramData\AVG`
- `$env:ProgramData\Malwarebytes`
- `$env:ProgramData\Lavasoft`
- `$env:ProgramData\HP`
- `$env:ProgramData\Hewlett-Packard`
- `$env:ProgramData\Dell`
- `$env:ProgramData\Lenovo`
- `$env:ProgramData\ASUS`
- `$env:ProgramData\Acer`
- `$env:ProgramData\MSI`
- `$env:ProgramData\Samsung`
- `$env:ProgramData\Toshiba`
- `$env:ProgramData\Apple`
- `$env:ProgramData\Google`
- `$env:ProgramData\Electronic Arts`

---

## AppData Local (~25 kohdetta)

### Kuolleet tekniikkavariat (aina turvallista poistaa)

- `Local\D3DSCache`
- `Local\CrashDumps`
- `Local\Microsoft\Windows\WER`
- `Local\Microsoft\Windows\GameExplorer`
- `Local\ConnectedDevicesPlatform`
- `Local\VirtualStore`

### Pelikäynnistimien jäänteet (jos poistettu)

- `Local\EpicGamesLauncher`
- `Local\Battle.net`
- `Local\Blizzard Entertainment`
- `Local\Amazon Games`
- `Local\Rockstar Games`
- `Local\Riot Games`
- `Local\Overwolf`

### Sovellusten jäänteet (jos poistettu)

- `Local\Discord`
- `Local\slack`
- `Local\Spotify`
- `Local\Zoom`
- `Local\WhatsApp`
- `Local\Teams`
- `Local\AzureFunctionsTools`
- `Local\Origin`

### Antivirusohjelmien jäänteet (jos poistettu)

- `Local\AVAST Software`
- `Local\AVG`
- `Local\Malwarebytes`
- `Local\Piriform`

### Oheislaitteiden ohjelmistot (jos poistettu)

- `Local\Razer`
- `Local\Corsair`
- `Local\SteelSeries`
- `Local\Logitech`
- `Local\NZXT`

---

## AppData LocalLow (~6 kohdetta)

- `LocalLow\Sun\Java`
- `LocalLow\Oracle\Java`
- `LocalLow\Adobe\Flash Player`
- `LocalLow\Macromedia\Flash Player`
- `LocalLow\Apple`
- `LocalLow\Apple Computer`

---

## AppData Roaming (~25 kohdetta)

### Kuollut tekniikka

- `Roaming\com.adobe.dunamis`
- `Roaming\Macromedia`
- `Roaming\Adobe\Flash Player`

### Vanhojen sovellusten jäänteet (jos poistettu)

- `Roaming\Skype`
- `Roaming\discord`
- `Roaming\Spotify`
- `Roaming\Slack`
- `Roaming\Zoom`
- `Roaming\Dropbox`
- `Roaming\TeamViewer`
- `Roaming\AnyDesk`
- `Roaming\uTorrent`
- `Roaming\BitTorrent`
- `Roaming\GIMP`
- `Roaming\EasyAntiCheat`

### Antivirusohjelmien / apuohjelmien jäänteet (jos poistettu)

- `Roaming\Malwarebytes`
- `Roaming\AVAST Software`
- `Roaming\AVG`
- `Roaming\Piriform`

### Oheislaitteiden ohjelmistot (jos poistettu)

- `Roaming\Nahimic`
- `Roaming\Razer`
- `Roaming\Corsair`
- `Roaming\SteelSeries`
- `Roaming\Logitech`
- `Roaming\Apple Computer`

### Pelikäynnistimien jäänteet (jos poistettu)

- `Roaming\Wargaming.net`
- `Roaming\Battlestate Games`
- `Roaming\Overwolf`
- `Roaming\RiotGames`
- `Roaming\Rockstar Games`
- `Roaming\Ubisoft Game Launcher`
- `Roaming\GOG.com`
- `Roaming\Bethesda.net Launcher`
- `Roaming\IObit`
