// -------------------------oggetto document---------------------------------

// console.log(document)

// -----------------------getElementById-----------------------

// const title = document.getElementById("title")
// console.log(title)

// // --------------------queryselector----------------------
// const span = document.querySelector(".span")
// console.log(span)

// // --------------------modificare il testo di un paragrafo---------------------------

// const paragrafo = document.querySelector(".p1")
// paragrafo.innerText ="test modificato"
// paragrafo.style.backgroundColor = "red"; 
// paragrafo.style.fontSize = "20px";
// // modifica html
// paragrafo.innerHTML = "<span> sono una span </span>"
// console.log(paragrafo)

// // --------------------------------createElement---------------------

// const elementUl = document.getElementsByTagName("ul")
// const button = document.getElementById("button")

// button.addEventListener("click",()=>{
//     const menu_text= prompt ("list","menu..")
// const elementLi = document.createElement("li")
// elementLi.innerText = menu_text
// elementUl.appendChild(elementLi)
// })


// -------------------------------------------------------------------------------------------------
// ------------------------------------------  4 PRIMI ESERCIZI------------------------------




// ----------------------------------gestire i cookies-----------------------
// function cookies(name,value){
//     const d = new Date();
//     d.setTime(d.getTime() + 24*60*60*1000);
//     let expires= "expire="+ d.toUTCString();
//     document.cookies = name + "=" +value +";" + expires +"; path=/";
// }

// cookies("mio-dato-locale" ,"leremispus");
// console.log("cookies:",document.cookies)

// ----------------------------utilisare il local storage-----------------------

// const elementBtn = document.getElementById("btn")
// const elementPizza = document.getElementById("pizza")

// elementBtn.addEventListener("click",()=>{
//     const pizzaname =prompt("quale la tua pizza preferita?", "Pizza")
//     localStorage.setItem("mia preferita è ",pizzaname)
//     elementPizza.innerText = pizzaname
// })

// const pizzaname=localStorage.getItem("mia preferita") || "";
// elementPizza.innerText = pizzaname

// // ------------------------------------utilisare session storage ------------------------

// const elementBtn1 = document.getElementById("btn1")
// const elementPizza2 = document.getElementById("pizza")

// elementBtn1.addEventListener("click",()=>{
//     const pizzaname1 =prompt("quale la tua pizza preferita?")
//     sessionStorage.setItem("mia preferita è ",pizzaname1)
//     elementPizza2.innerText = pizzaname1
// })

// const pizzaname1=sessionStorage.getItem("mia preferita") || "";
// elementPizza2.innerText = pizzaname1

// // -----------------------------utilisare local storage e session storage insieme-----------------------------

// const elementBtn3 = document.getElementById("btn3")
// // console.log(elementBtn3)
// const elementPizza1 = document.getElementById("pizza")

// elementBtn3.addEventListener("click",()=>{
//     const myPizza = prompt("my pizza prefered")
//     localStorage.setItem("my prefered è:",myPizza)
//     elementPizza1.innerText = myPizza
//     sessionStorage.setItem("my pizza prefered è:",myPizza)
//     elementPizza.innerText= myPizza
// })

// const myPizzaName = localStorage.getItem("my prefered") ||"";
// elementPizza1.innerText = myPizza
// const myPizzaName1 = sessionStorage.getItem("my prefered") ||"";
// elementPizza.innerText = myPizza


// ------------------------------------------------crea i list item --------------------------------------

const array = ["primo elemento","secondo elemento","terzo elemento","quarto elemento","quinta elemento"]

const elemento = document.querySelector(".list")

array.forEach((item)=>{
    const element1 =document.createElement("li")
    element1.innerText = item
    elemento.appendChild(element1)
})

// -------------------------------submit--------------------------------

const form = document.querySelector(".form")
const btnSubmit = document.querySelector(".submit")
const nome =document.querySelector("#nome")
const cognome =document.querySelector("#cognome")

btnSubmit.addEventListener("click",(event)=>{
    if(!nome || !cognome){
        alert("i campi non sono compilati")
    } 
})