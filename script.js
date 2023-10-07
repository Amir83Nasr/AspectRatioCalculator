let ratioWidth = document.getElementById("ratio-width");
let ratioHeight = document.getElementById("ratio-height");

let width = document.getElementById("width");
let height = document.getElementById("height");


function calculateWidth() {
    let aspectRatio = ratioWidth.value / ratioHeight.value;
    width.value = parseFloat((height.value * aspectRatio).toFixed(1));
}

function calculateHeight() {
    let aspectRatio = ratioWidth.value / ratioHeight.value;
    height.value = parseFloat((width.value / aspectRatio).toFixed(1));
}


ratioWidth.addEventListener("input", calculateHeight);
ratioHeight.addEventListener("input", calculateWidth);

width.addEventListener("input", calculateHeight);
height.addEventListener("input", calculateWidth);