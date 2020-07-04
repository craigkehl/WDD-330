const example2Btn = document.getElementById('example2Btn');
const example2Dis = document.getElementById('example2Display');

const spacePeople = () => {
  return new Promise((resolves, rejects) => {
    const api = 'http://api.open-notify.org/astros.json';
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () => {
      if(request.status === 200) {
        resolves(JSON.parse(request.response));
      } else {
        rejects(Error(request.statusText));
      }
    };
    request.onerror = err => rejects(err);
    request.send();
  });
};

function trigger() {
  spacePeople().then(
    spaceData => showData(spaceData),
    err => console.error(
        new Error('Cannot load space people')
    )
  );
}

function showData(spaceData) {
  if(spaceData.number > 0) {
    example2Dis.innerHTML = `<h3>There are ${spaceData.number} people in space right now.</h3>
    <ol>`;
    spaceData.people.forEach( p => {
      example2Dis.innerHTML += `<li>${p.name} is on the ${p.craft}</li>`;
    });
    example2Dis.innerHTML += "</ol>"
  } else {
    example2Dis.innerHTML = "<h3>No one is listed as being in space right now.<h3>"
  }
}

example2Btn.addEventListener('click', trigger);