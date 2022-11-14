<script>

export default{
    name: "AppCard",
    props: {
        video : Object,

        stars : Number,
        //mi servono singolarmente per avere lo stesso componente sia per film che per serie
        title: String,
        name: String,
    },
    data (){

    },
    methods : {
        getLanguageFlag(language){
            let languageFlag = "";

            switch (language) {
                case "it" : 
                this.languageFlag = "../assets/italia.png";
                break;
                case "uk" :
                this.languageFlag = "../assets/inglese.png";
                break;
                case "es" :
                this.languageFlag = "../assets/spagna.png";
                break;
                case "fr" : 
                this.languageFlag = "../assets/francia.png";
                break;
            }
            console.log("works")
            return languageFlag
        }
    }


}
</script>

<template>

    <div>

        <div class="pic">
            <img :src="`https://image.tmdb.org/t/p/w342/${video.poster_path}`" alt="poster">
        </div>
        <div class="text">
            <h5> {{title}}</h5>
            <h5> {{name}}</h5>
            <h6> {{video.original_title}}</h6>
            <img class="flag" :src="`${getLanguageFlag(video.original_language)}`" alt="flag-language">
            <h6> {{stars}}</h6>

        </div>

    </div>

</template>

<style scoped>

.flag{
    width: 20px;
}
</style>