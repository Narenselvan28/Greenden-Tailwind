var sidenav=document.getElementById("sidenav")
var menub=document.getElementById("menub")
var csidenav=document.getElementById("csidenav")


menub.addEventListener("click", function(){
    sidenav.style.right="0"
})
csidenav.addEventListener("click", function(){
    sidenav.style.right="-40%"
})


// porductcont

var cont=document.getElementById("container")
var s=document.getElementById("search")
var h1l=cont.querySelectorAll("div")

s.addEventListener("keyup", function(event){
    var entv= event.target.value.toUpperCase()

    for(i=0;i<h1l.length;i++){
        let pn = h1l[i].querySelector("h1").textContent
        if(pn.toUpperCase().indexOf(entv)<0){
            h1l[i].style.display="none"
        }
        else{
            h1l[i].style.display="block"
 
        }
    }
})