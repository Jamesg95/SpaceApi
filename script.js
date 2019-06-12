'use strict'
function spaceApi() {
  const baseUrl="https://api.le-systeme-solaire.net/rest/bodies/"

  function displayResults(responseJson) {
    console.log(responseJson);
    $('#results-page').empty();
      $('#results-page').append(
        `<ul class="info-list">
          <li>Name:${responseJson.name}</li>
          <li>English Name: ${responseJson.englishName}</li>
          <li>Is it a planet?? ${responseJson.isPlanet}</li>
          <li>Density: ${responseJson.density} g/cm^3</li>
          <li>Gravity: ${responseJson.gravity} m/s^2</li>
        </ul>
        `);

    $('.results').removeClass('hidden');
  };

  function getBodies(baseUrl, searchTerm) {
    
    const url = baseUrl + searchTerm;
    console.log(url);
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(responseJson => displayResults(responseJson))
      .catch(err => {
        displayError(err.message);
      });
  }

  function displayError(error) {
    console.log('displayError ran');
      $('#results-page').empty();
      $('.results').html(`<h3 class="error">Something went wrong: ${error} Please Try Again.</h3>`)
      $('.results').removeClass('hidden')
  }

  function watchForm() {
    $('#js-form').submit(event => {
      event.preventDefault();
      console.log('watchForm ran');
      const searchTerm = $('#js-space-search').val();
      
      getBodies(baseUrl, searchTerm);
    });
  }

  $(function() {
    console.log('Space App Loaded! Waiting for submit!');
    watchForm();
  }); 
}

function giphyApi() {
    const baseUrl ="https://api.giphy.com/v1/stickers/search";
    const apiKey ="uQOK3GooXflzjEFFptWV0v38YzdVAFuE";
  
    function formatQueryParams(params) {
      const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      return queryItems.join('&');
    }
  
    function displayResults(responseJson) {
      console.log(responseJson);
  
      $('#results-page-gif').empty();
      
      $('#results-page-gif').append(
        `<ul class="gif-list">
          <li>
            <div>
              <img src="${responseJson.data[0].images.original.url}">
            </div>
          </li>
        </ul>
      `);
    
      $('.results').removeClass('hidden');
    };
  
    function getGifs(baseUrl, searchTerm) {
      const params = {
        q: 'space' + ' ' + searchTerm,
        limit: 1,
        offset: 0,
        rating: 'G',
        lang: 'en'
      };
      const queryString = formatQueryParams(params)
      const url = baseUrl + '?' + '&api_key=' + apiKey + '&' + queryString;
      console.log(url);
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(response.statusText);
        })
        .then(responseJson => displayResults(responseJson))
        .catch(err => {
          displayError(err.message);
        });
    }
  
    function displayError(error) {
      console.log('displayError ran');
        $('#results-page-gif').empty();
        $('.results').html(`<h3 class="error">Something went wrong: ${error} Please Try Again.</h3>`)
        $('.results').removeClass('hidden')
    }
  
    function watchForm() {
      $('#js-form').submit(event => {
        event.preventDefault();
        console.log('watchForm ran');
        const searchTerm = $('#js-space-search').val();
        
        getGifs(baseUrl, searchTerm);
      });
    }
  
    $(function() {
      console.log('Giphy App Loaded! Waiting for submit!');
      watchForm();
    }); 
  }
