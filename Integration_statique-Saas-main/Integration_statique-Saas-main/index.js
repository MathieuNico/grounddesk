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



