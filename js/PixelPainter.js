console.log('sanity check');



//      -- great grand parent to leftside and grand parent to rightside --

let ppDiv = document.getElementById('pixelPainter');
let canvas = document.createElement('div');
canvas.id = 'canvas';
ppDiv.appendChild(canvas);


//====================================================================================================================

//      -- colors to insert --

let palette = ['ffc0cb', 'ffb6c1', 'ff69b4', 'ff1493', 'db7093', 'c71585', 'e6e6fa', 'dda0dd', 'ee82ee', 'ff00ff', '9932cc', '8a2be2', '800080', '7b68ee', '483d8b', '4b0082', 'fa8072', 'f08080', 'dc143c', 'ff0000', '8b0000', 'ffa500', 'ff8c00', 'ff7f50', 'ff4500', 'ffd700', 'ffff00', 'ffefd5', 'ffe4b5', 'ffdab9', 'f0e68c', 'bdb76b', '00ff00', '32cd32', '3cb371', '2e7b57', '228b22', '008000', '006400', '66cdaa', '8fbc8f', '20b2aa', '008080', '00ffff', '40e0d0', '00ced1', '4682b4', 'b0c4de', 'b0e0e6', '87ceeb', '6495ed', '0000ff', '000080', 'd2b48c', 'daa520', 'a52a2a', 'd3d3d3', '808080', '696969', '000000'];



//=====================================================================================================================

//          LEFTSIDE


//      -- leftside grand parent --

let leftSide = document.createElement('div');
leftSide.id = 'leftSide';
canvas.appendChild(leftSide);

//      -- leftside parent1 color chart --

let divChart = document.createElement('div');
divChart.id = 'divChart';
leftSide.appendChild(divChart);

//      -- leftside child cells for color chart & click Listener --

for (let i = 0; i < 60; i++) {
    let chartCells = document.createElement('div');
    chartCells.className = 'chartCells';
    chartCells.style.backgroundColor = palette[i];
    divChart.appendChild(chartCells);
    
    chartCells.addEventListener('click', pickColor);
}

//      -- define setColor --

let setColor;

//      -- assign color to setColor when clicked --

function pickColor() {
    console.log('  this  ', this);
    setColor = this.style.backgroundColor;
    console.log('  setColor  ', setColor);
}


//      -- leftside parent2 erase button --

let erase = document.createElement('div');
erase.id = 'erase';
erase.className = 'button';
erase.innerHTML = 'erase';
leftSide.appendChild(erase);


//      -- leftside parent3 clear button --

let clear = document.createElement('div');
clear.id = 'clear';
clear.className = 'button';
clear.innerHTML = 'clear';
leftSide.appendChild(clear);



//=====================================================================================================================

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
}

//      -- color cells with setColor --

function colorPixel() {
    this.style.backgroundColor = setColor;
    console.log('  canvas cells  ', this.style.backgroundColor);

}

