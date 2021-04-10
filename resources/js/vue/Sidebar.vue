<template>

    <aside class="col-span-1 bg-white h-screen">
        <button
            class="flex items-center align-middle py-2 bg-white rounded-3xl text-gray-800 text-sm font-semibold ml-3 border border-gray-200 hover:shadow-xl transition-all w-36 focus:outline-none">
            <svg class="h-8 px-4" viewBox="0 0 36 36">
                <path class="ng-tns-c17-1" d="M16 16v14h4V20z" fill="#34A853"></path>
                <path class="ng-tns-c17-1" d="M30 16H20l-4 4h14z" fill="#4285F4"></path>
                <path class="ng-tns-c17-1" d="M6 16v4h10l4-4z" fill="#FBBC05"></path>
                <path class="ng-tns-c17-1" d="M20 16V6h-4v14z" fill="#EA4335"></path>
                <path class="ng-tns-c17-1" d="M0 0h36v36H0z" fill="none"></path>
            </svg>
            Create
        </button>
        <div class="mt-5">
            <div class="mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
                <button class="text-gray-600 text-sm font-semibold flex items-center  focus:outline-none">
                    <svg class="h-5  px-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <HeaderLink to="/" exact>Home</HeaderLink>
                </button>
            </div>
            <div class="mt-1  mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
                <button class="text-gray-600 text-sm font-semibold flex items-center  focus:outline-none">
                    <svg class="h-6  px-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                    <HeaderLink to="/elections" exact>Elections</HeaderLink>
                </button>

            </div>
            <hr class="my-2"/>
            <div class="mt-1  mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
                <button class="text-gray-600  text-sm font-semibold flex items-center focus:outline-none">
                    <svg class="h-6  px-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                    </svg>
                    Admin
                </button>
            </div>
        </div>
    </aside>
</template>

<script>
import HeaderLink from "./HeaderLink";

export default {
    components: {HeaderLink}
}
</script>

<style scoped>

</style>
