//Mode Change When clicked Event Handling

let modeBtn=document.querySelector("#mode");
let currMode="light";
let body=document.querySelector("body");
modeBtn.addEventListener("click",()=>{
     if(currMode==="light"){
        currMode="dark"; //To view in console
        body.classList.add("dark");
        body.classList.remove("light");
     }
     else{
        currMode="light"; //To view in console
        body.classList.add("light");
        body.classList.remove("dark");
     }
     console.log(currMode); //for viewing changing modes in console:- if dark,console prints 'light' and vice versa
})


//Hovering Event Handling
let hoverBtn=document.querySelector("#hover");

hoverBtn.addEventListener("mouseover",()=>{
     hoverBtn.classList.add("hover");
})

hoverBtn.addEventListener("mouseout",()=>{
   hoverBtn.classList.remove("hover");
})
