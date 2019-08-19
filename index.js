const button = document.querySelector('.submit');
// create an empty variable to hold user input
let userSearch = '';

const clickSubmit = (e) => {
// get the user input value
  const userinput = document.querySelector('.inputtext');
  userSearch = userinput.value;
  // call the get getMovies function and pass in the userInput value as an argument
  // eslint-disable-next-line no-use-before-define
  getMovies(userSearch);
  // e.preventDefault();
};
// create a function to get movies from an api using axios
// eslint-disable-next-line no-shadow
let getMovies = (userSearch) => {
  // eslint-disable-next-line no-undef
  axios.get(`http://www.omdbapi.com/?s=${userSearch}&apikey=647764b1`)
    .then((response) => {
      // create a variable to hold the search
      const searchedMovies = response.data.Search;
      searchedMovies.forEach((ele) => {
        const div = document.createElement('div');
        div.className = 'movie';

        const image = document.createElement('img');
        image.src = ele.Poster;
        image.alt = ele.Title;

        const title = document.createElement('div');
        title.className = 'movie-title';

        const titleText = document.createElement('h1');
        const movieTitle = ele.Title;
        const textnode = document.createTextNode(movieTitle);
        titleText.appendChild(textnode);
        title.appendChild(titleText);
        // eslint-disable-next-line max-len
        // create button tag to get the movie data id so we can use it for the movie details page when we clicked on it
        const movieLink = document.createElement('button');
        movieLink.className = 'details';

        // eslint-disable-next-line max-len
        // event listener bound to the Movie Detail button and get the imbd value ---> this continues after the moviedetail function which is the event handler for the movielink botton event .

        const moviedetail = () => {
          const imdbID = ele.imdbID.toString();
          // eslint-disable-next-line max-len
          // we store the movie id in local storage so we can be able to access it from another html file
          sessionStorage.setItem('movieId', imdbID);
          window.location = 'movieDetails.html';
          return false;
        };
        // create a get movie function to display the information you want in the new html file

        // eslint-disable-next-line max-len
        // event listener bound to the Movie Detail button to get the imbd value and redirect to another html. the moviedetail function is the one above.
        movieLink.addEventListener('click', moviedetail);
        const buttonText = document.createTextNode('Movie Details');
        movieLink.appendChild(buttonText);


        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(movieLink);
        document.querySelector('.moviesOutput').appendChild(div);
      });
    })
    .catch(() => {
      const error = document.createElement('div');
      error.className = 'error';
      const heading = document.createElement('h1');
      heading.className = 'error-meaasge';
      const message = document.createTextNode('Movie search not found. Please enter a valid search name');
      error.appendChild(heading).appendChild(message);
      const display = document.querySelector('.moviesOutput');
      display.appendChild(message);
    });
};
// add event listener to the button element to listen for a click event
button.addEventListener('click', clickSubmit);
