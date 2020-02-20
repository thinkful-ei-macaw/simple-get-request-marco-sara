'use strict';

function getDogImage(breed) {

  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
    
      if(responseJson.status === 'Breed not found (master breed does not exist)'){
        alert('this is not a breed');
      }

      else{
        displayImages(responseJson.message);
      }
    });
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


