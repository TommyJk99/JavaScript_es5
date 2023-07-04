/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(a, b) {
  return a === b ? (a + b) * 3 : a + b;
}
console.log("1   ", crazySum(3, 3), crazySum(2, -3));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(int) {
  return (int >= 20 && int <= 100) || int === 400;
}

console.log("2   ", boundary(20));
/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(string) {
  let inverso = [];
  for (let i = string.length; i !== 0; i--) {
    inverso += string.slice(i - 1, i);
  }
  return inverso;
}
console.log("3   ", reverseString("comburente"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(string) {
  stringVector = string.split(" ");
  for (let i = 0; i < stringVector.length; i++) {
    stringVector[i] =
      stringVector[i].slice(0, 1).toUpperCase() + stringVector[i].slice(1);
  }
  return stringVector.join(" ");
}

console.log("4   ", upperFirst("a tutti piace il numero sette"));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 11));
  }
  return array;
}

console.log("5   ", giveMeRandom(9));
//EXTRA:""
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  return l1 * l2;
}

console.log("1ex  ", area(3, 7));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(n) {
  result = Math.abs(n - 19);
  return result > 19 ? result * 3 : result;
}

console.log("2ex  ", crazyDiff(3));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
function codify(string) {
  return string.slice(0, 4) === "code" ? string : "code" + string;
}

console.log("3ex  ", codify("codcane"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(int) {
  number = Math.abs(int);
  return (number % 3 || number % 7) === 0;
}

console.log("4ex  ", check3and7(100));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(string) {
  return string.slice(1, string.length - 1);
}

console.log("5ex  ", cutString("gordon"));
