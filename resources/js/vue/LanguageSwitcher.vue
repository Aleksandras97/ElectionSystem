<template>
    <div class="relative">
        <button
            href="#"
            class="flex items-center"
            @click="toggleVisibility"
        >
            <span class="ml-2">{{ locale.toUpperCase() }}</span>
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
        </button>
        <ul v-if="state.isVisible" class="absolute normal-case font-normal xs:left-0 lg:right-0  bg-white shadow overflow-hidden rounded w-48 border my-2 py-1 lg:z-20">
            <li>
                <a href="#" @click.prevent="setLocale('en')">
                    <span class="ml-2">English</span>
                </a>
            </li>
            <li>
                <a href="#" @click.prevent="setLocale('lt')">

                <span class="ml-2">Lithuanian</span>
                </a>
            </li>
        </ul>

    </div>
</template>

<script>
import { reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

export default ({
    setup() {

        const { locale } = useI18n({ useScope: 'global' })

        const state = reactive({
            isVisible:  false,
            loading: true,
        });

        const router = useRouter();

        function toggleVisibility() {
            state.isVisible = !state.isVisible
        }

        function setLocale(loc) {
            locale.value = loc;
            state.isVisible = !state.isVisible
             router.push({ params: { lang: loc }});
        }

        return {
            state,
            toggleVisibility,
            setLocale,
            locale
        }
    },
})
</script>


