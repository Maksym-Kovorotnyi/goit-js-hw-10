import axios from "axios";

const KEY_ANNA_K = '2a9019ab3cb7c560ad73000751e89f97'; // Ключ тім ліда
const BASE_URL = 'https://api.themoviedb.org/3';

// Пошук по назві
export async function getAxiosSearchFilms(query) {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie?api_key=${KEY_ANNA_K}&page=1&language=en-US&query=cat`)
        const data = response.data
        return data
    }
    catch (err){
        console.log(err)
    }
}

export async function getMovieByID(movieId) {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${KEY_ANNA_K}&language=en-US`)
       return response.data
    }
    catch (err) {
        console.log('there is no such ID')
    }
}


