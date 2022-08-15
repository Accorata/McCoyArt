import {
  createClient
} from '/node_modules/pexels';
import fetch from './node-fetch';

const api_key = '563492ad6f917000010000015a0408d31033415caf82c979840d22bc';
const client = createClient(api_key);
const query = 'Sea';
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
  try {
    url = await images(query);
    console.log(url);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

run();
