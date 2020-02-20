'use strict';

function getDogImage(num) {
  if (num < 1 || num > 50 || num === '')
  {
    alert('please enter a number between 1 and 50');
  }
  else{
    let i = 0;
    while(i < num){
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson => {
          displayImages(responseJson.message);
        });
      i++;
    }
  }
}

function handleSubmit(){(
  $('.images').submit(function(event){
    event.preventDefault();
    console.log('Im listening');
    let num = $('#numberOfDogs').val();
    getDogImage(num);
  }));
}

function renderImages(html) {
  $('div').append(`${html}`);
}


function displayImages(images){
  const html = `<img src =${images}>`;
  renderImages(html);
}



$(handleSubmit);


