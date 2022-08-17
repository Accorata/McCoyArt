#! /usr/bin/env bash

function save_image() {
  curl --url "$1" -o test3.jpeg
}

node fetch_urls.js | echo
#save_image
# node grab_urls.js
echo "abc"
# node grab_urls.js
# |> echo ""
