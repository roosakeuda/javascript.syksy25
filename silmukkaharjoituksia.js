/* Tehtävä 1 */

function laina(){
    let maara = 5000
    let aika = 2
    let korko = 1.02
    let kokosumma = maara
    

    for (var i = 1; i <= aika; i++){
        kokosumma = kokosumma * korko
    }

    console.log(`Joudut maksamaan takaisin ${kokosumma}€`)

}
//laina()


/* Tehtävä 2 */
function kertoma(luku){
    let kerroin = 1
    let i = 1
    while (i <= luku){
        kerroin *= i
        i ++
    }
    console.log(kerroin)
}
//kertoma(5)


/* Tehtävä 3 */
function ensimmainenEsiintyma(){
    let taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3]
    let i = 0
    let arvo = 0
    while (arvo != 3){
        arvo = taulukko[i]
        i ++
    }
    console.log(`Ensimmäinen 3 on kohdassa ${i}`)
}
//ensimmainenEsiintyma()


/* Tehtävä 4 */
function tekstiToisinpain(teksti){
    let kaannetty = ""
    let i = teksti.length -1
    while (i >= 0){
        kaannetty += teksti[i]
        i --
    }
    console.log(kaannetty)
}
// tekstiToisinpain("Hevonen")


/* Tehtävä 5 */
function maksimi(){
    let taulukko = [6, 7, 2, 4, 3, 8, 1]
    let max = 0
    i = 0
    while (i <= taulukko.length -  1){
        if (taulukko[i] > max){
            max = taulukko[i]
        
        }
        i++
    }
    console.log(i)
    cons
    console.log(max)
}
maksimi()

