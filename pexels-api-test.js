// import { createClient } from 'pexels';
//
// //const api_key = '563492ad6f917000010000015a0408d31033415caf82c979840d22bc';
// const client = createClient('563492ad6f917000010000015a0408d31033415caf82c979840d22bc');
// const query = 'Nature';
// //
// // client.photos.search({ query, per_page: 1 })

const api_key = '563492ad6f917000010000015a0408d31033415caf82c979840d22bc';

import fetch from "node-fetch";

fetch("https://api.pexels.com/v1/search?query=people",{
  headers: {
    Authorization: api_key
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     console.log(data)
   })
   .catch(resp => {
     console.log("Fail")
   })
