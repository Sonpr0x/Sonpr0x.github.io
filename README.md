## Fixs bad code
1. Fix path without extension (http://localhost:3123/view/<file-name-without-the-extension>)
2. Add index route, route direct to html file
3. Fix error no such file after generate file

Coming soon:
- Convert to static web for github website
- Custom theme

## How to use?
First, build
```
cd generator-rs
cargo build
```
generate (.md > .hmtl, metadatas bla bla), run file `gen` symlink in the root folder
```
./gen posts
```
run server
```
./gen preview
```
note: edit host name at line **389**.

## How to custom
self-advocacy