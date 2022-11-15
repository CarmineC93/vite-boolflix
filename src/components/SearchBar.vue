<script>
import { store } from "../store";
export default {
    name: "SearchBar",
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <header>
        <div>
            <label for="search">Cerca</label>
            <input type="text" id="search" v-model="store.userQuery">
    
            <button type="submit" @click="$emit('search')" > Cerca </button>
        </div>
    </header>

</template>

<style lang="scss" scoped>

label{
    display: none;
}

</style>