var sidenav=document.getElementById("sidenav")
var menub=document.getElementById("menub")
var csidenav=document.getElementById("csidenav")


menub.addEventListener("click", function(){
    sidenav.style.right="0"
})
csidenav.addEventListener("click", function(){
    sidenav.style.right="-40%"
})
