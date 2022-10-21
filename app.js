const container = document.getElementsByClassName("sketch-board");



const gridWidth = 600; // The grid is a square
const size=16;
const colors = {
    "Aqua":"#00FFFF",
    "Aquamarine":"#7FFFD4",
    "Brown":"#A52A2A",
    "Chocolate":"#D2691E"
}



colorsArray=Object.values(colors)

const side = Math.floor(gridWidth/size);

for (let i = 0; i<size; i++) {
    /* This creates a total of N divs which will take another N divs inside
       getting in this way a N x N board.
    */
    const div = document.createElement("div");
    div.setAttribute("class","row");
    for (let j=0; j<size; j++){
        const divChild = document.createElement("div");
        divChild.style.backgroundColor="white"
        divChild.style.width=`${side}px`;
        divChild.style.height=`${side}px`;
        divChild.style.border="1px solid black";
        divChild.setAttribute("class","square")
        div.appendChild(divChild);
    }
    container[0].appendChild(div);    
}


const squares =  document.getElementsByClassName("square");



function changeColor(e){
    c = colorsArray[Math.floor(Math.random() * colorsArray.length)]
    e.target.style.backgroundColor=c;

    
}


Array.from(squares).forEach( (square) => {
    square.addEventListener("mouseenter", changeColor)
    
});


