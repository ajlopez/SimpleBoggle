
var simpleboggle = require('../..'),
    fs = require('fs'),
    lazy = require('lazy');

args = process.argv.slice(2);
tree = { };

// http://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js

args.forEach(function (filename) {
    new lazy(fs.createReadStream(filename))
     .lines
     .forEach(function(line){
        var word = line.toString();
        if (!(word[0] >= 'a' && word[0] <= 'z'))
            return;
        var p = word.indexOf("'");
        if (p >= 0)
            word = word.substring(0, p);
        p = word.indexOf('\n');
        if (p >= 0)
            word = word.substring(0, p);

        simpleboggle.addWordToNode(word, tree);

        console.log(word);
     }
    ).join(function() {
        var text = JSON.stringify(tree);
        fs.writeFileSync('words.json', text);
    });
});

