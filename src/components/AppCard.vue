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
    methods:{
        getValueStars(voteAverage){
            return Math.round(voteAverage / 2);
        },
    }
}
</script>

<template>

    <div class="card">
        <div class="inner-card">
            <!-- poster -->
            <div class="pic">
                <img v-if="video.poster_path" :src="`https://image.tmdb.org/t/p/w342/${video.poster_path}`" alt="poster">
                
                <img v-else class="coverNotFound" src="../../public/noCover.png">
            </div>
    
            <!-- text -->
            <div class="text">
                <h4 v-if="video.title"> Titolo: {{title}}</h4>
                <h4 v-else> Titolo: {{name}}</h4>
                <h5 class="title"> Titolo originale: {{video.original_title}}</h5>
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
    
                <!-- metodo di Olga su come inserire in pagina le Stelle del voto
                <i v-for="number in 5" :key="number" :class="number <= getValueStars(this.stars) ? 'fa-solid : 'fa-regular' "  class="fa-star"></i>
                -->
    
                <h5 class="overview">{{video.overview}}</h5>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card{
    position: relative;

 .inner-card{
        //  proprietà per flippare
        transform-style: preserve-3d;
        transition: transform, 0.8s;

     .text{
         position: absolute;
         top: 0;
         left: 0;

        //  proprietà per flippare
        backface-visibility: hidden;
        transform: rotateY(180deg);
        //  display: none;
        
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
             overflow-y: scroll;
         }

         > *{
            margin-bottom: 0.5rem;
         }
 
 
     }
 
     .pic{
         width: 200px;
         height: 100%;

        //  proprietà per flippare
        backface-visibility: hidden;

         .img{
             width: 100%;
         }
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
}

//  proprietà per flippare
.card:hover .inner-card{
        transform: rotateY(180deg);
        perspective: 1000px;
}

// .card:hover .text{
//     display: flex;
// }

</style>