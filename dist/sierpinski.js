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

    GenerateGasket() {
        var count = 0;
        let currentCoord = new Coordinate(coord1.x, coord1.y);
        let yPoint = 0;
        let xPoint = 0;

        let GetMidPoint = function (p1, p2) {
            return (p1 + p2) / 2;
        };

        let UpdateCurrentCoordinate = function (x, y) {
            currentCoord.x = x;
            currentCoord.y = y;
        };

        let UpdateXAndYPoints = function (coordinate) {
            xPoint = GetMidPoint(coordinate.x, currentCoord.x);

            yPoint = GetMidPoint(coordinate.y, currentCoord.y);
        };

        do {
            count++;
            let randomNumber = Math.floor((Math.random() * 3) + 1);

            switch (randomNumber) {
                case 1:
                    UpdateXAndYPoints(this.coord1);
                    break;
                case 2:
                    UpdateXAndYPoints(this.coord2);
                    break;
                case 3:
                    UpdateXAndYPoints(this.coord3);
                    break;
                default:
            }
            UpdateCurrentCoordinate(xPoint, yPoint);
            ctx.fillRect(xPoint, yPoint, 1, 1);
        }
        while (count < this.iterations);
    }
}