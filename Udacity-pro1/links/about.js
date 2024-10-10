let currentWindow = window.location.href

console.log(currentWindow)


const links = document.querySelectorAll("#link")

links.forEach(link =>{ 

    if ( currentWindow.includes(link.innerHTML)){ 
   
        link.classList.add("current")

    }




})


const menuBtn = document.querySelector("#menu-btn")
const theMenu = document.querySelector(".theMemu")
menuBtn.addEventListener("click",()=>{ 


    theMenu.classList.toggle("show-menu")


    

})
