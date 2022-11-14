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

    <div>
        <label for="search">Cerca</label>
        <input type="text" id="search" v:model="store.userQuery">

        <button type="submit" @click="$emit('search')" > Cerca </button>
    </div>

</template>

<style scoped>
</style>