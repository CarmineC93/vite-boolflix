<script>
import axios from "axios";
import { store } from "./store";

import SearchBar from './components/SearchBar.vue'
import AppGrid from './components/AppGrid.vue'

export default {
  components: {
      SearchBar, 
      AppGrid,

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

        console.log(store.userQuery) 
        let apiUrlMovie = this.store.apiMovies;
        let apiUrlTv = this.store.apiTv;

        let urlParams = {}
        urlParams.api_key = this.store.apiKey;
        if (this.store.userQuery){
            urlParams.query = this.store.userQuery;
            
            axios.get(apiUrlMovie, {
              params : urlParams,
            }).then((resp) => { 
              store.movies = resp.data.results;
              console.log(resp.data.results)
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
    <AppGrid/>
  </div>
</template>

<style>

</style>
