---
title: "Vaihe 3: Järjestelmäly"
description: Tekoälyagentti-yhteensopivat viitetiedostot ja järjestelmäskanneri.
---

## Mitä Vaihe 3 sisältää?

| Tiedosto | Tarkoitus |
|----------|-----------|
| `scan-system.ps1` | Syvaskanneri: interaktiivinen 3-tason valinta (Full/Moderate/Tin Foil Hat) |
| `reference/software-catalog.md` | FOSS-työkalujen asetusreseptit: polut, asetukset, sudenkuopat |
| `reference/windows-paths.md` | Windows-hakemisto- ja rekisteriviiteopas |
| `reference/cleanup-targets.md` | ~150 tunnettua bloatware- ja orpotiedostokaavaa |
| `clipboard-to-file.ps1` | Tallenna leikepöydän sisältö tiedostoksi Resurssienhallintaan kontekstivalikosta |

## Kaksi skanneria

Molemmat skannerit ovat **luku-operaatioita** eivatka muuta mitaan jarjestelmassasi:

### Pikaskannaus (Phase 1)

```powershell
powershell -ExecutionPolicy Bypass -File "phase1-unslopify/01-scan-system.ps1"
```

Automaattinen, ei kysy mitaan. Tuottaa jarjestelmatiedot ja debloat-tilan.

### Syvaskannaus (Phase 3)

```powershell
powershell -ExecutionPolicy Bypass -File "phase3-control/scan-system.ps1"
```

Interaktiivinen 3-tason valinta. Luo `system-profile.md`-tiedoston joka sisaltaa:

- **Jarjestelmatiedot**: Versio, koontiversio, CPU, RAM, levyt
- **Asennetut ohjelmat**: Lista kaikista ohjelmista winget-tiedoilla
- **Nykyiset asetukset**: Rekisteriarvot, palveluiden tilat
- **Debloat-tila**: Edge, OneDrive, Copilot, Recall, DiagTrack
- **Loydetyt orpotiedostot**: Kansiot joita ei kuulu mihinkaan
- **Levytilan analyysi**: Mika vie tilaa ja mista saa vapautettua

## Miten AI-agentti käyttää Vaihetta 3?

Tyypillinen työnkulku:

1. **Skannaa** -- agentti ajaa `phase3-control/scan-system.ps1` (syvaskannaus) ymmartaakseen nykytilanteen
2. **Lue viitteet** -- agentti lukee hakemistotiedostot kontekstiksi
3. **Toimi** -- agentti ehdottaa kohdennettuja toimenpiteita profiilin perusteella

### Esimerkki

Anna tekoälyagentillesi (esim. Claude Code) tämä ohje:

```
Lue phase3-control/reference/software-catalog.md ja
phase3-control/system-profile.md (tuotettu phase3-control/scan-system.ps1:lla).
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

Luettelo ~150 tunnetusta bloatware-kaavasta eri kategorioissa. Kaytossa `phase3-control/scan-system.ps1`:ssa.

Katso täydellinen [Siivouskohteet-hakemisto](/unslopify-fi/hakemisto/siivouskohteet/).
