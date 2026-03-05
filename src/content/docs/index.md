---
title: "Vaihe 1: Puhdistus"
description: 18 puhdistusskriptia yksityiskohtaisilla selityksilla.
---

## Skriptien yleiskatsaus

| # | Skripti | Mita se tekee |
|---|---------|--------------|
| 01 | Pikaskannaus | Jarjestelmatiedot ja debloat-tila -- ei muuta mitaan |
| 02 | Telemetria & CBS | Poistaa CBS-telemetriapaketteja TrustedInstallerilla |
| 03 | Ohjelmakansiot | Poistaa tunnetun roskan Program Filesista |
| 04 | Copilot & Recall | Poistaa Copilotin, Recallin ja Windows AI:n |
| 05 | GPU-varit | Tyhjentaa NVIDIA/AMD/Intel shader-varit (usein 5-10 GB) |
| 06 | OneDrive | Poistaa OneDriven kokonaan |
| 07 | Kaynnista-valikko | Poistaa tyhjat kansiot ja mainoslinkit |
| 08 | Jarjestelmasiivous | DISM-puhdistus, temp-tiedostot, varattu tila |
| 09 | Oletussovellukset | Poistaa rikkinaiset oletusohjelmakaaviot |
| 10 | AppX-bloatware | Massapoistaa kuluttajabloatteen (Xbox, Candy Crush jne.) |
| 11 | Ajoitetut tehtavat | Poistaa telemetria- ja uudelleenasennustehtavat kaytosta |
| 12 | Content Delivery | Estaa hiljaisen sovellusten asennuksen ja lukitusnayton mainokset |
| 13 | Telemetriapalvelut | Poistaa DiagTrack, Delivery Optimization P2P, WER kaytosta |
| 14 | Itsepintaiset sovellukset | Pakkopoistaa Teams, Phone Link, Widgets, Cortana, Dev Home |
| 15 | Microsoft Edge | Poistaa Edgen (sailyttaa WebView2:n) |
| 16 | Laajennettu bloatware | Poistaa Clipchamp, uusi Outlook, To Do, Power Automate jne. |
| 17 | Esto uudelleenasennus | Estaa poistettujen sovellusten paluun |
| 18 | AppData-siivous | Poistaa poistettujen sovellusten jaamaa AppDatasta |


## Yksityiskohtaiset selitykset

### 01 -- Pikaskannaus

**Mita se tekee:** Skannaa jarjestelman ja tulostaa pikakatsauksen jarjestelmatiedoista ja debloat-tilasta. Ei muuta mitaan.

**Miksi:** Hyodyllinen ennen ja jalkeen puhdistuksen nahdaksesi nykytilan. Syvaskannaus loydyy Vaiheesta 3.

---

### 02 -- Telemetria & CBS

**Mita se tekee:** Kayttaa TrustedInstaller-oikeuksia poistaakseen syvaan Windowsiin upotettuja telemetriapaketteja CBS-jarjestelmasta (Component-Based Servicing).

**Miksi:** Nama paketit lahettavat kayttotietoja Microsoftille eika niita voi poistaa tavallisilla keinoilla.

:::danger[Varoitus]
Tama on syvin skripti. Se tekee muutoksia joita ei voi peruuttaa ilman Windowsin uudelleenasennusta. Vaatii uudelleenkaynnistyksen.
:::

---

### 03 -- Ohjelmakansiot

**Mita se tekee:** Etsii tunnettua roskaa `Program Files`- ja `ProgramData`-kansioista (antivirus-jaamaa, OEM-bloatware, vanhat asennukset).

**Miksi:** Ohjelmat jattavat usein kansioita jaljessaan vaikka ne olisi poistettu.

---

### 04 -- Copilot & Recall

**Mita se tekee:** Poistaa Windows Copilot -painikkeen, estaa Recall-ominaisuuden (joka ottaa kuvakaappauksia kaikesta mita teet), ja poistaa AI-ominaisuudet kaytosta rekisterimuutoksilla ja Edge-lipuilla.

**Miksi:** Copilot ja Recall kuluttavat resursseja taustalla ja Recall on merkittava yksityisyysongelma.

**Vaatii uudelleenkaynnistyksen** taydelliseen voimaantuloon.

---

### 05 -- GPU-varit

**Mita se tekee:** Tyhjentaa NVIDIA:n, AMD:n ja Intelin shader-varit. Nama voivat vieda 5-10 GB levytilaa.

**Miksi:** Varit rakentuvat uudelleen automaattisesti kun pelaat tai kaytat GPU:ta. Saatat huomata lyhyen potelyn ensikaytossa.

---

### 06 -- OneDrive

**Mita se tekee:** Poistaa OneDriven kokonaan ja palauttaa kansioiden polut paikallisiksi.

:::danger[Tietojen menetys mahdollinen]
Jos sinulla on tiedostoja jotka ovat **vain pilvessa** (Files On-Demand), ne katoavat pysyvasti. Varmista etta kaikki tiedostosi ovat synkronoitu paikallisesti ennen ajamista.
:::

---

### 10 -- AppX-bloatware

**Mita se tekee:** Poistaa Windows Store -sovelluksia massana: Xbox, Candy Crush, Bing-uutiset, Teams (kuluttajaversio), TikTok, Instagram, Facebook jne.

**Miksi:** Nama sovellukset vievat levytilaa ja muistia, ja monet niista asentuvat uudelleen itsestaan (siksi tarvitset myos skriptin 17).

---

### 15 -- Microsoft Edge

**Mita se tekee:** Poistaa Edge-selaimen kokonaan mutta **sailyttaa WebView2:n** (jota monet sovellukset tarvitsevat).

**Miksi:** Edge vastustaa normaalia poistoa ja yrittaa pysya oletusselaimena.

:::caution[Huomio]
Windows-haun verkkoehdotukset lakkaavat toimimasta Edgen poiston jalkeen. Tama on yleensa toivottu sivuvaikutus.
:::

---

### 17 -- Esto uudelleenasennus

**Mita se tekee:** Estaa Windowsia asentamasta poistettuja sovelluksia uudelleen rekisteri- ja palvelumuutoksilla.

**Miksi:** Ilman tata skriptia Windows saattaa asentaa Candy Crushin, TikTokin ja muut takaisin seuraavassa paivityksessa.

---

### 18 -- AppData-siivous

**Mita se tekee:** Etsii ja poistaa poistettujen sovellusten jattamia tiedostoja AppData-kansioista.

**Miksi:** Aja tama **viimeisena** -- se loytaa kaikki jaamaa muiden skriptien poistamista sovelluksista.

## Turvallisuusrajat

Unslopify ei **koskaan**:

- Poista **WebView2:ta** -- suojattu `$FrameworkExclusions`-listalla
- Poista **TrustedInstaller-palvelua** kaytosta -- rikkoisi Windowsin paivitysjarjestelman
- Kayta **kovakoodattuja polkuja** -- kayttaa aina `$env:SystemRoot`, `$env:ProgramFiles` jne.
- Tee muutoksia **ilman vahvistusta** tuhoavissa operaatioissa
