let callBackButton = function() {
  //remember the button element we create in HTML? We need to ask the JavaScript file to listem to it
  const getMe = document.getElementById('getPic');
  //When the button is clicked, trigger getDogPics function
  getMe.onclick = getDogPics;
}

let getDogPics = function() {
  const dogImg = document.getElementById('dog-img');
  const url = 'https://dog.ceo/api/breeds/image/random'

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((dogJSON) => {
      console.log(dogJSON);
      dogImg.src = dogJSON.message;
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
window.addEventListener('DOMContentLoaded', callBackButton);
