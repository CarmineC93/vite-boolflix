<script>
import { store } from "../store";


export default{
    name: "AppCard",
    props: {
        video : Object,
        //come usare solo l'object in template e trasferire poi in componente genitore?
        stars : Number,
        flag : String,
        title: String,
        name: String,
    },
    data(){
        return{
            store,
        }
    },
}
</script>

<template>

    <div class="card">

        <div class="pic">
            <img v-if="video.poster_path" :src="`https://image.tmdb.org/t/p/w342/${video.poster_path}`" alt="poster">
            
            <img v-else class="coverNotFound" scr="/noCover.png">
        </div>

        <div class="text">
            <h5 v-if="video.title"> {{title}}</h5>
            <h5 v-else> {{name}}</h5>
            <h6> {{video.original_title}}</h6>
            <img class="flag" :src="flag" :alt="video.original_language">
            <h6>{{video.original_language}}</h6>
            <h6> {{stars}} </h6>
            <div class="stars-space">
                <span class="base-star" v-for="number in 5">
                    <i class="fa-regular fa-star"></i>
                </span>
                <div class="full-star">
                    <span v-for="number in this.stars">
                        <i class="fa fa-star"></i>
                    </span>
                </div>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
.card{



    .pic{
        width: 200px;

        .coverNotFound{
            width: 200px;
            height: 100px;
        }
    }
    .flag{
        width: 20px;
    }
    .stars-space{
        padding: 1rem;
        background-color: aqua;
         position: relative;
        .full-star{
            position: absolute;
            left: 1rem;
            top: 1rem;
            z-index: 2;
        }
    }
}

</style>