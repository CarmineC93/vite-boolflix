<script>
import AppCard from './AppCard.vue'


export default{
    name: "AppGrid",
    components:{
        AppCard,
    }

}
</script>

<template>
    <div>
        <AppCard/>
    </div>

</template>

<style scoped>
    div{
        width: 500px;
        height: 500px;
        background-color: cadetblue;
    }
</style>