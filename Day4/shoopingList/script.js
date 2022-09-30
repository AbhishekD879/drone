
const addItems=document.getElementById("addItems");

addItems.addEventListener("click",()=>{
    const {value}= document.getElementById("input");
    const list=document.getElementById("list");
    const li=document.createElement("li");
    li.classList.add("border")
    li.classList.add('flex')
    li.classList.add("justify-between")
    li.classList.add("items-center")
    const listToAppend=`<span class="inline-block m-5">${value}</span><button class="px-5 py-2 rounded text-white bg-slate-900 deleteItems">Delete Item</button>`
    li.innerHTML=listToAppend;
    list.appendChild(li);
    li.querySelector(".deleteItems").addEventListener("click",_=>{
        li.remove();
    })
    value="";
})