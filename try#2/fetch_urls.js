import fetch from './node_modules/node-fetch/lib/index.js';

const api_key = '563492ad6f917000010000015a0408d31033415caf82c979840d22bc';
const urls = [];

async function retrieve_image_url(query) {
  try {
    let page = Math.floor(Math.random() * 10) + 1;
    let data = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${page}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: api_key,
      },
    });
    let d_json = await data.json();
    let photo_num = Math.floor(Math.random() * 15);
    let photo = await d_json.photos[photo_num];
    urls.push(photo.src.landscape);
    //console.log('"'+image_url+'"');
    //return image_url;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

async function retrieve_urls() {
  await retrieve_image_url("sunset");
  await retrieve_image_url("sky");
  await retrieve_image_url("sea");
  await retrieve_image_url("landscape");
  console.log(urls);
}

retrieve_urls();
