//Mode Change When clicked Event Handling

let modeBtn=document.querySelector("#mode");
let currMode="light";
let body=document.querySelector("body");
modeBtn.addEventListener("click",()=>{
     if(currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
     }
     else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
     }
     console.log(currMode);
})


//Hovering Event Handling
let hoverBtn=document.querySelector("#hover");

hoverBtn.addEventListener("mouseover",()=>{
     hoverBtn.classList.add("hover");
})

hoverBtn.addEventListener("mouseout",()=>{
   hoverBtn.classList.remove("hover");
})