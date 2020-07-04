const namesList = document.getElementById('example3');

(async(loginName) => {
  try {
    var response = await fetch(`https://api.github.com/users/${loginName}/followers`);
    var json = await response.json();
    var followerList = json.map(user => user.login);
    namesList.textContent = followerList.join(', ');
  } catch(e) {
      console.log("Data didn't load", e);
  }
})('eveporcello');