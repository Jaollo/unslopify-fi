---
title: "Vaihe 1: Puhdistus"
description: 18 puhdistusskriptia riskimatriisilla ja yksityiskohtaisilla selityksilla.
---

Vaihe 1 poistaa Windowsin turhan roskan. Kaikki skriptit vaativat jarjestelmanvalvojan oikeudet ja ne kaynnistetaan konsolivalikosta tai graafisesta kayttoliittymasta.

## Skriptit yleiskatsaus

| # | Skripti | Mita se tekee | Riski |
|---|---------|--------------|-------|
| 00 | Copilot & Recall | Poistaa Copilotin, Recallin ja Windows AI:n | Matala |
| 01 | Telemetria & CBS | Poistaa CBS-telemetriapaketteja TrustedInstallerilla | **Korkea** |
| 02 | Jarjestelmaskanneri | Lukee ja raportoi -- ei muuta mitaan | Ei riskia |
| 03 | Ohjelmakansiot | Poistaa tunnetun roskan Program Filesista | Keskitaso |
| 05 | GPU-varit | Tyhjentaa NVIDIA/AMD/Intel shader-varit (usein 5-10 GB) | Matala |
| 06 | OneDrive | Poistaa OneDriven kokonaan | **Korkea** |
| 07 | Kaynnista-valikko | Poistaa tyhjat kansiot ja mainoslinkit | Matala |
| 08 | Jarjestelmasiivous | DISM-puhdistus, temp-tiedostot, varattu tila | Keskitaso |
| 09 | Oletussovellukset | Poistaa rikkinaiset oletusohjelmamaaritykset | Matala |
| 10 | AppX-bloatware | Massapoistaa kuluttajabloatwaren (Xbox, Candy Crush jne.) | Keskitaso |
| 11 | Ajoitetut tehtavat | Poistaa telemetria- ja uudelleenasennustehtavat kaytosta | Matala |
| 12 | Content Delivery | Estaa hiljaisen sovellusten asennuksen ja lukitusnaytonmainokset | Matala |
| 13 | Telemetriapalvelut | Poistaa DiagTrack, Delivery Optimization P2P, WER kaytosta | Matala |
| 14 | Itsepintaiset sovellukset | Pakkopoistaa Teams, Phone Link, Widgets, Cortana, Dev Home | Keskitaso |
| 15 | Microsoft Edge | Poistaa Edgen (sailyttaa WebView2:n) | **Korkea** |
| 16 | Laajennettu bloatware | Poistaa Clipchamp, uusi Outlook, To Do, Power Automate jne. | Keskitaso |
| 17 | Esto uudelleenasennus | Estaa poistettujen sovellusten paluun | Matala |
| 18 | AppData-siivous | Poistaa poistettujen sovellusten jaanteet AppDatasta | Keskitaso |

:::note[Numerointi]
Skripti `04` puuttuu numerojaksosta -- se siirrettiin numeroksi `18` koska AppData-siivous kannattaa ajaa viimeisena.
:::

## Yksityiskohtaiset selitykset

### 00 -- Copilot & Recall (matala riski)

**Mita se tekee:** Poistaa Windows Copilot -painikkeen, estaa Recall-ominaisuuden (joka ottaa kuvakaappauksia kaikesta mita teet), ja poistaa AI-ominaisuudet kaytosta rekisterimuutoksilla ja Edge-lipuilla.

**Miksi:** Copilot ja Recall kuluttavat resursseja taustalla ja Recall on merkittava yksityisyysongelma.

**Vaatii uudelleenkaynnistyksen** taydelliseen voimaantuloon.

---

### 01 -- Telemetria & CBS (korkea riski)

**Mita se tekee:** Kayttaa TrustedInstaller-oikeuksia poistaakseen syvalle Windowsiin upotettuja telemetriapaketteja CBS-jarjestelmasta (Component-Based Servicing).

**Miksi:** Nama paketit lahettavat kayttotietoja Microsoftille eika niita voi poistaa tavallisilla keinoilla.

:::danger[Varoitus]
Tama on syvin ja riskialttiin skripti. Se tekee muutoksia joita ei voi peruuttaa ilman Windowsin uudelleenasennusta. Vaatii uudelleenkaynnistyksen.
:::

---

### 02 -- Jarjestelmaskanneri (ei riskia)

**Mita se tekee:** Skannaa jarjestelman ja tulostaa raportin loedetuista bloatware-kohteista. Ei muuta mitaan.

**Miksi:** Hyodyllinen ennen ja jalkeen puhdistuksen nahdaksesi mitka on loydetty ja mita on poistettu.

---

### 03 -- Ohjelmakansiot (keskitaso riski)

**Mita se tekee:** Etsii tunnettua roskaa `Program Files`- ja `ProgramData`-kansioista (antivirus-jaanteet, OEM-bloatware, vanhat asenukset).

**Miksi:** Ohjelmat jattavat usein kansioita jalkensa vaikka ne olisi poistettu.

---

### 05 -- GPU-varit (matala riski)

**Mita se tekee:** Tyhjentaa NVIDIA:n, AMD:n ja Intelin shader-varit. Nama voivat viedaan 5-10 GB levytilaa.

**Miksi:** Varit rakentuvat uudelleen automaattisesti kun pelaat tai kaytat GPU:ta. Saatat huomata lyhyen paatelyn ensikaytossa.

---

### 06 -- OneDrive (korkea riski)

**Mita se tekee:** Poistaa OneDriven kokonaan ja palauttaa kansioiden polut paikallisiksi.

:::danger[Tietojen menetys mahdollinen]
Jos sinulla on tiedostoja jotka ovat **vain pilvessa** (Files On-Demand), ne katoavat pysyvasti. Varmista etta kaikki tiedostosi ovat synkronoitu paikallisesti ennen ajamista.
:::

---

### 10 -- AppX-bloatware (keskitaso riski)

**Mita se tekee:** Poistaa Windows Store -sovelluksia massana: Xbox, Candy Crush, Bing-uutiset, Teams (kuluttajaversio), TikTok, Instagram, Facebook jne.

**Miksi:** Nama sovellukset vievat levytilaa ja muistia, ja monet niista asentuvat uudelleen itsestaan (siksi tarvitset myos skriptin 17).

---

### 15 -- Microsoft Edge (korkea riski)

**Mita se tekee:** Poistaa Edge-selaimen kokonaan mutta **sailyttaa WebView2:n** (jota monet sovellukset tarvitsevat).

**Miksi:** Edge vastustaa normaalia poistoa ja yrittaa pysya oletusselaimena.

:::caution[Huomio]
Windows-haun verkkoehdotukset lakkaavat toimimasta Edgen poiston jalkeen. Tama on yleensa toivottu sivuvaikutus.
:::

---

### 17 -- Esto uudelleenasennus (matala riski)

**Mita se tekee:** Estaa Windowsia asentamasta poistettuja sovelluksia uudelleen rekisteri- ja palvelumuutoksilla.

**Miksi:** Ilman tata skriptia Windows saattaa asentaa Candy Crushin, TikTokin ja muut takaisin seuraavassa paivityksessa.

---

### 18 -- AppData-siivous (keskitaso riski)

**Mita se tekee:** Etsii ja poistaa poistettujen sovellusten jattamia tiedostoja AppData-kansioista.

**Miksi:** Aja tama **viimeisena** -- se loytaa kaikki jaanteet muiden skriptien poistamista sovelluksista.

## Turvallisuusrajat

Unslopify ei **koskaan**:

- Poista **WebView2:ta** -- suojattu `$FrameworkExclusions`-listalla
- Poista **TrustedInstaller-palvelua** kaytosta -- rikkoisi Windowsin paivitysjarjestelman
- Kayta **kovakoodattuja polkuja** -- kayttaa aina `$env:SystemRoot`, `$env:ProgramFiles` jne.
- Tee muutoksia **ilman vahvistusta** tuhoisissa operaatioissa
