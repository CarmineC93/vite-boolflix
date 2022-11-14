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
    }
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
            <h6> {{stars}}</h6>

        </div>

    </div>

</template>

<style scoped>

.flag{
    width: 20px;
}
</style>