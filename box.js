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

container.addEventListener("touchmove", (e) => {
  for (let i=0; i < e.changedTouches.length; i++) {
		let x = e.changedTouches[i].pageX;
		let y = e.changedTouches[i].pageY;
     	let box = document.elementFromPoint(x, y);
     	if(box.id === "header"){
     		box.parentNode.removeChild(box)
     	}else{
     		if(box.classList.contains("colorBox")){
  		giveRandomColor.bind(box)();
     		}
     	}
  }
})

const header = document.getElementById("header");
header.addEventListener('mouseenter', () => header.parentNode.removeChild(header));

let square = document.createElement("div");
square.setAttribute('class', 'colorBox');
square.addEventListener('mouseover', giveRandomColor);
square.addEventListener('click', giveRandomColor);


let w = window.innerWidth;
let h = window.innerHeight;
let columns = h / (w / 20);
for(let i = 0; i < columns; i++){
    for(let j = 0; j < 20; j++){
    const node = container.appendChild(square.cloneNode(true));
    node.addEventListener('mouseover', giveRandomColor);
    node.addEventListener('click', giveRandomColor);
    }
}
