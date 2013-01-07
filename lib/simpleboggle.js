
'use strict';

var simpleboggle = (function () {
    function Board(width, height) {
        width = width || 4;
        height = height || width;

        this.getWidth = function () { return width; };
        this.getHeight = function () { return height; };
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
