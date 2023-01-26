const flèche = document.getElementsByClassName("fa-solid fa-v");
const business1 = document.querySelector("#business1");
const business = document.querySelector("#business");
const test = document.querySelector("#boom")
const test1 = document.querySelector("#taaa")
const test2 = document.querySelector("#ggg")

business.addEventListener("click",function(event) {
    event.preventDefault();
    business1.style.display = "block";
      
})
test.addEventListener("click",function(event) {
    event.preventDefault();
    business1.style.display = "none";
    business.innerText="TEST "
    test.innerText="Business "

})
test1.addEventListener("click",function(event) {
    event.preventDefault();
    business1.style.display = "none";
    business.innerText = "TEST2 "
    test1.innerText = "Business "

})
test2.addEventListener("click",function(event) {
    event.preventDefault();
    business1.style.display = "none";
    business.innerText = "TEST3 "
    test2.innerText = "Business "

})

// PARTIE 2

const buton = document.querySelector("#boutn")
const prix1 = document.querySelector("#do")
const prix2 = document.querySelector("#do1")
const prix3 = document.querySelector("#do2")
buton.addEventListener("click",function(event) {
    event.preventDefault();
    check(buton);
    changement(prix1,prix2,prix3,buton);
    

})


function check(buton) {
    if (buton.style.textAlign == "left") {
        console.log("toto")
        buton.style.textAlign = "right"
    } else {
        console.log("gogo")
        buton.style.textAlign = "left"
    }
}

function changement(chan1,chan2,chan3,buton) {
    if (buton.style.textAlign == "left") {
        chan1.innerText = "5$"
        chan2.innerText = "12$"
        chan3.innerText = "16$"
    }
    else {
        chan1.innerText = "50$"
        chan2.innerText = "120$"
        chan3.innerText = "160$"
    }
}

// PARTIE 3

const flechedroite = document.querySelector("#flechedr")
const bloc = document.querySelector("#twe1")
const bloc2 = document.querySelector("#twe2")
const bloc3 = document.querySelector("#twe3")
const cache = document.querySelector("#bloccache")
const cache2 = document.querySelector("#bloccache2")
const cache3 = document.querySelector("#bloccache3")
flechedroite.addEventListener("click",function(event) {
    event.preventDefault();
    changement_perso(bloc,bloc2,bloc3,cache,cache2,cache3);
})


function changement_perso(bloc,bloc2,bloc3,cache,cache2,cache3) {
    if (bloc.style.display == "block") {
        bloc.style.display = "none"
        bloc2.style.display = "none"
        bloc3.style.display = "none"
        cache.style.display = "block"
        cache2.style.display = "block"
        cache3.style.display = "block"
    } else {
        bloc.style.display = "block"
        bloc2.style.display = "block"
        bloc3.style.display = "block"
        cache.style.display = "none"
        cache2.style.display = "none"
        cache3.style.display = "none"

    }
}



