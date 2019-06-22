'use strict'
function exampleSpaceApi() {
  const baseUrl="https://api.le-systeme-solaire.net/rest/bodies/earth"

  function displayResults(responseJson) {
    console.log(responseJson);
    $('#results-error').empty();
    $('#results-page').empty();
    $('#results-page').append(
      `<h3>We are at <span class="space-title">${responseJson.name}!</span></h3>
      <ul class="info-list">
        <li>Name:    ${responseJson.name}</li>
        <li>English Name:    ${responseJson.englishName}</li>
        <li>Is it a planet?    ${responseJson.isPlanet}</li>
        <li>Density:    ${responseJson.density} g/cm^3</li>
        <li>Gravity:    ${responseJson.gravity} m/s^2</li>
      </ul>
    `);

    $('.results').removeClass('hidden');
  };

  function getBodies(baseUrl) {
    
    const url = baseUrl;
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

  function displayError() {
    console.log('displayError ran');
    $('#results-error').empty();
    $('#results-error').html(`<h3 class="error">Something went wrong: Search Term Not Found. Can not output new information. Please Try Again.</h3>`)
    $('.results').removeClass('hidden')

  }

  

  function getExample() {
    console.log('Example Loaded');
    $('.green-nav').click(event => {
      getBodies(baseUrl);
      navLinks();
      scrollChange();
    });
  }
  getExample();  
}

function exampleGiphyApi() {
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
      `<h3 class="ital question">Where are we?</h3>
      <ul class="gif-list">
        <li>
          <div>
            <img class="gif" src="${responseJson.data[0].images.original.url}">
          </div>
        </li>
      </ul>
    `);
    
    $('.results').removeClass('hidden');
  };
  
  function getGifs(baseUrl) {
    const params = {
      q: 'space' + ' ' + 'earth',
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
    $('.results').empty();
    $('.results').append(`<h3 class="error">Something went wrong: ${error} Please Try Again.</h3>`)
    $('.results').removeClass('hidden')
  }

  function getExample() {
    console.log('Example Loaded');
    $('.green-nav').click(event => {
      getGifs(baseUrl);
      navLinks();
      scrollChange();
    });
  }
  getExample();  

}

function exampleYoutubeApi() {
  const baseUrl="https://www.googleapis.com/youtube/v3/search";
  const apiKey="AIzaSyC9-N1X2NtrOdcJclkFeJacOLwovgheL50";

  function formatQueryParams(params) {
    const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
  }


  function displayResults(responseJson) {
    console.log(responseJson);
    $('#results-page-youtube').empty();
    for (let i = 0; i < responseJson.items.length; i++) {
    $('#results-page-youtube').append(
      `<div class="video-results">
        <iframe src="https://www.youtube.com/embed/${responseJson.items[i].id.videoId}"></iframe>
          <a href="https://www.youtube.com/embed/${responseJson.items[i].id.videoId}"
            target="_blank">
            <div class="info">
              <h4>${responseJson.items[i].snippet.title}</h4>
              <p>"${responseJson.items[i].snippet.description}"</p>
            </div>
          </a>
        </div>
      `);
    }   
    
    $('.results').removeClass('hidden');
  };

  function getVideos(baseUrl) {
    const params = {
      part: 'snippet',
      key: apiKey,
      q: 'science' + ' ' + 'earth',
      maxResults: 6,
      type: 'video'
    };

    const queryString = formatQueryParams(params)
    const url = baseUrl + '?' + queryString;
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
    $('.results').empty();
    $('.results').append(`<h3 class="error">Something went wrong: ${error} Please Try Again.</h3>`)
    $('.results').removeClass('hidden')
  }
  
  function getExample() {
    console.log('Example Loaded');
    $('.green-nav').click(event => {
      getVideos(baseUrl);
      navLinks();
      scrollChange();
    });
  }
  getExample();
}
exampleSpaceApi();
exampleGiphyApi();
exampleYoutubeApi();

function spaceApi() {
  const baseUrl="https://api.le-systeme-solaire.net/rest/bodies/"

  function displayResults(responseJson) {
    console.log(responseJson);
    $('#results-error').empty();
    $('#results-page').empty();
    $('#results-page').append(
      `<h3>We are at <span class="space-title">${responseJson.name}!</span></h3>
      <ul class="info-list">
        <li>Name:    ${responseJson.name}</li>
        <li>English Name:    ${responseJson.englishName}</li>
        <li>Is it a planet?    ${responseJson.isPlanet}</li>
        <li>Density:    ${responseJson.density} g/cm^3</li>
        <li>Gravity:    ${responseJson.gravity} m/s^2</li>
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
        
      })
      .then(responseJson => displayResults(responseJson))
      .catch(err => {
        displayError(err);
      });
  }

  function displayError() {
    console.log('displayError ran');
    $('#results-error').empty();
    $('#results-error').html(`<h3 class="error">Something went wrong: Search Term Not Found. Can not output new information. Please Try Again.</h3>`)
    $('.results').removeClass('hidden')

  }

  function watchForm() {
    $('#js-form').submit(event => {
      event.preventDefault();
      console.log('watchForm ran');
      const searchTerm = $('#js-space-search').val();
      getBodies(baseUrl, searchTerm);
      navLinks();
      scrollChange();
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
      `<h3 class="ital question">Where are we?</h3>
      <ul class="gif-list">
        <li>
          <div>
            <img class="gif" src="${responseJson.data[0].images.original.url}">
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
        
  }
  
  
  
  function watchForm() {
    $('#js-form').submit(event => {
    event.preventDefault();
    console.log('watchForm ran');
    const searchTerm = $('#js-space-search').val();
    getGifs(baseUrl, searchTerm);
    navLinks();
    scrollChange();
    });
  }
  
  $(function() {
    console.log('Giphy App Loaded! Waiting for submit!');
    watchForm();
  }); 
}

function youtubeApi() {
  const baseUrl="https://www.googleapis.com/youtube/v3/search";
  const apiKey="AIzaSyC9-N1X2NtrOdcJclkFeJacOLwovgheL50";

  function formatQueryParams(params) {
    const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
  }


  function displayResults(responseJson) {
    console.log(responseJson);
    $('#results-page-youtube').empty();
    for (let i = 0; i < responseJson.items.length; i++) {
    $('#results-page-youtube').append(
      `<div class="video-results">
        <iframe src="https://www.youtube.com/embed/${responseJson.items[i].id.videoId}"></iframe>
          <a href="https://www.youtube.com/embed/${responseJson.items[i].id.videoId}"
            target="_blank">
            <div class="info">
              <h4>${responseJson.items[i].snippet.title}</h4>
              <p>"${responseJson.items[i].snippet.description}"</p>
            </div>
          </a>
        </div>
      `);
    }   
    
    $('.results').removeClass('hidden');
  };

  function getVideos(baseUrl, searchTerm) {
    const params = {
      part: 'snippet',
      key: apiKey,
      q: 'science' + searchTerm,
      maxResults: 6,
      type: 'video'
    };

    const queryString = formatQueryParams(params)
    const url = baseUrl + '?' + queryString;
    console.log(url);
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(responseJson => displayResults(responseJson))
      
  }

  

  function watchForm() {
    $('#js-form').submit(event => {
      event.preventDefault();
      console.log('watchForm ran');
      const searchTerm = $('#js-space-search').val();
      getVideos(baseUrl, searchTerm);
      navLinks();
      scrollChange();
    });
  }

  $(function() {
    console.log('Youtube Api Loaded! Waiting for submit!');
    watchForm();
  }); 
}

giphyApi();
youtubeApi();
spaceApi();

function navLinks() {
  $("a[href^='#']").click(function(e) {
      event.preventDefault()
      $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
          },
          300,
          'linear'
      )
  });
}

function scrollChange() {
  let elmnt = document.getElementById('two');

  $('#js-form').submit(function(e) {
    elmnt.scrollIntoView({behavior: "smooth"});
  });
}


function fadeIn() {
  $('.header').addClass('load');
}

$(function() {
  fadeIn();
}); 