---
title: Usein kysytyt kysymykset (UKK)
description: Vastauksia yleisimpiin kysymyksiin Unslopifysta.
---

## Yleistä

### Onko Unslopify turvallista käyttää?

Kyllä. Jokainen skripti kysyy vahvistusta ennen tuhoavia operaatioita, rekisterimuutokset varmuuskopioidaan automaattisesti, ja voit lukea jokaisen skriptin lähdekoodin itse.

### Voiko muutokset peruuttaa?

Suurin osa kyllä:
- **Rekisterimuutokset** voi palauttaa tuplaklikkaamalla `.reg`-varmuuskopiotiedostoa (`backups/registry/`-kansiossa)
- **Palvelut** voi palauttaa `services.msc`-työkalulla
- **Ajoitetut tehtävät** voi palauttaa Tehtävien ajoitus -työkalulla

Poikkeukset joita **ei voi peruuttaa** helposti:
- CBS-telemetrian poisto (skripti 01) -- vaatii Windowsin uudelleenasennuksen
- Poistetut sovellukset -- voi asentaa uudelleen Microsoft Storesta

### Toimiiko se Windows 10:ssa?

Ei. Unslopify on suunniteltu Windows 11:lle. Monet kohteet (Copilot, Recall, uusi kontekstivalikko) eivat ole Windows 10:ssa.

---

## Tekniset kysymykset

### Miksi PowerShell 5.1 eikä 7+?

Skripti 01 käyttää TrustedInstaller-oikeuksia jotka toimivat **vain** Windows PowerShell 5.1:ssa. PowerShell 7+ ei tue samaa mekanismia. Windows PowerShell 5.1 on valmiiksi asennettu jokaiseen Windows 11 -koneeseen.

### Mitä "ExecutionPolicy Bypass" tarkoittaa?

Windows estää oletuksena PowerShell-skriptien ajamisen turvallisuussyistä. `-ExecutionPolicy Bypass` ohittaa tämän rajoituksen **vain kyseiselle komennolle**. Se ei muuta järjestelmän asetuksia pysyvästi.

### Mitä tapahtuu jos skripti epäonnistuu?

- Skripti kirjaa virheet lokitiedostoon (`logs/YYYY-MM-DD.log`)
- Muut kohteet käyvät läpi edelleen -- yksi virhe ei pysäytä koko skriptia
- Rekisterimuutokset on jo varmuuskopioitu ennen muutosta
- Voit ajaa skriptin uudelleen turvallisesti

### Miksi skripti 04 puuttuu?

Se siirrettiin numeroksi 18. AppData-siivous kannattaa ajaa viimeisena koska se löytää muiden skriptien poistamien sovellusten jäämät. Numerointia ei muutettu taaksepäin-yhteensopivuuden vuoksi.

---

## Ongelmatilanteet

### "Suorittaminen on estetty tässä järjestelmässä"

Käytä `-ExecutionPolicy Bypass` -lippua komentosi alussa:

```powershell
powershell -ExecutionPolicy Bypass -File Unslopify.ps1
```

### Skripti ei löy tiedostoja

Varmista että olet oikeassa kansiossa. Aja ensin:

```powershell
cd C:\polku\unslopify-kansioon
```

### Windows asensi poistetun sovelluksen takaisin

Aja skripti 17 (Block App Resurrection). Se estää Windowsia asentamasta poistettuja sovelluksia uudelleen päivitysten yhteydessä.

### Edge palasi takaisin Windows Updaten jälkeen

Aja skripti 15 uudelleen. Microsoftin päivitykset voivat joskus palauttaa Edgen. Skripti 17 auttaa myös estämään tätä.

### En tiedä mitä skriptejä ajaa

Aloita järjestelmäskannerilla (skripti 02) nähdäksesi mitä roskaa koneeltasi löytyy. Aja sitten haluamasi skriptit.

**Suositeltu järjestys aloittelijoille:**
1. Skripti 02 -- skannaa ensin
2. Skripti 00 -- poista Copilot/Recall
3. Skripti 10 -- poista AppX-bloatware
4. Skripti 11 -- poista turhat ajoitetut tehtavat
5. Skripti 12 -- poista Content Delivery
6. Skripti 13 -- poista telemetriapalvelut
7. Skripti 17 -- esta uudelleenasennus
8. Skripti 05 -- tyhjenna GPU-varit
9. Skripti 18 -- siivoa AppData viimeisena
