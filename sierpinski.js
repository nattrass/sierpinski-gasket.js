class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Gasket {
    constructor(coord1, coord2, coord3, iterations, canvasCtx) {
        this.coord1 = coord1;
        this.coord2 = coord2;
        this.coord3 = coord3;
        this.iterations = iterations;
        this.canvasCtx = canvasCtx;
    }

    GetMidPoint(p1, p2) {
        return (p1 + p2) / 2;
    }

    GenerateGasket() {
        var count = 0;
        var currentCoord = new Coordinate(coord1.x, coord1.y);
        var yPoint = 0;
        var xPoint = 0;

        do {
            count++;
            var randomNumber = Math.floor((Math.random() * 3) + 1);

            switch (randomNumber) {
                case 1:
                    yPoint = this.GetMidPoint(coord1.y, currentCoord.y);
                    xPoint = this.GetMidPoint(coord1.x, currentCoord.x);
                    currentCoord.x = xPoint;
                    currentCoord.y = yPoint;
                    break;
                case 2:
                    yPoint = this.GetMidPoint(coord2.y, currentCoord.y);
                    xPoint = this.GetMidPoint(coord2.x, currentCoord.x);
                    currentCoord.x = xPoint;
                    currentCoord.y = yPoint;
                    break;
                case 3:
                    yPoint = this.GetMidPoint(coord3.y, currentCoord.y);
                    xPoint = this.GetMidPoint(coord3.x, currentCoord.x);
                    currentCoord.x = xPoint;
                    currentCoord.y = yPoint;
                    break;
                default:
            }
            ctx.fillRect(xPoint, yPoint, 1, 1);
        }
        while (count < this.iterations);
    }
}