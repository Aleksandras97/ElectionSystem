<template>
    <div id="app" class="flex flex-col h-screen">
        <Header/>
        <div class="bg-white h-screen">
            <div class="grid grid-cols-8 mt-20">
            <div class="col-span-8 bg-white">
                <div class="bg-white">
                    <router-view></router-view>
                </div>
            </div>

        </div>
        </div>

        <NotificationList />
        <Footer/>
    </div>

</template>

<script>
import Header from "../vue/Header";
import Footer from "../vue/Footer";
import Sidebar from "../vue/Sidebar";
import NotificationList from "../vue/NotificationList";

export default {
    components: {NotificationList, Sidebar, Footer, Header}
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
