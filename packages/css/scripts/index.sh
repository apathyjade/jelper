#! /bin/sh

if test -d "./lib"; then
    rm -r ./lib
fi

mkdir ./lib
cp ./src/*.scss ./lib/
cp ./src/index.scss ./lib/index.module.scss
