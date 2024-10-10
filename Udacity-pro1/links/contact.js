let currentWindow = window.location.href


const links = document.querySelectorAll("#link")

links.forEach(link =>{ 

    if ( currentWindow.includes(link.innerHTML.toLowerCase())){ 
   
        link.classList.add("current")

    }




})

const menuBtn = document.querySelector("#menu-btn")
const theMenu = document.querySelector(".theMemu")
menuBtn.addEventListener("click",()=>{ 


    theMenu.classList.toggle("show-menu")
    document.querySelector(".material-symbols-outlined").style.color="black"

    

})