<script>
import AppCard from './AppCard.vue'
import { store } from "../store";


export default{
    name: "AppGrid",
    components:{
        AppCard,
    },
    data(){
        return{
            store,
        }
    },
    methods:{
        getValueStars(voteAverage){
            return Math.floor(voteAverage / 2);
        },

        getImageUrl(imagePath){
            return new URL(imagePath, import.meta.url).href;
        },

        getLanguageFlag(language){
            let languageFlag = ""

            switch (language) {

                case "it" : 
                languageFlag = "../assets/italia.png";
                break;
                case "uk" :
                languageFlag = "../assets/inglese.png";
                break;
                case "es" :
                languageFlag = "../assets/spagna.png";
                break;
                case "fr" : 
                languageFlag = "../assets/francia.png";
                break;
                default:
                languageFlag = "../assets/mondo.jpg";
            }

            console.log(languageFlag)
            return languageFlag
        }


    }
}
</script>

<template>
    <h2>MOVIES</h2>
    <div class="movies grid">
        <div v-for="(movie) in store.movies" :key="store.movies.id">
            <AppCard :video="movie" :title="movie.title" :stars="getValueStars(movie.vote_average)"
            :flag="getImageUrl(getLanguageFlag(`${movie.original_language}`))" />
        </div>
    </div>  

    <h2>TV SHOWS</h2>
    <div class="tv-show grid">
        <div v-for="(show) in store.tvShow" :key="store.tvShow.id">
          <AppCard :video="show" :name="show.name" :stars="getValueStars(show.vote_average)"
          :flag="getImageUrl(getLanguageFlag(`${show.original_language}`))"  />
        </div>  
    </div>

</template>

<style scoped>
    .grid{
        display: flex;
        /* debug */
        flex-wrap: wrap;
        background-color: cadetblue;

    }
</style>