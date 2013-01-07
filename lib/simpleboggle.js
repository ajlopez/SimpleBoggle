
'use strict';

var simpleboggle = (function () {
    function Board(width, height) {
        width = width || 4;
        height = height || width;

        var cells = Array(width);

        for (var k = 0; k < width; k++) {
            cells[k] = Array(height);
            for (var j = 0; j < height; j++)
                cells[k][j] = { neighbors: [] };
        }

        this.getWidth = function () { return width; };
        this.getHeight = function () { return height; };

        this.getCell = function (x, y) { return cells[x][y]; }
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
