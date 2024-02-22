const menu = document.querySelector('.icon');
var serch = document.querySelector(`.s-icon`);
menu.addEventListener("click", ()=>{
    document.querySelector('.option').classList.toggle("hide");
})
serch.addEventListener("click", ()=>{
    document.querySelector(`.sch`).classList.toggle(`hide`)
})
