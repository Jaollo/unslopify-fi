---
title: Aloitus
description: Vaatimukset, lataus ja ensimmainen kaytto.
---

## Mita tarvitset

- **Windows 11** (testattu versiolla 24H2)
- **Jarjestelmanvalvojan oikeudet** (skriptit pyytavat niita automaattisesti)
- **Noin 15-30 minuuttia** aikaa, riippuen mita ajat

:::tip[Aloittelijoille]
Jos et ole koskaan kayttanyt PowerShelia, ei hataa. Sinun tarvitsee vain kopioida alla olevat komennot ja liittaa ne PowerShell-ikkunaan.
:::

## Lataaminen

### Tapa 1: Git (suositeltu)

Avaa PowerShell ja kirjoita:

```powershell
git clone https://github.com/Jaollo/unslopify.git
cd unslopify
```

### Tapa 2: ZIP-tiedosto

1. Mene osoitteeseen [github.com/Jaollo/unslopify](https://github.com/Jaollo/unslopify)
2. Klikkaa vihreaa **Code**-nappia
3. Valitse **Download ZIP**
4. Pura ZIP-tiedosto haluamaasi kansioon

## Kaytto

### Konsolivalikko (suositeltu)

Napsauta `Unslopify.ps1`-tiedostoa hiiren oikealla ja valitse **"Suorita PowerShellilla"**, tai avaa PowerShell jarjestelmanvalvojana ja kirjoita:

```powershell
powershell -ExecutionPolicy Bypass -File Unslopify.ps1
```

Naet valikon, jossa on 18 numeroitua vaihtoehtoa. Valitse haluamasi numero tai kirjoita `ALL` ajaaksesi kaikki.

### Graafinen kayttoliittyma (GUI)

```powershell
powershell -ExecutionPolicy Bypass -File Unslopify-GUI.ps1
```

Tumma ikkuna, jossa on valintaruudut jokaiselle skriptille, edistymispalkki ja lokitulostus. Helpoin tapa aloittelijoille.

### Yksittaisen skriptin ajaminen

Jos haluat ajaa vain yhden tietyn skriptin:

```powershell
powershell -ExecutionPolicy Bypass -File "phase1-unslopify/05-cleanup-gpu-cache.ps1"
```

## Mita tapahtuu kun ajat skriptin?

Jokainen skripti noudattaa samaa turvallista kaavaa:

1. **Skannaus** -- etsii kohteet ja mittaa koot
2. **Raportti** -- nayttaa mitka on loydetty, varikoodeilla
3. **Vahvistus** -- kysyy lupaasi ennen kuin tekee mitaan tuhoisaa
4. **Suoritus** -- tekee muutokset
5. **Loki** -- kirjaa tulokset tiedostoon `logs/YYYY-MM-DD.log`

:::caution[Tarkeaa ajon jalkeen]
- **Kaynista tietokone uudelleen** skriptien 1 (Copilot/Recall) ja 2 (Telemetria CBS) jalkeen
- Aja skripti 18 (AppData-siivous) **viimeisena** -- se loytaa poistettujen sovellusten jaanteet
- Vaihe 2:n kayttoliittymaparannukset kaynnistavat Resurssienhallinnan automaattisesti uudelleen
:::

## Varmuuskopiot

Unslopify luo automaattisesti varmuuskopiot:

- **Rekisterimuutokset**: Tallennetaan `.reg`-tiedostoina kansioon `backups/registry/`
- **Palautuspiste**: Luodaan ennen tuhoavia operaatioita (kun vahvistat)

Jos jokin menee pieleen, voit palauttaa rekisterimuutokset tuplaklikkaamalla varmuuskopiotiedostoa tai kayttamalla Windowsin jarjestelman palautuspistetta.
