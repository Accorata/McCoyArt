import fetch from './node_modules/node-fetch/lib/index.js';

const api_key = '563492ad6f917000010000015a0408d31033415caf82c979840d22bc';
const args = process.argv.slice(2);

async function retrieve_image_url(query) {
  try {
    let page = await Math.floor(Math.random() * 10) + 1;
    let data = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${page}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: api_key,
      },
    });
    let d_json = await data.json();
    let photo_num = await Math.floor(Math.random() * 15);
    let photo = await d_json.photos[photo_num];
    let image_url = await photo.src.landscape;
    console.log(image_url);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

retrieve_image_url(args[0]);
