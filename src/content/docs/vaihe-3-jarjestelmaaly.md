---
title: "Vaihe 3: Järjestelmäly"
description: Tekoälyagentti-yhteensopivat viitetiedostot ja järjestelmäskanneri.
---

Vaihe 3 tarjoaa järjestelmäälykkyytta jota mikä tahansa tekoälytyökalu (Claude, ChatGPT, Copilot jne.) voi käyttää ymmärtääkseen ja konfiguroimakseen järjestelmäsi. Ei vaadi järjestelmänvalvojan oikeuksia.

## Mitä Vaihe 3 sisältää?

| Tiedosto | Tarkoitus |
|----------|-----------|
| `scan-system.ps1` | Luo järjestelmäprofiilin (OS, ohjelmistot, asetukset, orpotiedostot) |
| `reference/software-catalog.md` | FOSS-työkalujen asetusreseptit: polut, asetukset, sudenkuopat |
| `reference/windows-paths.md` | Windows-hakemisto- ja rekisteriviiteopas |
| `reference/cleanup-targets.md` | ~150 tunnettua bloatware- ja orpotiedostokaavaa |
| `clipboard-to-file.ps1` | Tallenna leikepöydän sisältö tiedostoksi Resurssienhallintaan kontekstivalikosta |

## Järjestelmäskanneri

Skanneri on **luku-operaatio** eikä muuta mitään järjestelmässäsi:

```powershell
powershell -ExecutionPolicy Bypass -File "phase3-control/scan-system.ps1"
```

Se luo `system-profile.md`-tiedoston joka sisältää:

- **Käyttöjärjestelmä**: Versio, koontiversio, asennuspäivä
- **Asennetut ohjelmat**: Lista kaikista ohjelmista winget-tiedoilla
- **Nykyiset asetukset**: Rekisteriarvot, palveluiden tilat
- **Löydetyt orpotiedostot**: Kansiot joita ei kuulu mihinkään
- **Levytilan analyysi**: Mikä vie tilaa ja mistä saa vapautettua

## Miten AI-agentti käyttää Vaihetta 3?

Tyypillinen työnkulku:

1. **Skannaa** -- agentti ajaa `scan-system.ps1` ymmärtääkseen nykytilanteen
2. **Lue viitteet** -- agentti lukee hakemistotiedostot kontekstiksi
3. **Toimi** -- agentti ehdottaa kohdennettuja toimenpiteita profiilin perusteella

### Esimerkki

Anna tekoälyagentillesi (esim. Claude Code) tämä ohje:

```
Lue phase3-control/reference/software-catalog.md ja
phase3-control/scan-system.ps1:n tuottama system-profile.md.
Kerro mita ohjelmia minulta puuttuu ja miten ne konfiguroidaan.
```

## Viitetiedostot

### Ohjelmistokatalogi

Sisältää jokaiselle suositellulle FOSS-työkalulle:
- Prosessin nimi ja winget-asennuskomento
- Asetustiedoston polku (ympäristömuuttujilla)
- Suositellut asetukset perusteluineen
- Sudenkuopat (esim. "Greenshot ylikirjoittaa asetustiedoston sulkiessaan")

Katso täydellinen [Ohjelmistokatalogi](/unslopify-fi/ohjelmistokatalogi/).

### Windows-polut

Pikakatsaus kaikkiin tärkeisiin Windows-kansioihin ja rekisteripolkuihin. Hyödyllinen kun haluat tietää mistä jokin asetus löytyy.

Katso täydellinen [Windows-polut -hakemisto](/unslopify-fi/hakemisto/windows-polut/).

### Siivouskohteet

Luettelo ~150 tunnetusta bloatware-kaavasta eri kategorioissa. Käytössä `scan-system.ps1`:ssä.

Katso täydellinen [Siivouskohteet-hakemisto](/unslopify-fi/hakemisto/siivouskohteet/).
