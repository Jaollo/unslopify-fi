---
title: Usein kysytyt kysymykset (UKK)
description: Vastauksia yleisimpiin kysymyksiin Unslopifysta.
---

## Yleista

### Onko Unslopify turvallista kayttaa?

Kylla. Jokainen skripti kysyy vahvistusta ennen tuhoavia operaatioita, rekisterimuutokset varmuuskopioidaan automaattisesti, ja voit lukea jokaisen skriptin lahdekoodin itse.

### Voiko muutokset peruuttaa?

Suurin osa kylla:
- **Rekisterimuutokset** voi palauttaa tuplaklikkaamalla `.reg`-varmuuskopiotiedostoa (`backups/registry/`-kansiossa)
- **Palvelut** voi palauttaa `services.msc`-tyokalulla
- **Ajoitetut tehtavat** voi palauttaa Tehtavien ajoitus -tyokalulla

Poikkeukset joita **ei voi peruuttaa** helposti:
- CBS-telemetrian poisto (skripti 01) -- vaatii Windowsin uudelleenasennuksen
- Poistetut sovellukset -- voi asentaa uudelleen Microsoft Storesta

### Toimiiko se Windows 10:ssa?

Ei. Unslopify on suunniteltu Windows 11:lle. Monet kohteet (Copilot, Recall, uusi kontekstivalikko) eivat ole Windows 10:ssa.

---

## Tekniset kysymykset

### Miksi PowerShell 5.1 eika 7+?

Skripti 01 kayttaa TrustedInstaller-oikeuksia jotka toimivat **vain** Windows PowerShell 5.1:ssa. PowerShell 7+ ei tue samaa mekanismia. Windows PowerShell 5.1 on valmiiksi asennettu jokaiseen Windows 11 -koneeseen.

### Mita "ExecutionPolicy Bypass" tarkoittaa?

Windows estaa oletuksena PowerShell-skriptien ajamisen turvallisuussyista. `-ExecutionPolicy Bypass` ohittaa taman rajoituksen **vain kyseiselle komennolle**. Se ei muuta jarjestelman asetuksia pysyvasti.

### Mita tapahtuu jos skripti epaonnistuu?

- Skripti kirjaa virheet lokitiedostoon (`logs/YYYY-MM-DD.log`)
- Muut kohteet kayda laapi edelleen -- yksi virhe ei pysayta koko skriptia
- Rekisterimuutokset on jo varmuuskopioitu ennen muutosta
- Voit ajaa skriptin uudelleen turvallisesti

### Miksi skripti 04 puuttuu?

Se siirrettiin numeroksi 18. AppData-siivous kannattaa ajaa viimeisena koska se loytaa muiden skriptien poistamien sovellusten jaanteet. Numerointia ei muutettu taaksepain-yhteensopivuuden vuoksi.

---

## Ongelmatilanteet

### "Suorittaminen on estetty tassa jarjestelmassa"

Kayta `-ExecutionPolicy Bypass` -lippua komentosi alussa:

```powershell
powershell -ExecutionPolicy Bypass -File Unslopify.ps1
```

### Skripti ei loy tiedostoja

Varmista etta olet oikeassa kansiossa. Aja ensin:

```powershell
cd C:\polku\unslopify-kansioon
```

### Windows asensi poistetun sovelluksen takaisin

Aja skripti 17 (Block App Resurrection). Se estaa Windowsia asentamasta poistettuja sovelluksia uudelleen paivitysten yhteydessa.

### Edge palasi takaisin Windows Updaten jalkeen

Aja skripti 15 uudelleen. Microsoftin paivitykset voivat joskus palauttaa Edgen. Skripti 17 auttaa myos estamaan tata.

### En tiedaa mita skripteja ajaa

Aloita jarjestelmeskannerilla (skripti 02) nahdaksesi mita roskaa koneeltasi loytyy. Aja sitten haluamasi skriptit.

**Suositeltu jarjestys aloittelijoille:**
1. Skripti 02 -- skannaa ensin
2. Skripti 00 -- poista Copilot/Recall
3. Skripti 10 -- poista AppX-bloatware
4. Skripti 11 -- poista turhat ajoitetut tehtavat
5. Skripti 12 -- poista Content Delivery
6. Skripti 13 -- poista telemetriapalvelut
7. Skripti 17 -- esta uudelleenasennus
8. Skripti 05 -- tyhjenna GPU-varit
9. Skripti 18 -- siivoa AppData viimeisena
