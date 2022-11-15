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

        <div class="logo">
            <img src="../assets/logo.png" alt="logo">
        </div>

        <div class="searchbar">
            <label for="search">Cerca</label>
            <input type="text" id="search" v-model="store.userQuery" placeholder="Inserisci il titolo di un film o serie">
    
            <button type="submit" @click="$emit('search')"> 
                <i class="fa-solid fa-magnifying-glass"></i> 
            </button>
        </div>
    
    </header>

</template>

<style lang="scss" scoped>
header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    background-color: black;

    .searchbar{
        display: flex;
        width: 50%;
    }

    label{
        display: none;
    }

    input{
        width: 100%;
        padding: 0.5rem;
    }

    button{
        padding: 0.5rem;
        color: red;
    }

    button:hover{
        color: rgb(175, 68, 68);
        box-shadow: inset ;
    }
}


</style>