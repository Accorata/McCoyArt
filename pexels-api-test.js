import { createClient } from 'pexels';

const api_key = '563492ad6f917000010000015a0408d31033415caf82c979840d22bc'
const client = createClient(api_key);
const query = 'Nature';

client.photos.search({ query, per_page: 1 })
