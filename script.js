let beratBadan = document.getElementById("beratBadan")
let tinggiBadan = document.getElementById("tinggiBadan")
let hasil = document.getElementById("hasil")
let cekHasil = document.getElementsByClassName("button")
let namaUser = document.getElementById("nama")

function cekhasil(){
    let idealWeight = Number(beratBadan.value) / (2*Number(tinggiBadan.value/100))
    console.log(idealWeight)

    if(idealWeight < 18.5){
        hasil.value = "Berat Badan Kurang"
    }else if(idealWeight < 25){
        hasil.value = "Berat Badan Ideal"
    }else if(idealWeight < 30){
        hasil.value = "Berat Badan Berlebih"
    }else if(idealWeight >= 30){
        hasil.value = "Obesitas"
    }
}

// let nameUser1 = document.getElementById("nama")
// let ageUser1 = document.getElementById("age")
// let genderUser1 = document.getElementById("gender")
// let button1 = document.getElementById("button1")
// function submit(){
//     if(nameUser1 === null || ageUser1 === null || genderUser1 === null){
//         button1[0].setAttribute
//         document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");   
//     }
// }


// Berat Badan Berlebih = 25-29.9
// Obesitas = >30

// function idealWeight (nilai1, nilai2){
//     hasil.innerHTML = nilai1 + nilai2
// }
// idealWeight(beratBadan, tinggiBadan)


// function beratBadan() {
//     hasil.innerHTML = nilai1.innerHTML + nilai2.innerHTML
// };
// cekHasil.addEventListener("click", beratBadan)