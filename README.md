# SimpleBoggle

Simple Boggle board and word search library for JavaScript/Node.js.

## Installation

Via npm on Node:

```
npm install simpleboggle
```

## Usage

Reference in your program:

```js
var simpleboggle = require('simpleboggle');
```

TBD

## Development

```
git clone git://github.com/ajlopez/SimpleBoggle.git
cd SimpleBoggle
npm install
npm test
```

## Samples

[Compile Words](https://github.com/ajlopez/SimpleBoggle/tree/master/samples/compilewords) Compile list of words
into a json file, to be used in other samples.

[Find Words](https://github.com/ajlopez/SimpleBoggle/tree/master/samples/findwords) Find words in a board, using the
compile word list at `lib/english.json`.

## To do

## Versions

- 0.0.1: Published 2013-01-07, first version.
- 0.0.2: Published 2013-01-08, first samples, compiled English word list.
- 0.0.3: Under development, in master.

## Word List

The file `lib/english.json` was compiled using a word list of [scowl project](http://wordlist.sourceforge.net/). The word list
was taken from scowl.7.1, `final/english-words.10`, using `compilewords` sample. Acronyms were skipped. To do: compile
more words.

## Contribution

Feel free to [file issues](https://github.com/ajlopez/SimpleBoggle) and submit
[pull requests](https://github.com/ajlopez/SimpleBoggle/pulls) — contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

