<template>
    <div class="flex justify-start mb-1 sm:mb-0">
        <div class="relative ml-2">
                        <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                </path>
                            </svg>
                        </span>
            <input v-model="state.search" placeholder="Search"
                   class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
        </div>

    </div>

    <div
        class="m-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2x1:grid-cols-6 gap-4">

        <election-list-view
            :elections="state.elections"
            v-on:reload-elections="getElections()"
        />
    </div>
    <div
        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span class="text-xs xs:text-sm text-gray-900">
                            Showing {{ state.pagination.current_page }} of {{ state.pagination.last_page }} Entries
                        </span>
        <div class="inline-flex mt-2 xs:mt-0">
            <button
                class="bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"
                :disabled='!state.pagination.prev_page_url'
                :class="{'opacity-50': !state.pagination.prev_page_url }"
                @click="getElections(state.pagination.prev_page_url)"
            >
                Prev
            </button>
            <button
                class="bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"
                :disabled='!state.pagination.next_page_url'
                :class="{'opacity-50': !state.pagination.next_page_url }"
                @click="getElections(state.pagination.next_page_url)"
            >
                Next
            </button>
        </div>
    </div>


</template>

<script>
import addElectionForm from "../vue/addElectionForm";
import electionListView from "../vue/electionListView";
import {onMounted, reactive, ref, watchEffect} from "vue";

export default {
    name: "Elections",
    components: {
        addElectionForm,
        electionListView
    },
    setup() {
        const search = ref('')

        const state = reactive({
            elections:  {},
            pagination: {},
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

            await axios.get(page_url)
                .then(response => {
                    state.elections = response.data.data
                    makePagination(response.data)
                })
                .catch(error => console.log(error))
                .finally(() => state.loading = false)

        }

        async function getElections(page_url) {
            page_url = page_url || 'api/elections'

            await axios.get(page_url)
                .then(response => {
                    state.elections = response.data.data
                    makePagination(response.data)
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => state.loading = false)
        }

        function makePagination(data) {
            let pagination = {
                current_page: data.meta.current_page,
                last_page: data.meta.last_page,
                prev_page_url: data.links.prev,
                next_page_url: data.links.next,
            }
            state.pagination = pagination
        }




        return {
            state,
            getElections,
        }
    }
}
</script>
