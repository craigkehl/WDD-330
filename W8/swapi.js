// Nav constants
const filmBtn = document.getElementById('btn-film');
const peopleBtn = document.getElementById('btn-people');
const planetsBtn = document.getElementById('btn-planets');
const speciesBtn = document.getElementById('btn-species');
const starshipsBtn = document.getElementById('btn-starships');
const vehiclesBtn = document.getElementById('btn-vehicles');

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// API 
const baseURL = 'https://swapi.dev/api/';

// DOM elements
const display = document.getElementById('entry-list');
const postTemplate = document.getElementById('single-entry');
const selectBtns = document.getElementById('select-api');
const pageSpan = document.querySelector('.paginate span');

console.log(paginateDiv);

// General send and request fetch
function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: data,
  }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then(errData => {
          console.log(errData);
          throw new Error('Server error!');
        });
      }
    })
    .catch(error => {
      console.log(error);
      throw new Error('Something went wrong!');
    });
}

// fetch request
async function fetchData(url) {
  debugger
  try {
    const responseData = await sendHttpRequest(
      'GET',
      url
    );
    const apiObj = responseData;
    const nextURL = apiObj.next;
    const prevURL = apiObj.previous;

    (validURL(nextURL)) ? 
    nextBtn.setAttribute('display', 'visible'):
    nextBtn.setAttribute('display', 'none');
    (validURL(prevURL)) ? 
    prevBtn.setAttribute('display', 'visible'):
    prevBtn.setAttribute('display', 'none');

    pageLinks(apiObj.count, curURL);

    
    display.innerHTML = "";
    for (const item of apiObj.results) {      
      const itemEl = document.importNode(postTemplate.content, true);
      itemEl.querySelector('h2').textContent = item.title;
      itemEl.querySelector('p').textContent = item.opening_crawl;
      itemEl.querySelector('li').id = item.episode_id;
      display.append(itemEl);
    }
  } catch (error) {
    alert(error.message);
  }
}

function validURL(urlStr) {
    const regex = /http\:\/\/swapi\.dev\/api\/\S+/i;
    return ((regex.exec(urlStr)) !== null);
}

function pageLinks(count, curURL) {
  span = 
  pages = Math.floor(count / 10);
  for (i=0; i<pages; i++) {
    if ()

  }
}


filmBtn.addEventListener('click', fetchData.bind(this, baseURL + 'films/'));
peopleBtn.addEventListener('click', fetchData.bind(this, baseURL + 'people/'));
planetsBtn.addEventListener('click', fetchData.bind(this, baseURL + 'planets/'));
speciesBtn.addEventListener('click', fetchData.bind(this, baseURL + 'species/'));
starshipsBtn.addEventListener('click', fetchData.bind(this, baseURL + 'starships/'));
vehiclesBtn.addEventListener('click', fetchData.bind(this, baseURL + 'vehicles/'));
prevBtn.addEventListener('click', fetchData.bind(this, prevURL));
nextBtn.addEventListener('click', fetchData.bind(this, nextURL));
