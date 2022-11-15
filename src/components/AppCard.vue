<script>

export default{
    name: "AppCard",
    props: {
        video : Object,
        stars : Number,
        flag : String,
        //mi servono singolarmente per avere lo stesso componente sia per film che per serie
        title: String,
        name: String,
    },
    data(){
        return{
            arrayVote : this.stars
        }
    },
}
</script>

<template>

    <div>

        <div class="pic">
            <img :src="`https://image.tmdb.org/t/p/w342/${video.poster_path}`" alt="poster">
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
                    <span v-for="number in this.arrayVote">
                        <i class="fa fa-star"></i>
                    </span>

                </div>

            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
.flag{
    width: 20px;
}

.stars-space{
    padding: 1rem;
    background-color: aqua;
     position: relative;
    .base-star{
    }

    .full-star{
        position: absolute;
        left: 1rem;
        top: 1rem;
        z-index: 2;
    }


}
</style>