# sierpinski-gasket.js

Javacript library providing the ability to render a [Sierpinski Gasket](https://en.wikipedia.org/wiki/Sierpinski_triangle) onto a HTML5 canvas.



## Getting Started

Include the dist\sierpinski.min.js file in your html, grab a 2d context from a canvas. 

    <canvas id="sierpinski" height="400" width="400"></canvas>
    <script src="dist/sierpinski.min.js"></script>
    <script>
        var canvas = document.getElementById('sierpinski');
        var ctx = canvas.getContext('2d');

        var coord1 = new Coordinate(200, 0);
        var coord2 = new Coordinate(0, 400);
        var coord3 = new Coordinate(400, 400);
        var gasket = new Gasket(coord1, coord2, coord3, 100000, ctx);
        gasket.GenerateGasket();
    </script>

Specify 3 coordinates that represent the 3 points of an equalateral triangle, top, bottom left and then bottom right.
Create an instance of Gasket, passing in the coordinates, the number of points to render and finally the canvas context.

Call GenerateGasket() on the Gasket object.

## Prerequisites

The project uses NPM to manage packages and Grunt to automate build tasks.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details

