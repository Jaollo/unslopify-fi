---
title: Mikä on Unslopify?
description: Yleiskatsaus siihen, mitä Unslopify tekee ja miksi se on olemassa.
---

## Ongelma

Windows 11 tulee täynnä ohjelmistoja joita et pyytänyt:

- **Copilot** -- Microsoftin tekoalyavustaja joka on kaikkialla
- **Recall** -- ottaa kuvakaappauksia kaikesta mitä teet (yksityisyysongelma)
- **Telemetria** -- lähettää käyttötietoja Microsoftille taustalla
- **Edge** -- pakottaa itsensa oletusselaimeksi ja vastustaa poistamista
- **OneDrive** -- tyrkyttaa pilvitallennusta jatkuvasti
- **AppX-bloatware** -- Candy Crush, Xbox, Bing-sovellukset, TikTok, jne.
- **Ajoitetut tehtävät** -- uudelleenasentavat poistettuja sovelluksia
- **Content Delivery** -- asentaa sovelluksia hiljaisesti taustalla

Tämä kaikki vie levytilaa, käyttää muistia, ja hidastaa tietokonettasi.

## Ratkaisu

Unslopify on kokoelma PowerShell-skripteja jotka:

1. **Poistavat kaiken turhan** (Vaihe 1, 18 skriptia)
2. **Parantavat käyttökokemusta** (Vaihe 2, 9 skriptia)
3. **Tarjoavat älykästä järjestelmää** tekoälytyökaluille (Vaihe 3)

## Miten se eroaa muista työkaluista?

| Ominaisuus | Unslopify | WinUtil | O&O ShutUp10 |
|------------|-----------|---------|--------------|
| Avoimen lähdekoodin | Kyllä | Kyllä | Ei |
| Poistaa Edgen | Kyllä | Ei | Ei |
| Poistaa CBS-telemetrian | Kyllä | Ei | Ei |
| FOSS-ohjelmistokatalogi | Kyllä | Ei | Ei |
| AI-agentti-tuki | Kyllä | Ei | Ei |
| Skriptipohjainen (läpinäkyvä) | Kyllä | Osittain | Ei |

## Onko se turvallista?

Kyllä, kunhan ymmärrät mitä teet:

- **Jokainen skripti kysyy vahvistusta** ennen tuhoavia operaatioita
- **Rekisterimuutokset varmuuskopioidaan** automaattisesti
- **Palautuspiste luodaan** ennen riskialttiita muutoksia
- **Voit lukea jokaisen skriptin** itse -- ne ovat selkokielisia PowerShell-tiedostoja
- **WebView2:ta ei koskaan poisteta** -- monet sovellukset tarvitsevat sitä

:::danger[Varoitukset]
Joitakin asioita ei voi peruuttaa helposti:
- Skripti 2 (CBS-telemetria) tekee syvätason muutoksia jotka vaativat uudelleenasennuksen peruuttamiseen
- Skripti 6 (OneDrive) voi aiheuttaa tietojen menetyksen jos sinulla on "Files On-Demand" -tiedostoja pilvessä
- Skripti 15 (Edge) poistaa Edgen kokonaan -- Windows-haku saattaa menettää joitakin ominaisuuksia
:::

## Arkkitehtuuri lyhyesti

```
unslopify/
├── Unslopify.ps1              -- Konsolivalikko (käynnistäjä)
├── Unslopify-GUI.ps1          -- Graafinen käynnistäjä (WPF)
├── phase1-unslopify/          -- 18 puhdistusskriptia
│   └── utils/                 -- Jaetut työkalufunktiot
├── phase2-enhance/            -- 9 parannusskriptia
├── phase3-control/            -- Järjestelmääly ja viitetiedostot
│   └── reference/             -- Ohjelmistokatalogi, polut, kohteet
├── backups/                   -- Automaattiset rekisterivarmuuskopiot
└── logs/                      -- Päivittäiset lokitiedostot
```
