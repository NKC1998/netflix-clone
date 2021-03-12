const API_KEY = "0b7dfdc862d2a8d5fd734c29283a9c67";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=us`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_generes=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_generes=18749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_generes=99`,
}

export default requests;