
function vypocet(){
let horsk = document.getElementById("horske").checked;
let detsk = document.getElementById("detske").checked;
let silnicn = document.getElementById("silnicni").checked;
let grave = document.getElementById("gravel").checked;
let kola_celkem = 0;

if (horsk == true) {
    let horsk_celkem =
        parseInt(document.getElementById("horske").value) * parseInt(document.querySelector("#horske_ks").value);
        console.log(kola_celkem);
        kola_celkem += horsk_celkem;
        console.log(kola_celkem);
}
if (detsk == true) {
    let detsk_celkem =
        parseInt(document.getElementById("detske").value) * parseInt(document.querySelector("#detske_ks").value);
        kola_celkem += detsk_celkem;
        console.log(kola_celkem);
}
if (silnicn == true) {
    let silnicn_celkem =
        parseInt(document.getElementById("silnicni").value) * parseInt(document.querySelector("#silnicni_ks").value);
        kola_celkem += silnicn_celkem;
        console.log(kola_celkem);
} 
if (grave == true) {
    let grave_celkem =
        parseInt(document.getElementById("gravel").value) * parseInt(document.querySelector("#gravel_ks").value);
        kola_celkem += grave_celkem;
        console.log(kola_celkem);
} 


let pocet_dni =
    document.querySelector("#pocet_dni").value;

let kolaDny = kola_celkem * pocet_dni;    
console.log(kolaDny);
 
let nosic =
    document.getElementsByName("nosic");
console.log(nosic);

for (i = 0; i < nosic.length; i++) {
    if (nosic[i].checked == true) {
        nosic_vyber = nosic[i].value;

        console.log(nosic_vyber);
    } 
}   

let cenaCelkem = Math.round(kolaDny * nosic_vyber);
console.log(cenaCelkem);

document.querySelector("#celkovaCena").value= cenaCelkem;
}

function odeslat(){
    let emailKontrola = document.getElementById("email1").value;
    if(emailKontrola.includes("@")){
    alert("Formulář byl odeslán");  
    } else {
        alert("Email byl zadán chybně.");
    }
}
