import axios from "axios";

const TMDB_KEY = "c9349dd29b0c396b729d9fc6016daf67";


// now playing, popular, top rated, upcoming, lastest

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY
        }
    })

const getAnything = async (path, params = {}) => {
    try {
        const {
            data: { results },
            data,
        } = await makeRequest(path, params);
        return [results || data,  null]

    } catch (e) {
        return [null, e];
    }
}

export const movieAPI = {
    nowPlaying: () => getAnything("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    toprated: () => getAnything("/movie/top_rated"),
    upcoming: () => getAnything("/movie/upcoming"),
    lastest: () => getAnything("/movie/latest"),
    detail: (id) => getAnything(`/movie/${id}`)

}

export const tvAPI = {
    lastest: () => getAnything("/tv/latest"),
    ontheair: () => getAnything("//tv/on_the_air"),
    popular: () => getAnything("/tv/popular"),
    toprated: () => getAnything("/tv/top_rated"),
    detail: (id) => getAnything(`/tv/${id}`)

}




