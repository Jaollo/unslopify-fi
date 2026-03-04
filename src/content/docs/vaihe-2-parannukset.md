---
title: "Vaihe 2: Parannukset"
description: 9 erillisskriptia kayttokokemuksen parantamiseen.
---

Vaihe 2 parantaa Windowsin kayttokokemusta puhdistuksen jalkeen. Nama skriptit ajetaan erikseen (eivat ole konsolivalikossa) ja vaativat jarjestelmanvalvojan oikeudet.

## Skriptit

| Skripti | Mita se tekee | Miksi |
|---------|--------------|-------|
| **01 - Kontekstivalikko** | Palauttaa Windows 10:n taydellisen hiiren oikean napin valikon | Windows 11:n lyhennetty valikko on hidas ja piilottaa toimintoja |
| **02 - Tehtavapalkki** | Piilottaa Haun, Widgetit, Tehtavanakyman ja Copilotin | Vapauttaa tilaa tehtavapalkissa ja poistaa hairiot |
| **03 - Resurssienhallinta** | Nayttaa tiedostopaaatteet, avaa Tama tietokone -nakymaan, siivoaa Pikakayton | Turvallisempi ja nopeampi tiedostojen selaus |
| **04 - Yksityisyys** | Poistaa mainokset, Delivery Optimization, Copilotin, seurannan, Aktiviteettihistorian | Vahentaa merkittavasti Windowsin tiedonkeruuta |
| **05 - Ulkoasu** | Tumma teema + Ohjauspaneelin pikakuvake | Moderni, silmaystavallinen ulkoasu |
| **06 - Tehosuunnitelma** | Avaa piilotetun Ultimate Performance -tehosuunnitelman | Paras suorituskyky tyopoyta- ja pelikayttoon |
| **07 - Kansiorakenne** | Luo jarjestetyn Projektit/Tyo/Henkilokohtainen-rakenteen | Selkea lahtokohta tiedostojen jarjestelyyn |
| **09 - Palveluoptimointi** | Poistaa seurantapalvelut kaytosta, asettaa tarpeettomia palveluita manuaalisiksi | Vahentaa taustaprosesseja ja muistinkayttoa |
| **10 - Kuvankatselin** | Asettaa nomacs-ohjelman oletuskuvankatselimeksi | Nopea, kevyt ja avoimen lahdekoodin vaihtoehto Windowsin Kuvat-sovellukselle |

## Miten kaytetaan

Aja mikka tahansa skripti suoraan:

```powershell
powershell -ExecutionPolicy Bypass -File "phase2-enhance/01-context-menu.ps1"
```

:::tip[Vinkki aloittelijoille]
Aja nama jarjestyksessa 01-10. Jokainen tekee yhden selkean muutoksen jonka naet heti.
:::

## Yksityiskohtaisemmin

### Kontekstivalikko (01)

Windows 11 piilotti perinteisen hiiren oikean napin valikon "Nayta lisaa vaihtoehtoja" -napin taakse. Tama skripti palauttaa Windows 10:n taydellisen valikon joka nakyy heti klikkauksella.

**Ennen:** Klikkaa oikealla → suppea valikko → "Nayta lisaa vaihtoehtoja" → taydellinen valikko
**Jalkeen:** Klikkaa oikealla → taydellinen valikko heti

### Tehosuunnitelma (06)

Windows piilottaa "Ultimate Performance" -tehosuunnitelman oletuksena. Se on suunniteltu tyoasemille ja tarjoaa parempaa suorituskyky poistamalla virranhallinnnan viiveet.

**Hyodyt:**
- Prosessori pysyy taysin kaynnissa (ei virransaastoon liittyvia viiveita)
- Parempi pelien ja raskaan tyoskentelyn suorituskyky
- Nopeampi levyankaytto

**Huomio:** Kuluttaa hieman enemman sahkoa. Kannettavilla tietokonella akunkesto lyhenee.

### Palveluoptimointi (09)

Windows ajaa taustalla kymmenia palveluita joita useimmat kayttajat eivat tarvitse. Tama skripti:

1. **Poistaa seurantapalvelut** kokonaan kaytosta
2. **Asettaa harvoin kaytetyt palvelut** manuaalisiksi (kaynnistyvat vain tarvittaessa)

Palvelut voi palauttaa milloin tahansa `services.msc`-tyokalulla.

## Resurssienhallinnan uudelleenkaynnistys

Skriptit jotka muuttavat kayttoliittyma-asetuksia (tehtavapalkki, resurssienhallinta, ulkoasu) **kaynnistavat Resurssienhallinnan automaattisesti uudelleen**. Naytto saattaa valkahtaa hetkeksi -- tama on normaalia.
