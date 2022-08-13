import {
  createClient
} from 'pexels';

const client = createClient('563492ad6f917000010000015a0408d31033415caf82c979840d22bc');
const query = 'Nature';

client.photos.search({
  query,
  per_page: 1
}).then(photos => {
  console.log(photos)
});
