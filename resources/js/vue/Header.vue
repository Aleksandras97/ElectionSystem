<template>
    <header class="py-5 bg-gray-700 text-white text-center">
        <nav class="flex justify-between py-5 px-1.5 text-6xl">
            <div class="flex ">
                <div class="font-bold border-2 border-white p-2">Election System</div>
                <div class="flex font-bold">
                    <HeaderLink to="/" exact>Home</HeaderLink>
                    <HeaderLink to="/elections" exact>Elections</HeaderLink>
                </div>
            </div>

            <div class="navigation__user">
                Username
            </div>
        </nav>


    </header>

</template>

<script>
import HeaderLink from "./HeaderLink";
export default {
    components: {HeaderLink}
}
</script>

<style scoped>

</style>
