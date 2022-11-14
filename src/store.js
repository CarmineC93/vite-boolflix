import {reactive} from "vue";

export const store = reactive({
    movies : [],
    tvShow : [],
    apiMovies: "https://api.themoviedb.org/3/search/movie",
    apiTvShow: "https://api.themoviedb.org/3/search/tv",
    apiKey: "eb8ebeb4acaae5bdd0b372266cd60d78",
    userQuery: "",
    loading: false,
  });