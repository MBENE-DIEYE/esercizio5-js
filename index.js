// ----------------------------------gestire i cookies-----------------------
function cookies(name,value){
    const d = new Date();
    d.setTime(d.getTime() + 24*60*60*1000);
    let expires= "expire="+ d.toUTCString();
    document.cookies = name + "=" +value +";" + expires +"; path=/";
}

cookies("mio-dato-locale" ,"leremispus");
console.log("cookies:",document.cookies)

// ----------------------------utilisare il local storage-----------------------

const elementBtn = document.getElementById("btn")
const elementPizza = document.getElementById("pizza")

elementBtn.addEventListener("click",()=>{
    const pizzaname =prompt("quale la tua pizza preferita?", "Pizza")
    localStorage.setItem("mia preferita è ",pizzaname)
    elementPizza.innerText = pizzaname
})

const pizzaname=localStorage.getItem("mia preferita") || "";
elementPizza.innerText = pizzaname

// ------------------------------------utilisare session storage ------------------------

const elementBtn1 = document.getElementById("btn1")
const elementPizza = document.getElementById("pizza")

elementBtn1.addEventListener("click",()=>{
    const pizzaname1 =prompt("quale la tua pizza preferita?")
    sessionStorage.setItem("mia preferita è ",pizzaname1)
    elementPizza.innerText = pizzaname1
})

const pizzaname1=sessionStorage.getItem("mia preferita") || "";
elementPizza.innerText = pizzaname1