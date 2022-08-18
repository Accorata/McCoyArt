#! /usr/bin/env bash

file_name="sea.jpeg"

function save_image() {
  while read data;
  do curl --url "${data}" -o ${file_name};
  done;
}

node fetch_urls.js | save_image

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

echo "done"




# function save_image() {
#   curl --url "$1" -o test3.jpeg
# }
