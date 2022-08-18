#! /usr/bin/env bash

queries=("sunset" "sky" "sea" "landscape")
file_name=""

function save_image() {
  while read data;
  do curl --url "${data}" -o ${file_name};
  done;
}

function save_images() {
  for q in ${queries[@]};
    do file_name="images/${q}.jpeg"
    node fetch_urls.js ${q} | save_image;
  done;
}

save_images

echo "done"
