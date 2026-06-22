import { CanvasEraser } from "../../../scripts/canvas-eraser.js";
import { StickyClickyImage } from "../../../scripts/sticky-clicky-image.js";

console.log("Accessed the test line");
/*
* HTML Elements
*/
const stickyMustache = new StickyClickyImage('mustache');
stickyMustache.setContainerID("dog-picture");

const graffitiCanvas = document.getElementById("my-graffiti");
const surface = graffitiCanvas.getContext("2d");
const eraser = new CanvasEraser(surface);

const colorInput = document.getElementById("color-input");
const sizeInput = document.getElementById("size-input");
const toolSelect = document.getElementById("tool-select");

console.log(toolSelect);
/*
*  Graffiti Styles
*/
surface.lineWidth = sizeInput.value;
surface.lineJoin = "round";
surface.strokeStyle = colorInput.value;




/*
* Shapes
*/

function shapes() {
    surface.rect(150, 200, 100, 100);
    surface.stroke();
    surface.beginPath();
    surface.moveTo(200, 50);
    surface.lineTo(150, 200);
    surface.moveTo(250, 50);
    surface.lineTo(350, 50);
    surface.lineTo(300, 300);
    surface.stroke();

}

shapes();





/*
* Graffiti
*/
let oldX = 0;
let oldY = 0;
let tool = toolSelect.value;

function changeColor() {
    surface.strokeStyle = colorInput.value;

}

function changeSize() {

    surface.lineWidth = sizeInput.value;
}

function changeTool() {
    tool = toolSelect.value;
    console.log(tool);
}

function graffiti(event) {

    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x, y, event.buttons);


    if (event.buttons > 0) {
        if (tool === "eraser") {
            const width = sizeInput.value;
            const halfWidth = 0.5 * width;
            const leftX = x - halfWidth;
            const upY = y - halfWidth;
            const radius = width/2;
            /*surface.clearRect(leftX,upY,width,width);*/
            eraser.circle(x, y, radius);

        } else {
            surface.beginPath();
            surface.moveTo(oldX, oldY);
            surface.lineTo(x, y);
            surface.closePath();
            surface.stroke();
        }
    }

    oldX = x;
    oldY = y;

}

graffitiCanvas.addEventListener("mousemove", graffiti);
colorInput.addEventListener("change", changeColor);
sizeInput.addEventListener("change", changeSize);
toolSelect.addEventListener("change", changeTool);
console.log(colorInput.value);