console.log('sanity check');

var ppDiv = document.getElementById('pixelPainter');
var can = document.createElement('div');
can.id = 'canvas';
ppDiv.appendChild(can);

var allCells = document.createElement('div');
allCells.id = 'allCells';
can.appendChild(allCells);

var divChart = document.createElement('div');
divChart.id = 'divChart';
allCells.appendChild(divChart);

for (var i = 0; i < 72; i++) {
    var chart = document.createElement('div');
    chart.id = 'chart';
    divChart.appendChild(chart);
}

var erase = document.createElement('div');
erase.id = 'erase';
erase.innerHTML = 'erase';
divChart.appendChild(erase);

var divCell = document.createElement('div');
divCell.id = 'divCell';
allCells.appendChild(divCell);

for (var i = 0; i < 357; i++) {
    var cell = document.createElement('div');
    cell.id = 'cells';
    divCell.appendChild(cell);
}
