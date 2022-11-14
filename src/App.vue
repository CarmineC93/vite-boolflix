<script>
import axios from "axios";
import { store } from "./store";

import SearchBar from './components/SearchBar.vue'
import AppGrid from './components/AppGrid.vue'
import AppLoader from './components/AppLoader.vue'


export default {
  components: {
      SearchBar, 
      AppGrid,
      AppLoader,

    },
    data(){
      return{
        store,

      }
    },
    methods : {


//con questa funzione si riempiono gli array di film / tv che verranno mostrati in pagina tramite v-for nelle card 
//con la funzione la query di ricerca dell'utente verrà aggiunta alla query dell'api 
// in questo modo la resp verrà assegnata all'array (film e tv)
    

      getMovies(){
        this.store.loading = true;

        console.log(store.userQuery) 
        let apiUrlMovie = this.store.apiMovies;
        let apiUrlTv = this.store.apiTvShow;

        let urlParams = {}
        urlParams.api_key = this.store.apiKey;
        if (this.store.userQuery){
            urlParams.query = this.store.userQuery;
            
            axios.get(apiUrlMovie, {
              params : urlParams,
            }).then((resp) => { 
              store.movies = resp.data.results;
              console.log(resp.data.results)

              axios.get(apiUrlTv, {
              params : urlParams,
            }).then((resp) => {
              store.tvShow = resp.data.results;
              console.log(resp.data.results)
            }).finally(() => {
              this.store.loading = false;
            })
          })
        }
      }
    },
    created(){

    }
  }
</script>

<template>
  <div class="container">
    <SearchBar @search="getMovies"/>  
  </div>
  <div class="container">
    <AppLoader v-if="store.loading" />
    <AppGrid v-else />
  </div>
</template>

<style>

</style>
