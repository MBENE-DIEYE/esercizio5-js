// ----------------------------------gestire i cookies-----------------------
function cookies(name,value){
    const d = new Date();
    d.setTime(d.getTime() + 24*60*60*1000);
    let expires= "expire="+ d.toUTCString();
    document.cookies = name + "=" +value +";" + expires +"; path=/";
}

cookies("mio-dato-locale" ,"leremispus");
console.log("cookies:",document.cookies)

// ----------------------------