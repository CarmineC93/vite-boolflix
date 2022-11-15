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
            
            <img v-else class="coverNotFound" src="../../public/noCover.png">
        </div>

        <div class="text">
            <h4 v-if="video.title"> Titolo: {{title}}</h4>
            <h4 v-else> Titolo: {{name}}</h4>
            <h4 class="title"> Titolo originale: {{video.original_title}}</h4>
            <img class="flag" :src="flag" :alt="video.original_language">
            <h4>Media Voto: {{stars}}/5</h4> 
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

            <h5 class="overview">{{video.overview}}</h5>

        </div>

    </div>

</template>

<style lang="scss" scoped>
.card{
    position: relative;


    .text{
        position: absolute;
        top: 0;
        left: 0;

        display: none;
        flex-direction: column;
        gap: 1rem;
        text-align: start;
        background-color: rgba(13, 13, 12, 0.83);
        color: white;
        width: 200px;
        height: 100%;
        padding: 1rem;
        overflow-y: hidden;

        .overview{
            overflow-y: scroll
        }


    }

    .pic{
        width: 200px;
        height: 100%;

        .coverNotFound{
            width: 200px;
            height: 300px;
        }
    }

    .flag{
        width: 40px;
    }

    .stars-space{
         position: relative;

        .full-star{
            position: absolute;
            bottom: 1rem;
            top: 0rem;
            text-align: center;
            z-index: 2;

        }
    }
}

.card:hover .text{
    display: flex;
}

</style>