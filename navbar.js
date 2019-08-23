//so we have to style the nav bar home, genre, etc so that when we hover on it, it displays a list of items
const home = document.querySelector('#home')
const genre = document.querySelector('#genre').firstElementChild

const country = document.querySelector('#country').firstElementChild
const tvseries = document.querySelector('#tvseries')
const movies = document.querySelector('#movies').firstElementChild
const topimdb = document.querySelector('#topimdb').firstElementChild

//Genre
const genreUl = document.querySelector('.genreUl')
const navGenre = () => {
    // genreUl.style.display = 'flex'
}

genre.addEventListener('mouseover', navGenre)

// Country
const navCountry = () => {
    // confirm('hello')
}
country.addEventListener('mouseover', navCountry)

document.querySelector('#input').addEventListener('click',_=>{
    document.querySelector('.nav-bar').classList.toggle('-open-');}); 



// function inputClicked() {
//     if (document.getElementById('nav').style.display === 'block'){
//       console.log('yes')
//     }else{
//         console.log('no')
//     }

//     // remove property 
//     // else add rhe property
// }


// if (property is there)
// remove property 
// else add rhe property