function getDogPics () {
  const url = 'https://dog.ceo/api/breeds/image/random'

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((dogJSON) => {
      console.log(dogJSON);
    })
    .catch(err => {
      // handle errors
    });
  // below is an alternative way to fetch by using asyng await
  // you should add async before the getDogPics function
  // const response = await fetch(url);
  // const dogJSON = await response.json();
  // img.src = dogJSON.message;
}







//When all the DOM elements are loaded, trigger the callback function
// function setup() {
//   createCanvas(100,100);
//   background(0);
//window.addEventListener('DOMContentLoaded', callBackButton);
//}
