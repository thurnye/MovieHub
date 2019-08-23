// get the imdbId from the local storage
// let movieId = ""
// console.log(movieId)

const movieInfo = () => {
  const movieId = sessionStorage.getItem('movieId');
  // console.log(movieId);
  axios.get(`https://www.omdbapi.com/?i=${movieId}&apikey=647764b1`)
    .then((response) => {
      const moviedata = response.data;
     
      // console.log(moviedata);
      // in this case you dont have to do a loop because its not an array

      const div = document.createElement('div');
      div.className = 'movieInfo';

      // movie image
      const image = document.createElement('img');
      image.className = 'moviedata-poster';
      image.src = moviedata.Poster;
      image.alt = moviedata.Title;
      div.appendChild(image);

      const mainContent = document.createElement('div');
      mainContent.className = 'movieInfo-content';

      // movie-title
      const title = document.createElement('div');
      title.className = 'moviedata-title';
      const titleText = document.createElement('h1');
      const textnode = document.createTextNode(moviedata.Title);
      title.appendChild(titleText).appendChild(textnode);

      // trailer
      const trailer = document.createElement('a');
      trailer.href = `https://imdb.com/title/${movieId}`;
      trailer.target = '_blank';
      trailer.className = 'trailer';
      const trailerLink = document.createTextNode('Trailer');
      title.appendChild(trailer).appendChild(trailerLink);

      // synopsis
      const synopsis = document.createElement('div');
      synopsis.className = 'synopsis';
      const paragraph = document.createElement('p');
      const text = document.createTextNode(moviedata.Plot);
      paragraph.appendChild(text);
      synopsis.appendChild(paragraph);


      // create list of other information
      const otherInfo = document.createElement('div');
      otherInfo.className = 'otherInfo';
      const listInfo = document.createElement('ul');
      listInfo.className = 'list-info';
      const list1 = document.createElement('li');
      list1.className = 'list';
      const genre = document.createTextNode(`Genre: ${moviedata.Genre}`);

      const list2 = document.createElement('li');
      list2.className = 'list';
      const actors = document.createTextNode(`Actors: ${moviedata.Actors}`);

      const list3 = document.createElement('li');
      list3.className = 'list';
      const directors = document.createTextNode(`Directors: ${moviedata.Director}`);

      const list4 = document.createElement('li');
      list4.className = 'list';
      const country = document.createTextNode(`Country: ${moviedata.Country}`);

      const listInfo2 = document.createElement('ul');
      listInfo.className = 'list-info2';

      const list5 = document.createElement('li');
      list5.className = 'list';
      const duration = document.createTextNode(`Duration: ${moviedata.Runtime}`);

      const list6 = document.createElement('li');
      list6.className = 'list';
      const release = document.createTextNode(`Release: ${moviedata.Released}`);

      const list7 = document.createElement('li');
      list7.className = 'list';
      const language = document.createTextNode(`Language: ${moviedata.Language}`);

      const list8 = document.createElement('li');
      list8.className = 'list';
      const rating = document.createTextNode(`imdbRating: ${moviedata.imdbRating}`);

      list1.appendChild(genre);
      list2.appendChild(actors);
      list3.appendChild(directors);
      list4.appendChild(country);
      list5.appendChild(duration);
      list6.appendChild(release);
      list7.appendChild(language);
      list8.appendChild(rating);

      listInfo.appendChild(list1);
      listInfo.appendChild(list2);
      listInfo.appendChild(list3);
      listInfo.appendChild(list4);
      listInfo2.appendChild(list5);
      listInfo2.appendChild(list6);
      listInfo2.appendChild(list7);
      listInfo2.appendChild(list8);


      otherInfo.appendChild(listInfo);
      otherInfo.appendChild(listInfo2);


      mainContent.appendChild(title);
      mainContent.appendChild(synopsis);
      mainContent.appendChild(otherInfo);

      const display = document.querySelector('.moviesOutputDetails');
      display.appendChild(div);
      display.appendChild(mainContent);
    })
    .catch(() => {
      const error = document.createElement('div');
      error.className = 'error';
      const heading = document.createElement('h1');
      heading.className = 'error-meaasge';
      const message = document.createTextNode('Error finding Movie');
      error.appendChild(heading).appendChild(message);
      const display = document.querySelector('.moviesOutputDetails');
      display.appendChild(error);
    });
};

movieInfo();

const back = document.querySelector('.goback')

const goback = ()=> {
 console.log('hi')
  window.location = 'index.html';
}
back.addEventListener('click', goback)
