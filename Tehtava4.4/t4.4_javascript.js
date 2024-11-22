/* Develop the app even further. Optional chaining is not the best way to
handle missing image. Use ternary operator or if/else to add a default image
if TV-show is missing image property. (2p)
Use https://via.placeholder.com/210x295?text=Not%20Found as the default image. */

const lomake = document.querySelector('form');

lomake.addEventListener('submit', async (event) => {
  event.preventDefault();
  const avainsana = document.querySelector('#query').value;
  const vastaus = await fetch(
      `https://api.tvmaze.com/search/shows?q=${avainsana}`);
  const json_vastaus = await vastaus.json();
  console.log(json_vastaus);

  const spot = document.querySelector('#results');
  spot.innerHTML = '';

  for (let s = 0; s < json_vastaus.length; s++) {
    let article = document.createElement('article');
    let title = json_vastaus[s].show.name;
    let link = json_vastaus[s].show.url;

    function check_pic_status() {
      let pic_info = json_vastaus[s].show.image?.medium;
      console.log(pic_info);
      return (pic_info === undefined) ?
          'https://via.placeholder.com/210x295?text=Not%20Found' :
          pic_info;
    }
    let pic = check_pic_status();

    let desc = json_vastaus[s].show['summary'];
    article.innerHTML = `<h2>${title}</h2>
                            <img src="${pic}" alt="${title}"> 
                            <div><a href=${link} target="_blank">Linkki ohjelman tietoihin</a></div>
                            <div>${desc}</div>`;
    spot.appendChild(article);
  }
});