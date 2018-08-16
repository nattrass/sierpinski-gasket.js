function Coordinate(x, y) {
    this.x = x;
    this.y = y;
}

function GetMidPoint(p1, p2) {
    return (p1 + p2) / 2;
}

var canvas = document.getElementById('sierpinski');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'Black';

var count = 0;

var coord1 = new Coordinate(200, 0);
var coord2 = new Coordinate(0, 400);
var coord3 = new Coordinate(400, 400);

var currentCoord = new Coordinate(coord1.x, coord1.y);
var yLength = 0;
var xLength = 0;

do {
    count++;
    var randomNumber = Math.floor((Math.random() * 3) + 1);

    switch (randomNumber) {
        case 1:
            yPoint = GetMidPoint(coord1.y, currentCoord.y);
            xPoint = GetMidPoint(coord1.x, currentCoord.x);
            currentCoord.x = xPoint;
            currentCoord.y = yPoint;
            break;
        case 2:
            yPoint = GetMidPoint(coord2.y, currentCoord.y);
            xPoint = GetMidPoint(coord2.x, currentCoord.x);
            currentCoord.x = xPoint;
            currentCoord.y = yPoint;
            break;
        case 3:
            yPoint = GetMidPoint(coord3.y, currentCoord.y);
            xPoint = GetMidPoint(coord3.x, currentCoord.x);
            currentCoord.x = xPoint;
            currentCoord.y = yPoint;
            break;
        default:
    }
    ctx.fillRect(xPoint, yPoint, 1, 1);
}
while (count < 100000);