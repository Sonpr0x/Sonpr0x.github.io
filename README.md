# Ristretto-rs generate **Windows** version (install & build on Windows)
## Fixs bad code
1. Fix path without extension (http://localhost:3123/view/<file-name-without-the-extension>)
2. Add index route, route direct to html file   
3. Fix error no such file after generate file   
... bla bla bla   

## Preps
1. Install Rust: rustup.rs

## How to use?
First, build
```
cd generator-rs
cargo build
```
Writing posts    
**/posts/*.md**   
```
---
title: <string>
published: true | false | private | guest
date: YYYY-DD-mm HH:MM:SS
tags: <string>, <string>,...
description: <string>
image: <url to a featured image>
---
```
```
generate posts (.md > .hmtl, metadatas bla bla), run file `gen` symlink in the root folder
```
./gen posts
```
run preview server, default `localhost:3123`.
```
./gen preview
```
note: edit host name at line **389**.


## How to custom
Go ahead yourself xD
