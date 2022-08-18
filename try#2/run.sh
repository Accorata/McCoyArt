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
    do file_name="${q}.jpeg"
    node fetch_urls.js ${q} | save_image;
  done;
}
# file_name="sea.jpeg"
# node fetch_urls.js sea | save_image
# file_name="sea.jpeg"
# node fetch_urls.js sea | save_image
# file_name="sea.jpeg"
# node fetch_urls.js sea | save_image
# file_name="sea.jpeg"
# node fetch_urls.js sea | save_image
save_images

echo "done"
#one=(1 2 3 4)
# function save_images() {
#
# }
#
# function set_one(){
#   while read data;
#   do one=${data};
#   done;
# }
#
# function split() {
#   for t in ${one[@]};
#     do echo $t
#   done;
# }
#
# node test.js | set_one
#
# split ${one}






# function save_image() {
#   curl --url "$1" -o test3.jpeg
# }
