---
title: Mika on Unslopify?
description: Yleiskatsaus siihen, mita Unslopify tekee ja miksi se on olemassa.
---

## Ongelma

Windows 11 tulee taynna ohjelmistoja joita et pyytanyt:

- **Copilot** -- Microsoftin tekoalyavustaja joka on kaikkialla
- **Recall** -- ottaa kuvakaappauksia kaikesta mita teet (yksityisyysongelma)
- **Telemetria** -- lahettaa kayttoistietoja Microsoftille taustalla
- **Edge** -- pakottaa itsensa oletusselaimeksi ja vastustaa poistamista
- **OneDrive** -- tyrkyttaa pilvitallennusta jatkuvasti
- **AppX-bloatware** -- Candy Crush, Xbox, Bing-sovellukset, TikTok, jne.
- **Ajoitetut tehtavat** -- uudelleenasentavat poistettuja sovelluksia
- **Content Delivery** -- asentaa sovelluksia hiljaisesti taustalla

Tama kaikki vie levytilaa, kayttaa muistia, ja hidastaa tietokonettasi.

## Ratkaisu

Unslopify on kokoelma PowerShell-skripteja jotka:

1. **Poistavat kaiken turhan** (Vaihe 1, 18 skriptia)
2. **Parantavat kayttokokemusta** (Vaihe 2, 9 skriptia)
3. **Tarjoavat alykkaan jarjestelman** tekoalytyokaluille (Vaihe 3)

## Miten se eroaa muista tyokaluista?

| Ominaisuus | Unslopify | WinUtil | O&O ShutUp10 |
|------------|-----------|---------|--------------|
| Avoimen lahdekoodin | Kylla | Kylla | Ei |
| Poistaa Edgen | Kylla | Ei | Ei |
| Poistaa CBS-telemetrian | Kylla | Ei | Ei |
| FOSS-ohjelmistokatalogi | Kylla | Ei | Ei |
| AI-agentti-tuki | Kylla | Ei | Ei |
| Skriptipohjainen (lapinakyva) | Kylla | Osittain | Ei |

## Onko se turvallista?

Kylla, kunhan ymmaarrat mita teet:

- **Jokainen skripti kysyy vahvistusta** ennen tuhoavia operaatioita
- **Rekisterimuutokset varmuuskopioidaan** automaattisesti
- **Palautuspiste luodaan** ennen riskialttiita muutoksia
- **Voit lukea jokaisen skriptin** itse -- ne ovat selkokielisia PowerShell-tiedostoja
- **WebView2:ta ei koskaan poisteta** -- monet sovellukset tarvitsevat sita

:::danger[Varoitukset]
Joitakin asioita ei voi peruuttaa helposti:
- Skripti 2 (CBS-telemetria) tekee syvatason muutoksia jotka vaativat uudelleenasennuksen peruuttamiseen
- Skripti 6 (OneDrive) voi aiheuttaa tietojen menetyksen jos sinulla on "Files On-Demand" -tiedostoja pilvessa
- Skripti 15 (Edge) poistaa Edgen kokonaan -- Windows-haku saattaa menettaa joitakin ominaisuuksia
:::

## Arkkitehtuuri lyhyesti

```
unslopify/
├── Unslopify.ps1              -- Konsolivalikko (kaynnistaja)
├── Unslopify-GUI.ps1          -- Graafinen kaynnistaja (WPF)
├── phase1-unslopify/          -- 18 puhdistusskriptia
│   └── utils/                 -- Jaetut tyokalufunktiot
├── phase2-enhance/            -- 9 parannusskriptia
├── phase3-control/            -- Jarjestelmaaly ja viitetiedostot
│   └── reference/             -- Ohjelmistokatalogi, polut, kohteet
├── backups/                   -- Automaattiset rekisterivarmuuskopiot
└── logs/                      -- Paivittaiset lokitiedostot
```
