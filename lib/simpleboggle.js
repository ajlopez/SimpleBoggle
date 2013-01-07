
'use strict';

var simpleboggle = (function () {
    function Board(width, height) {
        width = width || 4;
        height = height || width;

        var cells = Array(width);

        for (var k = 0; k < width; k++) {
            cells[k] = Array(height);
            for (var j = 0; j < height; j++)
                cells[k][j] = { neighbors: [], x: k, y: j };
        }

        for (var x = 0; x < width; x++)
            for (var y = 0; y < height; y++) {
                var cell = cells[x][y];

                for (var dx = -1; dx <= 1; dx++)
                    for (var dy = -1; dy <= 1; dy++) {
                        if (!dx && !dy)
                            continue;
                        var newx = x + dx;
                        var newy = y + dy;
                        if (newx < 0 || newx >= width || newy < 0 || newy >= height)
                            continue;
                        cell.neighbors.push(cells[newx][newy]);
                    }
            }
                    

        this.getWidth = function () { return width; };
        this.getHeight = function () { return height; };

        this.getCell = function (x, y) { return cells[x][y]; };

        this.setLetter = function (x, y, letter) { cells[x][y].letter = letter; };

        this.findLetter = function (letter) {
            var results = [];

            for (var x = 0; x < width; x++)
                for (var y = 0; y < height; y++) {
                    var cell = cells[x][y];
                    if (cell.letter == letter)
                        results.push(cell);
                }

            return results;
        }
    }

    function createBoard(width, height) {
        return new Board();
    }

    return {
        createBoard: createBoard
    }
})();

if (typeof window === 'undefined') {
	module.exports = simpleboggle;
}
