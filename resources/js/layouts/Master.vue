<template>
    <div id="app" class="flex flex-col h-screen">
        <Header/>
        <router-view class="flex-1 overflow-y-auto p-5"></router-view>
        <Footer/>
    </div>

</template>

<script>
import Header from "../vue/Header";
import Footer from "../vue/Footer";

export default {
    components: {Footer, Header}
}
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100vh;
    background-color: #F3F5FA;
}


</style>
