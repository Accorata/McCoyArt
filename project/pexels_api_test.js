const api_key = '563492ad6f917000010000015a0408d31033415caf82c979840d22bc';
const client = createClient(api_key);
//const query = 'Nature';
var image_url;

async function images(query) {
  try {
    let data = await client.photos.search({
      query,
      per_page: 1
    });
    let photo = data.photos[0];
    let src = photo.src;
    image_url = src.landscape;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

let run = async function() {
  import {
    createClient
  } from 'pexels';
  import fetch from "node-fetch";
  try {
    let img = document.getElementById('img');
    await images("lake");
    img.src = image_url.message;
    console.log(image_url);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

let button_setup = function() {
  const button = document.getElementById('button');
  button.onclick = run;
}

window.addEventListener('DOMContentLoaded', button_setup);
