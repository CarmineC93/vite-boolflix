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


      getMovies(){

        let apiUrlMovie = this.store.apiMovies;
        let apiUrlTv = this.store.apiTv;

        let urlParams = {}
        if (this.store.userQuery) {
        urlParams.api_Key = this.store.apiKey;
        urlParams.query = this.store.userQuery;
      }

        axios.get(apiUrlMovie, {
          urlParams,
        }).then((resp) => {
          console.log ("ciao")
        })
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
