const allUl=Array.from(document.getElementsByTagName("ul"));
const button=document.getElementById("button");
button.addEventListener("click",()=>{
    allUl.forEach(ul=>{
        
        ul.firstElementChild.innerHTML="first";
        ul.lastElementChild.innerHTML="Last";
    })
})