/* Make an app that retrieves a random Chuck Norris joke and displays it in
the console. (2p)
API to use: chucknorris.io
Send a request to https://api.chucknorris.io/jokes/random and print only the
joke to the console (that would be the 'value' property)
No need to add a form. */

document.querySelector('button').addEventListener('click', async (event) => {
  event.preventDefault();
  let response = await fetch('https://api.chucknorris.io/jokes/random');
  let results = await response.json();
  // console.log(results);
  console.log(results.value);

});


