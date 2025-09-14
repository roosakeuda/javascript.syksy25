/* TEHTÄVÄ 1 */
function suurempi(l1, l2){
    if (l1 > l2){
        console.log(`${l1} on suurempi`)
    } else if (l2 > l1) {
        console.log(`${l2} on suurempi`)
    }else {
        console.log("Luvut ovat yhtäsuuret")
    }
}


/* TEHTÄVÄ 2 */
function suurin(l1, l2, l3){
    if (l1 > l2 && l1 > l3){
        console.log("Suurin luku on " + l1)
    }else if (l2 > l3){
        console.log("Suurin luku on " + l2)
    }else {
        console.log("Suurin luku on " + l3)
    }
}

/* TEHTÄVÄ 3 */
function negaPosi(luku){
    if (luku < 0 ){
        console.log("Luku on negatiivinen")
    } else if (luku == 0){
        console.log("Luku on nolla")
    } else {
        console.log("Luku on positiivinen")
    }
}

/* TEHTÄVÄ 4 */
function jaollisuus(luku){
    if (luku % 5 == 0){
        console.log("luku on jaollinen viidellä")
    }else if (luku % 11 == 0){
        console.log("Luku on jaollinen yhdellätoista")
    }else {
        console.log("Luku ei ole jaollinen luvulla 5 tai 11")
    }
}

/*TEHTÄVÄ 5 */
function karkaus(vuosi) {
    if (vuosi % 4 == 0 && vuosi % 100 != 0) {
        console.log("Vuosi on karkausvuosi");
    }
    else if (vuosi % 400 == 0) {
        console.log("Vuosi on karkausvuosi");
    }
    else {
        console.log("Vuosi ei ole karkausvuosi");
    }
}


/* TEHTÄVÄ 6 */
function parittomuus(luku){
    if (luku % 2 == 0){
        console.log("Luku on parillinen")
    } else {
        console.log("Luku on pariton")
    }
}




/* TEHTÄVÄ 11 */
function voittoTappio(myynti, osto){
    myynti = parseInt(myynti)
    osto = parseInt(osto)
    if ((myynti - osto)> 0 ){
        console.log("Sait voittoa: "+ (myynti-osto))
    } else {
        console.log("Tappiosi oli "+ (myynti-osto))
    }
}


/* TEHTÄVÄ 12 */
function koepisteet(Ma, KeFy, Ai, Ru, En){
    let taulukko = [[Matematiikka, Ma], [Fysiikka-Kemia, KeFy], [Äidinkieli, Ai], [Ruotsi, Ru], [Englanti, En]]
    if (taulukko[]
}


/* TEHTÄVÄ 13 */
function viikonpaiva(nro) {
    nro = parseInt(nro)
    console.log(nro)
    switch (nro) {
        case 1:
            console.log("Maanantai");
            break;
        case 2:
            console.log("Tiistai")
            break;
        case 3:
            console.log("Keskiviikko");
            break;
        case 4:
            console.log("Torstai");
            break;
        case 5:
            console.log("Perjantai")
        case 6:
            console.log("Lauantai");
            break;
        case 7:
            console.log("Sunnuntai");
            break;

    }
}

/*TEHTÄVÄ 15 */
function aanestus(ika) {
    ika = parseInt(ika);
    if (ika >= 18){
        console.log("Voit äänestää")
    } else {
        console.log("Et voi äänestää")
    }
}

/*TEHTÄVÄ 16*/
function kkpaivat(kknro) {
    kknro = parseint(kknro)
    switch (kknro) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("Kuukaudessa on 31 päivää");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Kuukaudessa on 30 päviää")
            break;
        case 2:
            console.log("Kuukaudessa on 28/29 päivää")
    }
}



/* TEHTÄVÄ 18 */
function kolmio(a, b, c){
    if (a + b + c === 180) {
        console.log("Kolmio on mahdollinen")
    }else {
        console.log("Kolmio ei ole mahdollinen")
    }
}

