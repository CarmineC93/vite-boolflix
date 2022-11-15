import {reactive} from "vue";

export const store = reactive({
    movies : [], //qui andranno i film e le serie risultanti dalla ricerca, non tramite push ma tramite assegnazione
    tvShow : [], 
    apiMovies: "https://api.themoviedb.org/3/search/movie",
    apiTvShow: "https://api.themoviedb.org/3/search/tv",
    apiKey: "eb8ebeb4acaae5bdd0b372266cd60d78",
    userQuery: "",
    loading: false,
  });