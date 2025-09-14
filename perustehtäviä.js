/*tehtävä 1 */
console.log("Hei maailma!")

/*tehtävä 2 */
function laskin(l1,l2){
let summa = l1 + l2
    return console.log(summa)
}

/*tehtävä 3 */
var luku1, luku2
luku1 = 10
luku2 = 5
var erotus = luku1-luku2
console.log(erotus)


/*tehtävä 4*/
luku1 = 2
luku2 = 4
var tulo = luku1 * luku2
console.log(tulo)

/*tehtävä 5*/
luku1 = 8
luku2 = 2
osamäärä = luku1 / luku2
console.log(osamäärä)

/*tehtävä 6*/
var cel, fah 
cel = 44
fah = cel * 9 / 5 + 32
console.log(fah)

/*tehtävä 7 */
fah = 150
cel = 5 / 9 *(fah-32)
console.log(cel)

/*tehtävä 8 */
var km, maili, kerroin
kerroin = 1.609344
maili = 150
km = kerroin * maili
console.log(km) 


/*tehtävä 9*/
kerroin = 1.609344
km = 100
maili = km/kerroin
console.log(maili)

/*tehtävä 10 */
var sentit, tuumat;
kerroin = 2.54
tuumat = 14
sentit = tuumat * kerroin
console.log(sentit)


/* tehtävä 11*/
sentit = 14
tuumat = sentit / kerroin
console.log(tuumat)

/* tehtävä 12 */
var yardit, metrit
kerroin = 0.91444
yardit = 20
metrit = yardit * kerroin
console.log(metrit)


/* tehtävä 13 */
metrit = 20
yardit = metrit / kerroin

/*tehtävä 14 */
/*tehtävä 2 */
function laskin(l1,l2){
let summa = l1 + l2
    return console.log(summa)
}

/*tehtävä 3 */
function erotus(luku1, luku2){
    var erotus = luku1-luku2
    console.log(erotus)
}

/*tehtävä 4*/
function tulo(luku1, luku2){
    var tulo = luku1 * luku2
    console.log(tulo)
}
/*tehtävä 5*/
function erotus(luku1, luku2){
    osamäärä = luku1 / luku2
    console.log(osamäärä)}



/* tehtävä 15 */
function ympyrapintaala(säde){
    var pii = 3.1415
    let pintaala
    pintaala = säde * säde * pii
    console.log(pintaala)}

/* TEHTÄVÄ 16 */

function neliopintaala(sivu){
    let pintaala = sivu*sivu
    console.log(pintaala)
}

/* TEHTÄVÄ 17 */
function neliopintaala(sivu, leveys){
    let pintaala = sivu*leveys
    console.log(pintaala)}

/* TEHTÄVÄ 18 */
function paivamuunnin(paivat){
    let vuodet = parseInt(paivat / 365)
    let kuukaudet = parseInt(paivat % 365) / (365/12);
    let paiva = parseInt(paivat % 365) - kuukaudet * (365 / 12)
    console.log(`${paivat} päivää on ${vuodet}vuotta, ${kuukaudet}kuukautta ja ${paiva}päivää`)
}