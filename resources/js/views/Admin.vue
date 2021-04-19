<template>
    <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
            <div>
                <h2 class="text-2xl font-semibold leading-tight">Elections</h2>
            </div>
            <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="relative">
                        <select
                            class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative">
                        <select
                            class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                            <option>All</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="block relative">
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
            <AddElectionForm
                v-on:election-add="getElections()"
            />
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                        <tr>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Election
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Date
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Edit
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Delete
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <admin-election-list-view
                                :elections="state.elections"
                                v-on:reload-elections="getElections()"
                            />
                        </tbody>
                    </table>
                    <div
                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span class="text-xs xs:text-sm text-gray-900">
                            Showing {{ state.pagination.current_page }} of {{ state.pagination.last_page }} Entries
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button
                                class="bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"
                                :disabled='!state.pagination.prev_page_url'
                                :class="{'opacity-50': !state.pagination.prev_page_url }"
                                @click="getElections(state.pagination.prev_page_url)"
                            >
                                Prev
                            </button>
                            <button
                                class="bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"
                                :disabled='!state.pagination.next_page_url'
                                :class="{'opacity-50': !state.pagination.next_page_url }"
                                @click="getElections(state.pagination.next_page_url)"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import {onMounted, reactive, ref, watchEffect} from "vue";
import AdminElectionListView from "../vue/adminElectionListView";
import AddElectionForm from "../vue/addElectionForm";

export default {
    components: {AddElectionForm, AdminElectionListView},
    setup: function () {
        const search = ref('')

        const state = reactive({
            elections: {},
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
                .catch(error => console.log(error))
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
            getElections
        }
    }
}
</script>
