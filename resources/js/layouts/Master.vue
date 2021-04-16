<template>
    <div id="app" class="flex flex-col h-screen">
        <Header/>
        <div class="grid grid-cols-8 mt-20">
            <aside class="col-span-3 sm:col-span-2 xl:col-span-1 bg-green-200 ">
                <Sidebar/>
            </aside>
            <div class="col-span-5 sm:col-span-6 xl:col-span-7 bg-white">
                <div class="bg-white">
                    <router-view></router-view>
                </div>
            </div>

        </div>
        <!--        <Footer/>-->
    </div>

</template>

<script>
import Header from "../vue/Header";
import Footer from "../vue/Footer";
import SIdebar from "../vue/Sidebar";
import Sidebar from "../vue/Sidebar";

export default {
    components: {Sidebar, Footer, Header}
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
