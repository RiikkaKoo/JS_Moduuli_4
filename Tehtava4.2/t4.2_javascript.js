/* Develop the app further.
Add JavaScript that gets the value entered to the form and sends a request
with fetch to https://api.tvmaze.com/search/shows?q=${value_from_input}.
Print the search result to the console. (3p) */

const lomake = document.querySelector('form');

lomake.addEventListener('submit', async (event) => {
  event.preventDefault();
  const avainsana = document.querySelector('#query').value;
  const vastaus = await fetch(
      `https://api.tvmaze.com/search/shows?q=${avainsana}`);
  const json_vastaus = await vastaus.json();
  console.log(json_vastaus);
});