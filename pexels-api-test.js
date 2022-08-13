// import { createClient } from 'pexels';
//
// //const api_key = '563492ad6f917000010000015a0408d31033415caf82c979840d22bc';
// const client = createClient('563492ad6f917000010000015a0408d31033415caf82c979840d22bc');
// const query = 'Nature';
// //
// // client.photos.search({ query, per_page: 1 })

const api_key = '563492ad6f917000010000015a0408d31033415caf82c979840d22bc';
//const query = "lake";

import fetch from "node-fetch";

async function images(query) {
    let response = await fetch("https://api.pexels.com/v1/search?query=" + query, {
        headers: {
          Authorization: api_key
        }
      });
    let data = await response.json();
    console.log(data);
}

images("lake");

// const data = await fetch("https://api.pexels.com/v1/search?query=" + query, {
//     headers: {
//       Authorization: api_key
//     }
//   })
//   .then(resp => {
//     return resp.json()
//   })
//   .then(data => {
//     return data
//   })
//   .catch(error => {
//     console.log("Fail")
//     return ""
//   });
//
//   // .then(data => {
//   //   console.log(data)
//   // })
// console.log(data);
