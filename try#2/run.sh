#! /usr/bin/env bash

function save_image() {
  while read data;
  do curl --url "$data" -o test3.jpeg;
  done;
}

node fetch_urls.js | save_image

echo "abc"




# function save_image() {
#   curl --url "$1" -o test3.jpeg
# }
