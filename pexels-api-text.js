import {
  createClient
} from 'pexels';

const api_key = '563492ad6f917000010000015a0408d31033415caf82c979840d22bc';
const client = createClient(api_key);
//const query = 'Nature';
var image;

async function images(query) {
  try {
    let data = await client.photos.search({
      query,
      per_page: 1
    });
    let photo = data.photos[0];
    let src = photo.src;
    image = src.landscape;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

async function run() {

  await images("lake");
  console.log(image);
}

run();
