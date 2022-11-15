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
      searchAll(){
        this.store.loading = true;

        console.log(store.userQuery) 

        let apiUrlMovie = this.store.apiMovies;
        let apiUrlTv = this.store.apiTvShow;

        //creo un oggetto vuoto le cui proprietà saranno i parametri dell'API
        let urlParams = {}
        //prima proprietà inserita nell'oggetto (parametro richiesto)
        urlParams.api_key = this.store.apiKey;
        //La chiamata parte se l'utente sta cercando qualcosa 
        if (this.store.userQuery){
            urlParams.query = this.store.userQuery;
            //domanda film
            axios.get(apiUrlMovie, {
              params : urlParams,
            }).then((resp) => { 
              store.movies = resp.data.results;
              console.log(resp.data.results)

            }).finally(() => {
              this.store.loading = false;
            })
            
            //più corretto non mettere in coda la seconda chiamata (serie) con un axios anninato, soprattutto se non è dipendente dalla prima chiamata (movie) meglio farlo in un axios indipendente dal primo con due metodi separati
            //domanda serie
            axios.get(apiUrlTv, {
                params : urlParams,
              }).then((resp) => {
                store.tvShow = resp.data.results;
                console.log(resp.data.results)
              }).finally(() => {
              //dopo le chiamate e le risposte, reinposto che il caricamento è finito
              this.store.loading = false;
              })  
        }
      }
    }
  }
</script>

<template>
  <div class="wrapper">

    <div class="container">
      <SearchBar @search="searchAll"/>  
    </div>
      <AppLoader v-if="store.loading" />
      <AppGrid v-else />

  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

.wrapper{
  background-image: linear-gradient(to left, rgb(136, 131, 131),rgb(36, 29, 29),rgba(76, 6, 6, 0.977), rgb(36, 29, 29),rgb(136, 131, 131));
  width: 100%;
  height: 100vh;
  overflow-y: auto;
}
</style>
