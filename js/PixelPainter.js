console.log('sanity check');

var ppDiv = document.getElementById('pixelPainter');
var canvas = document.createElement('div');
canvas.id = 'canvas';
ppDiv.appendChild(canvas);

var palette = ['ffc0cb', 'ffb6c1', 'ff69b4', 'ff1493', 'db7093', 'c71585', 'e6e6fa', 'dda0dd', 'ee82ee', 'ff00ff', '9932cc', '8a2be2', '800080', '7b68ee', '483d8b', '4b0082', 'fa8072', 'f08080', 'dc143c', 'ff0000', '8b0000', 'ffa500', 'ff8c00', 'ff7f50', 'ff4500', 'ffd700', 'ffff00', 'ffefd5', 'ffe4b5', 'ffdab9', 'f0e68c', 'bdb76b', '00ff00', '32cd32', '3cb371', '2e7b57', '228b22', '008000', '006400', '66cdaa', '8fbc8f', '20b2aa', '008080', '00ffff', '40e0d0', '00ced1', '4682b4', 'b0c4de', 'b0e0e6', '87ceeb', '6495ed', '0000ff', '000080', 'd2b48c', 'daa520', 'a52a2a', 'd3d3d3', '808080', '696969', '000000'];

    //      -- leftside color chart --

var leftSide = document.createElement('div');
leftSide.id = 'leftSide';
canvas.appendChild(leftSide);

var divChart = document.createElement('div');
divChart.id = 'divChart';
leftSide.appendChild(divChart);

for (var i = 0; i < 60; i++) {
    var chartCells = document.createElement('div');
    chartCells.className = 'chartCells';
    chartCells.style.backgroundColor = palette[i];
    divChart.appendChild(chartCells);
}


    //      -- leftside erase button --

var erase = document.createElement('div');
erase.id = 'erase';
erase.className = 'button';
erase.innerHTML = 'erase';
leftSide.appendChild(erase);


    //      -- leftside clear button --

var clear = document.createElement('div');
clear.id = 'clear';
clear.className = 'button';
clear.innerHTML = 'clear';
leftSide.appendChild(clear);


    //      -- rightside canvas --
    
var rightSide = document.createElement('div');
rightSide.id = 'rightSide';
canvas.appendChild(rightSide);

for (var i = 0; i < 1036; i++) {
    var cell = document.createElement('div');
    cell.className = 'cells';
    rightSide.appendChild(cell);
}
