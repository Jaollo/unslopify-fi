---
title: "Vaihe 3: Jarjestelmaaly"
description: Tekoalyagentti-yhteensopivat viitetiedostot ja jarjestelmaskanneri.
---

Vaihe 3 tarjoaa jarjestelmaalykkyytta jota mika tahansa tekoalytyokalu (Claude, ChatGPT, Copilot jne.) voi kayttaa ymmaartaakseen ja konfiguroiakseen jarjestelmasi. Ei vaadi jarjestelmanvalvojan oikeuksia.

## Mita Vaihe 3 sisaltaa?

| Tiedosto | Tarkoitus |
|----------|-----------|
| `scan-system.ps1` | Luo jarjestelmaprofiilin (OS, ohjelmistot, asetukset, orpotiedostot) |
| `reference/software-catalog.md` | FOSS-tyokalujen asetusreseptit: polut, asetukset, sudenkuopat |
| `reference/windows-paths.md` | Windows-hakemisto- ja rekisteriviiteopas |
| `reference/cleanup-targets.md` | ~150 tunnettua bloatware- ja orpotiedostokaavaa |
| `clipboard-to-file.ps1` | Tallenna leikepoydan sisalto tiedostoksi Resurssienhallinnan kontekstivalikosta |

## Jarjestelmaskanneri

Skanneri on **luku-operaatio** eika muuta mitaan jarjestelmassasi:

```powershell
powershell -ExecutionPolicy Bypass -File "phase3-control/scan-system.ps1"
```

Se luo `system-profile.md`-tiedoston joka sisaltaa:

- **Kayttojarjestelma**: Versio, koontiversio, asennuspaiva
- **Asennetut ohjelmat**: Lista kaikista ohjelmista winget-tiedoilla
- **Nykyiset asetukset**: Rekisteriarvot, palveluiden tilat
- **Loydetyt orpotiedostot**: Kansiot joita ei kuulu mihinkaan
- **Levytilan analyysi**: Mika vie tilaa ja mista saa vapautettua

## Miten AI-agentti kayttaa Vaihetta 3?

Tyypillinen tyonkulku:

1. **Skannaa** -- agentti ajaa `scan-system.ps1` ymmaartaakseen nykytilanteen
2. **Lue viitteet** -- agentti lukee hakemistotiedostot kontekstiksi
3. **Toimi** -- agentti ehdottaa kohdennettuja toimenpiteita profiilin perusteella

### Esimerkki

Anna tekoalyagentillesi (esim. Claude Code) tama ohje:

```
Lue phase3-control/reference/software-catalog.md ja
phase3-control/scan-system.ps1:n tuottama system-profile.md.
Kerro mita ohjelmia minulta puuttuu ja miten ne konfiguroidaan.
```

## Viitetiedostot

### Ohjelmistokatalogi

Sisaltaa jokaiselle suositellulle FOSS-tyokalulle:
- Prosessin nimi ja winget-asennuskomento
- Asetustiedoston polku (ymparistomuuttujilla)
- Suositellut asetukset perusteluineen
- Sudenkuopat (esim. "Greenshot ylikirjoittaa asetustiedoston sulkiessaan")

Katso taydellinen [Ohjelmistokatalogi](/unslopify-fi/ohjelmistokatalogi/).

### Windows-polut

Pikakatsaus kaikkiin tarkeisiin Windows-kansioihin ja rekisteripolkuihin. Hyodyllinen kun haluat tietaa mista jokin asetus loytyy.

Katso taydellinen [Windows-polut -hakemisto](/unslopify-fi/hakemisto/windows-polut/).

### Siivouskohteet

Luettelo ~150 tunnetusta bloatware-kaavasta eri kategorioissa. Kaytossa `scan-system.ps1`:ssa.

Katso taydellinen [Siivouskohteet-hakemisto](/unslopify-fi/hakemisto/siivouskohteet/).
