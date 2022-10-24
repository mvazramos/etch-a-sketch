let isDragging= false;
document.addEventListener("mousedown",()=> isDragging=true);
document.addEventListener("mouseup",()=> isDragging=false);
const container = document.getElementsByClassName("sketch-board");
const gridWidth = 700; // The grid is a square

let colorMode="black";

const reset= document.getElementsByTagName("button");
reset[0].addEventListener("click",cleanBoard);

const colorsquares = document.getElementsByClassName("color-square");
const gridSize= document.getElementById("gridSetter");


gridSize.addEventListener("input", (e)=>{
    const p = document.getElementById("gridSize");
    const container = document.getElementsByClassName("sketch-board");
    container[0].innerHTML="";
    createBoard(e.target.value);
    p.innerHTML=e.target.value;
})





Array.from(colorsquares).forEach((e)=>{
    e.addEventListener("click",(e)=>{
        colorMode=e.target.id;
    })
});


function cleanBoard(){
    const squares =  document.getElementsByClassName("square");
    Array.from(squares).forEach(square=>{
        square.style.backgroundColor="white";
    });
}

function createBoard(enterSize){
    /* 
        This creates a total of N divs which will take another N divs inside
        getting in this way a N x N board.
    */

    const size=enterSize;
    const side = gridWidth/size;
    for (let i = 0; i<size; i++) {
        
        const div = document.createElement("div");
        div.setAttribute("class","row");
        for (let j=0; j<size; j++){
            const divChild = document.createElement("div");
            divChild.style.backgroundColor="white"
            divChild.style.width=`${side}px`;
            divChild.style.height=`${side}px`;
            //divChild.style.border="0.01px solid black";
            divChild.style.outlineStyle="solid";
            divChild.style.outlineColor="black";
            divChild.style.outlineWidth="1px";
            divChild.setAttribute("class","square")
            div.appendChild(divChild);
            divChild.addEventListener("mousedown", changeColor);
            divChild.addEventListener("mousemove", changeColor);
        }
        container[0].appendChild(div);    
    }
}


function changeColor(e){

    let r = Math.floor(Math.random()*255);
    let g =Math.floor(Math.random()*255);
    let b =Math.floor(Math.random()*255); 
    
    if(e.type==="mousemove" && !isDragging ) return 
        //e.target.style.backgroundColor=c;
    else if(colorMode==="rgb-color"){
        e.target.style.backgroundColor=`rgb(${r},${g},${b})`
    }
    else{
        e.target.style.backgroundColor=colorMode;
    } 
}



window.onload= ()=>{
    createBoard(16);
};




