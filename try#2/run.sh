#! /usr/bin/env bash

function save_image() {
  while read data;
  do curl --url "$data" -o test3.jpeg;
  done;
}

node fetch_urls.js | save_image

echo "abc"
