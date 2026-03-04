---
title: "Vaihe 1: Puhdistus"
description: 18 puhdistusskriptia riskimatriisilla ja yksityiskohtaisilla selityksilla.
---

Vaihe 1 poistaa Windowsin turhan roskan. Kaikki skriptit vaativat järjestelmänvalvojan oikeudet ja ne käynnistetään konsolivalikosta tai graafisesta käyttöliittymästä.

## Skriptit yleiskatsaus

| # | Skripti | Mitä se tekee | Riski |
|---|---------|--------------|-------|
| 00 | Copilot & Recall | Poistaa Copilotin, Recallin ja Windows AI:n | Matala |
| 01 | Telemetria & CBS | Poistaa CBS-telemetriapaketteja TrustedInstallerilla | **Korkea** |
| 02 | Järjestelmaskanneri | Lukee ja raportoi -- ei muuta mitään | Ei riskia |
| 03 | Ohjelmakansiot | Poistaa tunnetun roskan Program Filesista | Keskitaso |
| 05 | GPU-värit | Tyhjentää NVIDIA/AMD/Intel shader-värit (usein 5-10 GB) | Matala |
| 06 | OneDrive | Poistaa OneDriven kokonaan | **Korkea** |
| 07 | Käynnistä-valikko | Poistaa tyhjät kansiot ja mainoslinkit | Matala |
| 08 | Järjestelmäsiivous | DISM-puhdistus, temp-tiedostot, varattu tila | Keskitaso |
| 09 | Oletussovellukset | Poistaa rikkinaiset oletusohjelmakaaviot | Matala |
| 10 | AppX-bloatware | Massapoistaa kuluttajabloatteen (Xbox, Candy Crush jne.) | Keskitaso |
| 11 | Ajoitetut tehtävät | Poistaa telemetria- ja uudelleenasennustehtävät käytöstä | Matala |
| 12 | Content Delivery | Estää hiljaiseen sovellusten asennukseen ja lukitusnäytön mainokset | Matala |
| 13 | Telemetriapalvelut | Poistaa DiagTrack, Delivery Optimization P2P, WER käytöstä | Matala |
| 14 | Itsepintaiset sovellukset | Pakkopoistaa Teams, Phone Link, Widgets, Cortana, Dev Home | Keskitaso |
| 15 | Microsoft Edge | Poistaa Edgen (säilyttää WebView2:n) | **Korkea** |
| 16 | Laajennettu bloatware | Poistaa Clipchamp, uusi Outlook, To Do, Power Automate jne. | Keskitaso |
| 17 | Esto uudelleenasennus | Estää poistettujen sovellusten paluun | Matala |
| 18 | AppData-siivous | Poistaa poistettujen sovellusten jäämää AppDatasta | Keskitaso |

:::note[Numerointi]
Skripti `04` puuttuu numerojaksosta -- se siirrettiin numeroksi `18` koska AppData-siivous kannattaa ajaa viimeisena.
:::

## Yksityiskohtaiset selitykset

### 00 -- Copilot & Recall (matala riski)

**Mitä se tekee:** Poistaa Windows Copilot -painikkeen, estää Recall-ominaisuuden (joka ottaa kuvakaappauksia kaikesta mitä teet), ja poistaa AI-ominaisuudet käytöstä rekisterimuutoksilla ja Edge-lipuilla.

**Miksi:** Copilot ja Recall kuluttavat resursseja taustalla ja Recall on merkittava yksityisyysongelma.

**Vaatii uudelleenkäynnistyksen** täydelliseen voimaantuloon.

---

### 01 -- Telemetria & CBS (korkea riski)

**Mitä se tekee:** Käyttää TrustedInstaller-oikeuksia poistaakseen syvään Windowsiin upotettuja telemetriapaketteja CBS-järjestelmästä (Component-Based Servicing).

**Miksi:** Nämä paketit lähettävät käyttötietoja Microsoftille eikä niitä voi poistaa tavallisilla keinoilla.

:::danger[Varoitus]
Tämä on syvin ja riskialtein skripti. Se tekee muutoksia joita ei voi peruuttaa ilman Windowsin uudelleenasennusta. Vaatii uudelleenkäynnistyksen.
:::

---

### 02 -- Järjestelmaskanneri (ei riskia)

**Mitä se tekee:** Skannaa järjestelmän ja tulostaa raportin löydetyistä bloatware-kohteista. Ei muuta mitään.

**Miksi:** Hyödyllinen ennen ja jälkeen puhdistuksen nähdäksesi mitkä on löydetty ja mitä on poistettu.

---

### 03 -- Ohjelmakansiot (keskitaso riski)

**Mitä se tekee:** Etsii tunnettua roskaa `Program Files`- ja `ProgramData`-kansioista (antivirus-jäämään, OEM-bloatware, vanhat asennukset).

**Miksi:** Ohjelmat jättävät usein kansioita jäljessään vaikka ne olisi poistettu.

---

### 05 -- GPU-värit (matala riski)

**Mitä se tekee:** Tyhjentää NVIDIA:n, AMD:n ja Intelin shader-värit. Nämä voivat viedä 5-10 GB levytilaa.

**Miksi:** Värit rakentuvat uudelleen automaattisesti kun pelaat tai käytät GPU:ta. Saatat huomata lyhyen pöytelyn ensikäytössä.

---

### 06 -- OneDrive (korkea riski)

**Mitä se tekee:** Poistaa OneDriven kokonaan ja palauttaa kansioiden polut paikallisiksi.

:::danger[Tietojen menetys mahdollinen]
Jos sinulla on tiedostoja jotka ovat **vain pilvessä** (Files On-Demand), ne katoavat pysyvästi. Varmista että kaikki tiedostosi ovat synkronoitu paikallisesti ennen ajamista.
:::

---

### 10 -- AppX-bloatware (keskitaso riski)

**Mitä se tekee:** Poistaa Windows Store -sovelluksia massana: Xbox, Candy Crush, Bing-uutiset, Teams (kuluttajaversio), TikTok, Instagram, Facebook jne.

**Miksi:** Nämä sovellukset vievät levytilaa ja muistia, ja monet niistä asentuvat uudelleen itsestään (siksi tarvitset myös skriptin 17).

---

### 15 -- Microsoft Edge (korkea riski)

**Mitä se tekee:** Poistaa Edge-selaimen kokonaan mutta **säilyttää WebView2:n** (jota monet sovellukset tarvitsevat).

**Miksi:** Edge vastustaa normaalia poistoa ja yrittää pysyä oletusselaimena.

:::caution[Huomio]
Windows-haun verkkoehdotukset lakkaavat toimimasta Edgen poiston jälkeen. Tämä on yleensä toivottu sivuvaikutus.
:::

---

### 17 -- Esto uudelleenasennus (matala riski)

**Mitä se tekee:** Estää Windowsia asentamasta poistettuja sovelluksia uudelleen rekisteri- ja palvelumuutoksilla.

**Miksi:** Ilman tätä skriptia Windows saattaa asentaa Candy Crushin, TikTokin ja muut takaisin seuraavassa päivityksessä.

---

### 18 -- AppData-siivous (keskitaso riski)

**Mitä se tekee:** Etsii ja poistaa poistettujen sovellusten jättämiä tiedostoja AppData-kansioista.

**Miksi:** Aja tämä **viimeisenä** -- se löytää kaikki jäämää muiden skriptien poistamista sovelluksista.

## Turvallisuusrajat

Unslopify ei **koskaan**:

- Poista **WebView2:ta** -- suojattu `$FrameworkExclusions`-listalla
- Poista **TrustedInstaller-palvelua** käytöstä -- rikkoisi Windowsin päivitysjärjestelmän
- Käytä **kovakoodattuja polkuja** -- käyttää aina `$env:SystemRoot`, `$env:ProgramFiles` jne.
- Tee muutoksia **ilman vahvistusta** tuhoavissa operaatioissa
