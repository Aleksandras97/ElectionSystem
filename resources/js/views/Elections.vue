<template>


    <div class="m-2 grid grid-cols-7 gap-4">
        <div class="col-start-3 col-end-6">
            <h1 class="flex justify-center text-6xl font-normal leading-normal mt-0 mb-2 text-gray-800">
                {{ t("elections.elections") }}
            </h1>

            <div class="py-2 sm:mb-0">
                <div class="relative">
                                <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                                        <path
                                            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                        </path>
                                    </svg>
                                </span>
                    <input v-model="state.search" v-bind:placeholder="t('input.search')"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div>

            </div>

            <election-list-view
                :elections="state.elections"
                v-on:reload-elections="getElections()"
            />

        </div>
    </div>

    <div
        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span class="text-xs xs:text-sm text-gray-900">
                            {{ t("pagination.showing") }} {{ pagination.current_page }} {{ t("pagination.of") }} {{ pagination.last_page }} {{ t("pagination.entries") }}
                        </span>
        <div class="inline-flex mt-2 xs:mt-0">
            <button
                class="bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"
                :disabled='!pagination.prev_page_url'
                :class="{'opacity-50': !pagination.prev_page_url }"
                @click="getElections(pagination.prev_page_url)"
            >
                {{ t("pagination.prev") }}
                <font-awesome-icon v-if="state.loading" class="animate-spin" icon="spinner" />
            </button>
            <button
                class="bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"
                :disabled='!pagination.next_page_url'
                :class="{'opacity-50': !pagination.next_page_url }"
                @click="getElections(pagination.next_page_url)"
            >
                {{ t("pagination.next") }}
                <font-awesome-icon v-if="state.loading" class="animate-spin" icon="spinner" />
            </button>

        </div>
    </div>


</template>

<script>
import addElectionForm from "../vue/addElectionForm";
import electionListView from "../vue/electionListView";
import {onMounted, reactive, ref, watchEffect} from "vue";
import { makePagination } from '../composables/makePagination.js';
import { useI18n } from 'vue-i18n'

export default {
    name: "Elections",
    components: {
        addElectionForm,
        electionListView
    },
    setup() {
        const search = ref('')

        const { t, locale } = useI18n({ useScope: 'global' })

        let { paginate, pagination } = makePagination();

        const state = reactive({
            elections:  {},
            loading: true,
        });

        watchEffect(() => {
            if (state.search){
                searchElections(state.search);
            } else {
                getElections();
            }
        })

        async function searchElections(val, page_url) {
            page_url = page_url || 'api/search/elections/'+val
            state.loading = true
            await axios.get(page_url)
                .then(response => {
                    state.elections = response.data.data
                    paginate(response.data)
                })
                .catch(error => console.log(error))
                .finally(() => state.loading = false)

        }

        async function getElections(page_url) {
            page_url = page_url || 'api/elections'
            state.loading = true
            await axios.get(page_url)
                .then(response => {
                    state.elections = response.data.data
                    paginate(response.data)
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => state.loading = false)
        }


        return {
            state,
            getElections,
            pagination,
            t,
            locale
        }
    }
}
</script>
