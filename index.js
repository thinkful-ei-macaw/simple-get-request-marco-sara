'use strict';

function getDogImage(breed) {
  
  try {
    let breedURL = `https://dog.ceo/api/breed/${breed}/images/random`;
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => response.json())
      .then(responseJson => {
        displayImages(responseJson.message);
        console.log(responseJson);
      });
  }

  catch(err) {
    throw alert('This is not a breed');
  }

}
  
//
function handleSubmit(){(
  // $('#userRequest').submit(function(event){
  $('.breed').on('click', '#userRequest', event => {

    event.preventDefault();

    let breed = $('#breed-of-dogs').val();
    getDogImage(breed);
  }));
}

function renderImages(html) {
  $('div').html(`${html}`);
}

function displayImages(images){
  const html = `<img src =${images}>`;
  renderImages(html);
}







$(handleSubmit);


