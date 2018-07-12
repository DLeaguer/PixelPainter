console.log('sanity check');



//      -- great grand parent to leftside and grand parent to rightside --

let ppDiv = document.getElementById('pixelPainter');
let canvas = document.createElement('div');
canvas.id = 'canvas';
ppDiv.appendChild(canvas);


//======================================================================

//      -- colors to insert --

let palette = ['Pink', 'HotPink','DeepPink', 'Thistle', 'Plum', 'Orchid', 'Fuchsia', 'MediumPurple', 'SlateBlue', 'Purple', 'Salmon', 'IndianRed', 'Crimson', 'Red', 'Orange', 'Gold', 'Yellow', 'Moccasin', 'PeachPuff', 'MistyRose', 'Khaki', 'DarkKhaki', 'Chartreuse', 'MediumSpringGreen', 'MediumSeaGreen','SeaGreen', 'Green', 'DarkGreen', 'YellowGreen', 'MediumAquaMarine', 'DarkSeaGreen', 'LightSeaGreen', 'Teal', 'Cyan', 'Turquoise', 'DarkTurquoise', 'Beige', 'PowderBlue', 'LightBlue', 'SkyBlue', 'CornflowerBlue', 'SteelBlue','Blue', 'Navy', 'MidnightBlue', 'Bisque', 'NavajoWhite', 'BurlyWood', 'Tan', 'RosyBrown', 'GoldenRod', 'Peru', 'Chocolate', 'Brown', 'Maroon', 'Silver', 'Gray', 'DimGray', 'SlateGray', 'Black' ];



//======================================================================

//          LEFTSIDE


//      -- leftside grand parent --

let leftSide = document.createElement('div');
leftSide.id = 'leftSide';
canvas.appendChild(leftSide);

//      -- leftside parent1 color chart --

let divChart = document.createElement('div');
divChart.id = 'divChart';
leftSide.appendChild(divChart);

//      -- leftside child make cells for color chart & click Listener --

for (let i = 0; i < 60; i++) {
    let chartCells = document.createElement('div');
    chartCells.className = 'chartCells';
    chartCells.style.backgroundColor = palette[i];
    divChart.appendChild(chartCells);
    
    chartCells.addEventListener('click', pickColor);
    chartCells.addEventListener('mouseover', showName);
    chartCells.addEventListener('mouseout', hideName);
}

//      -- leftside parent2 colorName --

let colorName = document.createElement('div');
colorName.className = 'colorName';
leftSide.appendChild(colorName);

//      -- show color name with border color --

function showName() {
    for (let i = 0; i < palette.length; i++) {
        colorName.innerHTML = this.style.backgroundColor;
        colorName.style.borderColor = this.style.backgroundColor;
        colorName.style.borderStyle = 'solid';
        console.log('  innerHTML  ', colorName.innerHTML);
    }
}

//      -- hide color name --

function hideName() {
    colorName.innerHTML = ''; 
}

//      -- define setColor --

let setColor;

//      -- assign color to setColor when clicked --

function pickColor() {
    console.log('  this  ', this);
    setColor = this.style.backgroundColor;
    console.log('  setColor  ', setColor);
}


//      -- leftside parent3 erase button --

let erase = document.createElement('div');
erase.id = 'erase';
erase.className = 'button';
erase.innerHTML = 'erase';
leftSide.appendChild(erase);
// see "rightside child make pixels cells" for the erase click listener


//      -- leftside parent4 clear button --

let clear = document.createElement('div');
clear.id = 'clear';
clear.className = 'button';
clear.innerHTML = 'clear';
leftSide.appendChild(clear);

//      -- click listener --

clear.addEventListener('click', clearer);

//      -- loop through all canvas cells and make them white --

let getCells = document.getElementsByClassName('cells');

function clearer() {
    console.log('  clearing  ', getCells);
    for (let i = 0; i < getCells.length; i++) {
        getCells[i].style.backgroundColor = 'white';
    }
}

//      -- leftside parent5 save button --

let save = document.createElement('div');
save.id = 'save';
save.className = 'button';
save.innerHTML = 'save';
leftSide.appendChild(save);

save.addEventListener('click', saver);

let saved;
function saver() {
    saved = [];
    for (let i = 0; i < getCells.length; i++) {
        saved.push(getCells[i].style.backgroundColor);
        console.log(saved);
    }
}

//      -- leftside parent6 load button --

let load = document.createElement('div');
load.id = 'load';
load.className = 'button';
load.innerHTML = 'load';
leftSide.appendChild(load);

load.addEventListener('click', loader);

function loader() {
    for (let i = 0; i < getCells.length; i++) {
        getCells[i].style.backgroundColor = saved[i];
        console.log(getCells[i]);
    }
}

//======================================================================

//          RIGHTSIDE


//      -- rightside parent (drawing canvas) --

let rightSide = document.createElement('div');
rightSide.id = 'rightSide';
canvas.appendChild(rightSide);

//      -- rightside child make pixel cells & mouseover them --

for (let i = 0; i < 1036; i++) {
    let cell = document.createElement('div');
    cell.className = 'cells';
    rightSide.appendChild(cell);
    
    cell.addEventListener('mouseover', colorPixel);
    erase.addEventListener('click', eraser);

}

//      -- color pixel cells with setColor when mouseover --

function colorPixel() {
    this.style.backgroundColor = setColor;
    console.log('  canvas cells  ', this.style.backgroundColor);
    
}

//      -- color pixel cells with white when mouseover for erasing --

function eraser() {
    setColor = 'ffffff';
    this.style.backgroundColor = setColor;
    console.log('  erase setColor  ', setColor);
}
