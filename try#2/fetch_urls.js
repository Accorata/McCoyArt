import fetch from './node_modules/node-fetch/lib/index.js';

const api_key = '563492ad6f917000010000015a0408d31033415caf82c979840d22bc';
const query = 'Sea';

async function images(query) {
  try {
    // let page = random(100);
    let data = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${1}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: api_key,
      },
    });
    let d_json = await data.json();
    // let photo_num = random(100);
    let photo = await d_json.photos[0];
    let image_url = photo.src.landscape;
    console.log(image_url);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

images(query);
