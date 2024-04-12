import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'; // Tento řádek vám umožňuje používat funkci findWinner od jiného programátora. Více se o zápisu s import dozvíte v pozdějších lekcích.

// // Kód níže je pouze ukázka použití funkce findWinner. Následující řádky smažte.

// // Ukázka použití pro rozehranou hru 3x3, kde začínající hráč kolečko hrál všechny své tři tady do prvního sloupečku a druhý hráč křížek všechny své dva tahy do druhého sloupečku.
// const ukazkoveHerniPole = ['o', 'x', '_', 'o', 'x', '_', 'o', '_', '_']
// // Pro lepší představu stejné pole lze zapsat i takto:
// /*
// const ukazkoveHerniPole = [
// 	'o', 'x', '_',
// 	'o', 'x', '_',
// 	'o', '_', '_',
// ]
// */
// const vitez = findWinner(ukazkoveHerniPole)
// console.log(`Vyhrál hráč se symbolem ${vitez}.`) // 'Vyhrál hráč se symbolem o.'

// Na chvilku se z vás stane rozhodčí na turnaji v piškvorkách. Vytvořte JavaScriptový program, který vyhodnotí výsledky všech zápasů a vypíše výsledky.

// Vycházejte ze šablony na GitHubu cviceni-piskvorky-3x3.
// Upravte soubor app.js tak, aby vyhodnotil pouze první zápas v prvním prvku se třídou .hra. Styly a HTML už máte předchystané. Výsledek by měl vypadat jako na obrázku níže.

// První řádek začínající na import v kódu nechte. Zbytek berte pouze jako inspiraci.
// Najděte všechny důležité prvky týkající se prvního zápasu.
// const hra = document.querySelector('.hra');
// const policka = hra.querySelectorAll('.policko');
// const vysledek = hra.querySelector('.vysledek');
// Pomocí funkce Array.from převeďte seznam prvků políček na pole a pomocí metody map vytvořte pole řetězců o, x nebo _.
// 'o' je náhrada za políčko se třídou kolecko.
// 'x' je náhrada za políčko se třídou krizek.
// '_' je náhrada za políčko, které není ani jedno.
// Pro první hru by vám mělo vzniknout pole:
// ['o', 'o', 'o', 'x', '_', '_', '_', 'x', '_']
// Nově vytvořené pole předejte předpřipravené funkci findWinner, kterou pro vás už napsal jiný programátor. Funkce vám vrátí jednu ze čtyř možností.
// 'o', pokud vyhrálo kolečko.
// 'x', pokud vyhrál křížek.
// 'tie', pokud hra skončila nerozhodně.
// null, pokud hra ještě není u konce.
// Podle navrácené hodnoty z funkce findWinner vypište do prvku se třídou vysledek jeden z následujících textů.
// Vyhrálo kolečko!
// Vyhrál křížek!
// Remíza!
// Hra ještě probíhá
// Bonus

// Poupravte kód z předchozích kroků, který řeší jen první zápas tak, aby pomocí metody forEach prošel všechny zápasy a vypsal jim příslušné výsledky.

const hryElm = document.querySelectorAll('.hra');
hryElm.forEach((hra) => {
  const polickaElm = hra.querySelectorAll('.policko');
  const vysledekElm = hra.querySelector('.vysledek');

  const herniPole = Array.from(polickaElm).map((policko) => {
    if (policko.classList.contains('kolecko')) {
      return 'o';
    } else if (policko.classList.contains('krizek')) {
      return 'x';
    } else {
      return '_';
    }
  });

  const vitez = findWinner(herniPole);

  if (vitez === 'o') {
    vysledekElm.textContent = 'Vyhrálo kolečko!';
  } else if (vitez === 'x') {
    vysledekElm.textContent = 'Vyhrál křížek!';
  } else if (vitez === 'tie') {
    vysledekElm.textContent = 'Remíza!';
  } else {
    vysledekElm.textContent = 'Hra ještě probíhá!';
  }
});

