<template>
    <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
            <div>
                <h2 class="text-2xl font-semibold leading-tight">{{ t("admin_candidate.candidates") }}</h2>
            </div>
            <div class="my-2 flex sm:flex-row flex-col">

                <div class="block relative">
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
            <AddCandidateForm
                v-on:candidate-add="getCandidates()"
            />
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                        <tr>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                {{ t("admin_candidate.candidate") }}
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                {{ t("admin_candidate.last_name") }}
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                {{ t("buttons.edit") }}
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                {{ t("buttons.delete") }}
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <admin-candidate-list-view
                            :candidates="state.candidates"
                            v-on:reload-candidates="getCandidates()"
                        />
                        </tbody>
                    </table>
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
                                @click="getCandidates(pagination.prev_page_url)"
                            >
                                {{ t("pagination.prev") }}
                                <font-awesome-icon v-if="state.loading" class="animate-spin" icon="spinner" />
                            </button>
                            <button
                                class="bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"
                                :disabled='!pagination.next_page_url'
                                :class="{'opacity-50': !pagination.next_page_url }"
                                @click="getCandidates(pagination.next_page_url)"
                            >
                                {{ t("pagination.next") }}
                                <font-awesome-icon v-if="state.loading" class="animate-spin" icon="spinner" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminCandidateListView from "../vue/adminCandidateListView";
import {computed, onMounted, reactive, ref, watchEffect} from "vue";
import {useRoute} from "vue-router";
import AddCandidateForm from "../vue/addCandidateForm";
import { makePagination } from '../composables/makePagination.js';
import { useI18n } from 'vue-i18n'

export default {
    components: {AddCandidateForm, AdminCandidateListView},
    setup() {
        const search = ref('')

        const { t } = useI18n()

        let { paginate, pagination } = makePagination();

        const state = reactive({
            candidates: {},
            election: null,
            candidate_id: null,
            pagination: {},
            loading: true,
        });
        const router = useRoute();
        // const electionId = computed(() => router.params.electionId)

        onMounted( async () =>{
            await axios.get(`api/elections`)
                .then(response => {
                    state.election = response.data
                })
                .catch(error => {
                    console.log(error);
                })
        });

        watchEffect(() => {
            if (state.search){
                searchCandidates(state.search);
            } else {
                getCandidates();
            }
        })

        async function searchCandidates(val, page_url) {
            page_url = page_url || 'api/search/candidates/'+val

            await axios.get(page_url)
                .then(response => {
                    state.candidates = response.data.data
                    paginate(response.data)
                })
                .catch(error => console.log(error))
                .finally(() => state.loading = false)

        }

        async function getCandidates(page_url) {
            state.loading = true;
            page_url = page_url || 'api/candidates'
            await axios.get(page_url)
                .then(response => {
                    state.candidates = response.data.data
                    paginate(response.data)
                })
                .catch(error => console.log(error))
                .finally(()=> state.loading = false)
        }



        return {
            state,
            getCandidates,
            pagination,
            t
        }
    }
}
</script>
