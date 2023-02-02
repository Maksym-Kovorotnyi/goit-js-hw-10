import { getAxiosSearchFilms } from './fetchCountries'
import { getMovieByID} from './fetchCountries'
const form = document.querySelector('.form-search')
const main = document.querySelector('.main')
const modal = document.querySelector('.modal')


form.addEventListener('submit', getQueryValue)

function getQueryValue(e) {
    e.preventDefault()
    const query = e.target.elements.input.value;
    getAxiosSearchFilms(query).then(movies => {
        main.insertAdjacentHTML('afterbegin', moviesCards(movies.results))
    })

}

main.addEventListener('click', onMovieCardClick)

function onMovieCardClick(e) {
    getMovieByID(e.target.alt).then(movie => {
        modal.innerHTML = ''
        modal.insertAdjacentHTML('afterbegin', modalMurkup(movie))
    })
    
}

function moviesCards(movies) {
    return  movies.map(movie => {
        return `
            <div> 
             <img src = ${movie.poster_path} alt=${movie.id}>
             <p>${movie.original_title}</p>
             </div>
             
             `
       }).join('');
}



function modalMurkup(movie) {   
    let genresName = movie.genres.map(ganre => ganre.name).join(', ')
    
   return `
  <img src="${movie.poster_path}" alt="" /></a>
  <h2>${movie.original_title}</h2>
  <p>Vote / Votes ${movie.vote_average}/${movie.vote_count}</p>
  <p>Popularity ${movie.popularity}</p>
  <p>Original Title ${movie.original_title} </p>
  <p>Genre ${genresName}</p>
  <h3>About </h3>
  <p>${movie.overview}</p>
  <button type="button">add to Watched</button>
  <button type="button">add to queue</button>
` 
}


    





