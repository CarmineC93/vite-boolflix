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


    }
}
</script>

<template>
    <div class="movies">
        <h2>Movies</h2>
        <div v-for="(movie, index) in store.movies" :key="index">
            <AppCard :video="movie" :title="movie.title" :stars="getValueStars(movie.vote_average)" />
        </div>
    </div>  

    <div class="tv-show">
        <h2>Tv Shows</h2>
        <div v-for="(show, index) in store.tvShow" :key="index">
          <AppCard :video="show" :name="show.name" :stars="getValueStars(show.vote_average)" />
        </div>  
    </div>

</template>

<style scoped>
    div{
        background-color: cadetblue;
    }
</style>