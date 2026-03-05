---
title: "Vaihe 2: Parannukset"
description: 8 erillisskriptia kayttokokemuksen parantamiseen.
---

## Skriptit

| Skripti | Mitä se tekee | Miksi |
|---------|--------------|-------|
| **01 - Kontekstivalikko** | Palauttaa Windows 10:n täydellisen hiiren oikean napin valikon | Windows 11:n lyhennetty valikko on hidas ja piilottaa toimintoja |
| **02 - Tehtäväpalkki** | Piilottaa Haun, Widgetit, Tehtävänäkymän ja Copilotin | Vapauttaa tilaa tehtäväpalkissa ja poistaa häiriöt |
| **03 - Resurssienhallinta** | Näyttää tiedostopäätteet, avaa Tämä tietokone -näkymään, siivoaa Pikakäytön | Turvallisempi ja nopeampi tiedostojen selaus |
| **04 - Yksityisyys** | Poistaa mainokset, Delivery Optimization, Copilotin, seurannan, Aktiviteettihistorian | Vähentää merkittävästi Windowsin tiedonkeruuta |
| **05 - Ulkoasu** | Tumma teema + Ohjauspaneelin pikakuvake | Moderni, silmäystävällinen ulkoasu |
| **06 - Tehosuunnitelma** | Avaa piilotetun Ultimate Performance -tehosuunnitelman | Paras suorituskyky työpöytä- ja pelikäyttöön |
| **07 - Kansiorakenne** | Luo järjestetyn Projektit/Työ/Henkilökohtainen-rakenteen | Selkeä lähtökohta tiedostojen järjestelyyn |
| **08 - Palveluoptimointi** | Poistaa seurantapalvelut käytöstä, asettaa tarpeettomia palveluita manuaalisiksi | Vähentää taustaprosesseja ja muistinkäyttöä |

## Miten käytetään

Aja mikä tahansa skripti suoraan:

```powershell
powershell -ExecutionPolicy Bypass -File "phase2-enhance/01-context-menu.ps1"
```

:::tip[Vinkki aloittelijoille]
Aja nämä järjestyksessä 01-10. Jokainen tekee yhden selkeän muutoksen jonka näet heti.
:::

## Yksityiskohtaisemmin

### Kontekstivalikko (01)

Windows 11 piilotti perinteisen hiiren oikean napin valikon "Näytä lisää vaihtoehtoja" -napin taakse. Tämä skripti palauttaa Windows 10:n täydellisen valikon joka näkyy heti klikkauksella.

**Ennen:** Klikkaa oikealla → suppea valikko → "Näytä lisää vaihtoehtoja" → täydellinen valikko
**Jälkeen:** Klikkaa oikealla → täydellinen valikko heti

### Tehosuunnitelma (06)

Windows piilottaa "Ultimate Performance" -tehosuunnitelman oletuksena. Se on suunniteltu työasemille ja tarjoaa parempaa suorituskyky poistamalla virranhallinnan viiveet.

**Hyödyt:**
- Prosessori pysyy täysin käynnissä (ei virransäästöön liittyviä viiveita)
- Parempi pelien ja raskaan työskentelyn suorituskyky
- Nopeampi levynkäyttö

**Huomio:** Kuluttaa hieman enemmän sähköä. Kannettavalla tietokoneella akunkesto lyhenee.

### Palveluoptimointi (09)

Windows ajaa taustalla kymmeniä palveluita joita useimmat käyttäjät eivät tarvitse. Tämä skripti:

1. **Poistaa seurantapalvelut** kokonaan käytöstä
2. **Asettaa harvoin käytetyt palvelut** manuaalisiksi (käynnistyvät vain tarvittaessa)

Palvelut voi palauttaa milloin tahansa `services.msc`-työkalulla.

## Resurssienhallintaan uudelleenkäynnistys

Skriptit jotka muuttavat käyttöliittymä-asetuksia (tehtäväpalkki, resurssienhallinta, ulkoasu) **käynnistävät Resurssienhallintaan automaattisesti uudelleen**. Näyttö saattaa valkkahtaa hetkeksi -- tämä on normaalia.
