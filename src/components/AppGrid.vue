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
            return Math.round(voteAverage / 2);
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
                case "en" :
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
            return languageFlag
        }
    }
}
</script>

<template>
    <h2>MOVIES</h2>
    <hr>
    <div class="movies grid">
        <div class="col" v-for="(movie) in store.movies" :key="store.movies.id">
            <AppCard :video="movie" :title="movie.title" :stars="getValueStars(movie.vote_average)"
            :flag="getImageUrl(getLanguageFlag(`${movie.original_language}`))" />
        </div>
    </div>  

    <h2>TV SHOWS</h2>
    <hr>
    <div class="tv-show grid">
        <div class="col" v-for="(show) in store.tvShow" :key="store.tvShow.id">
          <AppCard :video="show" :name="show.name" :stars="getValueStars(show.vote_average)"
          :flag="getImageUrl(getLanguageFlag(`${show.original_language}`))"  />
        </div>  
    </div>

</template>

<style lang="scss" scoped>
    h2{
        color: white;
        margin-left: 3rem;
        margin-top: 2rem
    }

    hr{
        margin: 0 auto;
        width: 95%;
    }
        .grid{
        margin:1rem 2rem;
        display: flex;
        gap: 0.7rem;
        flex-wrap: wrap; //togliendo il wrap si potrebbe impostare una galleria a scorrimento con hoverflow
        justify-content: space-around;

        .col{
            // width: calc(100% / 6 - 0.7rem); //è più responsive senza una width precisa
            height: 100%;
        }
    }
</style>