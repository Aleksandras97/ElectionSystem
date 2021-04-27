<template>



    <div class="grid grid-cols-1 gap-4 place-items-center mb-10">
        <div>
            <h1 class="flex justify-center text-6xl font-bold leading-normal mt-0 mb-2 text-gray-800">
                {{ state.election?.election_name }}
            </h1>
        </div>
        <div>
            <h1 class="flex justify-center text-4xl font-normal leading-normal mt-0 mb-2 text-gray-500">
                {{ state.election?.election_date }}
            </h1>
        </div>
        <div>
            <template v-if="!state.Voted">
                <template v-if="isSameDay(state.election?.election_date)">
                    <button @click="isModalOpen = true"
                            class="bg-purple-500 hover:bg-purple-400 border-purple-700 hover:border-purple-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded">
                        Submit Vote
                        <font-awesome-icon
                            icon="check"
                        />
                    </button>
                </template>
                <template v-if="!isSameDay(state.election?.election_date)">
                    <template v-if="!isPastDay(state.election?.election_date)">
                        <span
                            class="bg-yellow-200 text-yellow-600 py-2 px-5 rounded-full text-2xl">Coming soon</span>
                    </template>
                    <template v-if="isPastDay(state.election?.election_date)">
                        <span class="bg-red-200 text-red-600 py-2 px-5 rounded-full text-2xl">Election is over</span>

                    </template>
                </template>

            </template>
            <template v-else-if="state.Voted">
                <span class="bg-green-200 text-green-600 py-2 px-5 rounded-full text-2xl">Voted</span>
                <template v-if="isPastDay(state.election?.election_date)">
                    <span class="bg-red-200 text-red-600 py-2 px-5 rounded-full text-2xl">Election is over</span>
                </template>
            </template>
        </div>
    </div>

    <div class="m-2 grid grid-cols-7 gap-4">
        <div class="col-start-1 col-end-5">
            <candidateListView
                :candidates="state.candidates"
                v-on:candidate="state.candidate_id = $event"
            />
            <div
                class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <span class="text-xs xs:text-sm text-gray-900">
                    Showing {{ pagination.current_page }} of {{ pagination.last_page }} Entries
                </span>
                <div class="inline-flex mt-2 xs:mt-0">
                    <button
                        class="bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"
                        :disabled='!pagination.prev_page_url'
                        :class="{'opacity-50': !pagination.prev_page_url }"
                        @click="getCandidates(pagination.prev_page_url)"
                    >
                        Prev
                    </button>
                    <button
                        class="bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"
                        :disabled='!pagination.next_page_url'
                        :class="{'opacity-50': !pagination.next_page_url }"
                        @click="getCandidates(pagination.next_page_url)"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
        <div class="col-start-5 col-end-7">
            <pie-chart v-if="!isSameDay(state.election?.election_date) && isPastDay(state.election?.election_date)"
               :data="state.data"></pie-chart>
        </div>
    </div>







    <Modal v-if="isModalOpen" @close-modal="isModalOpen = false" >
        <template #title>
            Enter password
        </template>
        <template #body>
            <div class="flex justify-center p-2">
                <div class="block">

                    <div class="flex justify-start mb-1 sm:mb-0">
                        <div class="relative">
                            <input type="password" v-model="state.password" placeholder="Password"
                                   class="appearance-none rounded-r sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                        </div>
                    </div>
                    <div class="flex justify-end my-2 sm:mb-0">
                        <div class="relative">
                            <button
                                @click="SubmitVote()"
                                :class="[ state.password ? 'bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500' ]"
                                class=" text-white font-bold py-1 px-4 ml-3 border-b-4 rounded">
                                Submit Vote
                                <font-awesome-icon
                                    icon="check"
                                />
                                <font-awesome-icon v-if="state.loading" class="animate-spin" icon="spinner" />
                            </button>
                            <button @click="isModalOpen = false" class="bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500  text-white font-bold py-1 px-4 ml-3 border-b-4 rounded">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Modal>

</template>

<script>
import addCandidateForm from "../vue/addCandidateForm";
import candidateListView from "../vue/candidateListView";
import Modal from "../vue/Modal";
import {computed, onMounted, reactive, ref, watchEffect} from "vue";
import {useRoute} from "vue-router";
import moment from "moment";
import { makePagination } from '../composables/makePagination';
import { Notification } from '../composables/Notify.js';

export default {
    components: {
        addCandidateForm,
        candidateListView,
        Modal
    },
    setup() {
        const isModalOpen = ref(false)

        let { paginate, pagination } = makePagination();
        let { SendNotification } = Notification();

        const state = reactive({
            candidates: {},
            election: null,
            candidate_id: null,
            Voted: false,
            data: [],
            password: '',
            loading: true,
        });
        const router = useRoute();
        const electionId = computed(() => router.params.electionId)

        onMounted(async () => {
            state.loading = true;
            try {
                const election = axios.get(`api/elections/${electionId.value}`)
                    .then(response => {
                        state.election = response.data
                    })
                    .catch(error => {
                        console.log(error);
                    })



                    await Promise.all([election, getCandidates(), isUserVoted(), getVotingResults(electionId.value)]);

            } catch(error) {
                console.log(error)
            }
        });

        async function getCandidates(page_url) {
            page_url = page_url || `api/elections/${electionId.value}/candidates`

            await axios.get(page_url)
                .then(response => {
                    state.candidates = response.data.data
                    paginate(response.data)
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(()=> state.loading = false)
        }

        async function SubmitVote() {
            if (state.candidate_id == null && state.password === '') {
                console.log('no password or candidate selected');
                return;
            }
            state.loading = true;
            console.log('candidate: ', state.candidate_id);
            await axios.post(`api/elections/${state.election.id}/vote`, {
                candidate_id: state.candidate_id,
                password: state.password,
            })
            .then(response => {
                SendNotification('green', "Successfully submited the vote")
                isUserVoted();
            })
            .catch(error => {
                console.log(error);

            })
            .finally(() => {
                state.loading = false
                isModalOpen.value = false
            })

        }


        async function isUserVoted() {
            state.loading = true;
            await axios.post('api/voted', {
                election_id: electionId.value
            })
                .then(response => {
                    state.Voted = response.data.voted;
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(()=> state.loading = false)
        }

        async function getVotingResults(electionId) {
            await axios.get(`api/results/${electionId}`)
                .then(response => {

                    const chartData = ConvertForChart(response.data);
                    state.data = chartData;
                })
                .catch(error => {
                    console.log(error);
                })
        }

        function ConvertForChart(data) {
            let chartdata = [];
            for (let element in data) {
                let alphaNumOut = [];
                if (data[element].vote_counter === null) {
                    data[element].vote_counter = 0
                }
                alphaNumOut.push([data[element].firstname]);
                alphaNumOut.push([data[element].vote_counter]);
                chartdata.push(alphaNumOut);
            }
            return chartdata;
        }

        function isSameDay(date1) {
            let date = moment().format(date1);
            return moment().diff(date, 'days') === 0
        }

        function isPastDay(date1) {
            let date = moment().format(date1);
            return moment().diff(date, 'days') > 0
        }


        return {
            state,
            getCandidates,
            SubmitVote,
            electionId,
            isUserVoted,
            isSameDay,
            isPastDay,
            isModalOpen,
            pagination,
        }
    }
}
</script>
