function random360(){
    return (Math.floor(Math.random() * 360));
}


function giveRandomColor(){
    this.classList.add("active");
    let context = this;
    let color = random360();

    setTimeout(function () { context.classList.remove("active"); 
        context.style.backgroundColor = 'hsl(' + color + ', 80%, 25%)';
        }, 333);

    this.style.backgroundColor = 'hsl(' + color + ', 100%, 50%)';
}


const container = document.getElementById("container");
const header = document.getElementById("header");
header.addEventListener('mouseenter', () => header.parentNode.removeChild(header));

let square = document.createElement("div");
square.setAttribute('class', 'colorBox');
square.addEventListener('mouseover', giveRandomColor);
square.addEventListener('click', giveRandomColor);


let w = window.innerWidth;
let h = window.innerHeight;
let columns = h / (w / 20);
console.log(columns);
for(let i = 0; i < columns; i++){
    for(let j = 0; j < 20; j++){
    const node = container.appendChild(square.cloneNode(true));
    node.addEventListener('mouseover', giveRandomColor);
    node.addEventListener('click', giveRandomColor);
    }
}
