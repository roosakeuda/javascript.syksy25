/* Tehtävä 1 */
let kauppalista = ["maito", "leipä", "omenat"]

for (let i = 0; i<= kauppalista.length -1; i++)
console.log(kauppalista[i])



/* Tehtävä 2 */
let taulukko = ["Roosa", "Matti", "Julius", "Kate", "Jami"]
console.log(taulukko)


/*Tehtävä 3 */
let numerot = [1, 2, 3, 4, 5]
let pituus = numerot.length
console.log(pituus)


/* Tehtävä 4 */
taulukko.push("Jyri")
console.log(taulukko)


/* Tehtävä 5 */
let taul1 = [1, 2, 3]
let taul2 = [4, 5, 6]
let yhdistettyTaulukko = taul1.concat(taul2)
console.log(yhdistettyTaulukko)


/* Tehtävä 6 */
let numerot2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let parilliset = []

let i = 0
while (i <= numerot2.length -1){
    if (numerot2[i] % 2 == 0){
        parilliset.push(numerot2[i])
    }
    i ++;
}
console.log(parilliset)


/* Tehtävä 7 */



/* Tehtävä 8 */
let num8 = [1, 2, 3, 4, 5]
let kaannetty8 = []

for (let i8 = num8.length -1 ; i >= 0; i--){
    kaannetty8.push(num8[i8])
}
console.log(kaannetty8)


/* Tehtävä 9 */


/* Tehtävä 10 */
let num10 = [1, 2, 3, 4, 5]
let arvo = 2
num10.splice(arvo, 1)
console.log(num10)


/* Tehtävä 11 */


/* Tehtävä 12 */



/* Tehtävä 13 */
let num13 = [1, 2, 3, 4, 5]
num13[2] = 6
console.log(num13)

/* Tehtävä 14 */

/* Tehtävä 15 */

/* Tehtävä 16 */

/* Tehtävä 17 */

/* Tehtävä 18 */

/* Tehtävä 19 */

/* Tehtävä 20 */
let num20 = [1, 2, 3, 4, 5]
let k = 0
let suuret = []

while (k <= num20.length - 1){
    if (num20[k] > 4){
        suuret.push(num20[k])
    }
    k ++;
}
console.log(suuret)
