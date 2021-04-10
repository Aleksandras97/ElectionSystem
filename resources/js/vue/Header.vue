<template>
    <header class="bg-white shadow-sm w-full fixed z-10  top-0">
        <div class="max-auto px-8 py-2 bg-white">
            <div class="flex justify-between">
                <div class="logo flex items-center space-x-4 mr-10">
                    <font-awesome-icon class="h-8 text-blue-400" icon="person-booth"/>
                    <h1 class="text-gray-600 text-2xl">Election System</h1>
                </div>
                <div class="menu flex justify-end items-center flex-1 space-x-4">
                    <h1 class="text-gray-600 text-2xl">Username</h1>
                </div>
            </div>
        </div>
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
