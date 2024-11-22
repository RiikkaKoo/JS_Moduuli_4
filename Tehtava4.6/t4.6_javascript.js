/* Develop the app further (4p).
Now add a form where you can enter a search term like in assignments 1-3
Send the search term to https://api.chucknorris.io/jokes/search?query=${value_from_input} using fetch()
Print each joke in this format:
<article>
    <p>Joke here<p>
</article> */

document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault();
  let keyword = document.querySelector('#query').value;
  let response = await fetch(
      `https://api.chucknorris.io/jokes/search?query=${keyword}`);
  let results = await response.json();
  // console.log(results);

  const insert_location = document.querySelector('#jokes');
  insert_location.innerHTML = '';
  let nro = 1;

  for (let j of results['result']) {
    // console.log(j.value);
    let article = document.createElement('article');
    article.innerHTML = `<p>${nro}. ${j.value}</p>`;
    insert_location.appendChild(article);
    nro++;
  }

});


