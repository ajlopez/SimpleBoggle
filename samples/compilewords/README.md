# Compile Words Sample

Read words from files and generate a json file to be used by `board.findWords`.

## Usage

Run:
```
node run <list of files>
```
A `words.json` is generated. The module `lib/english.json` was created using this sample.
The word list was taken from
[scowl project](http://wordlist.sourceforge.net/). The processed file was scowl.7.1, `final/english-words.10`, using `compilewords` sample. Acronyms were skipped.

The program ignores the single quotes, and upper case words (to skip acronyms).






