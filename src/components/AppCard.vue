<script>
import { store } from "../store";

export default{
    name: "AppCard",
    data() {
        return {
            store,
        }
    },
    
}
</script>

<template>

    <div>
        <div v-for="movie in this.store.movies">
            <img src="" alt="">
        </div>
        <div>
            <h5>titolo</h5>
            <h5>titolo originale</h5>
            <h6>lingua</h6> 
            <h6>voto</h6>
        </div>

    </div>

</template>

<style scoped>
</style>