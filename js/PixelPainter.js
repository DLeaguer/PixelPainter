console.log('sanity check');

var ppDiv = document.getElementById('pixelPainter');
var canvas = document.createElement('div');
canvas.id = 'canvas';
ppDiv.appendChild(canvas);


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

for (var i = 0; i < 812; i++) {
    var cell = document.createElement('div');
    cell.className = 'cells';
    rightSide.appendChild(cell);
}
