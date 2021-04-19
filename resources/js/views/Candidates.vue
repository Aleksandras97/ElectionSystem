<template>
    {{ state.election?.election_date }}
    <pie-chart v-if="!isSameDay(state.election?.election_date) && isPastDay(state.election?.election_date)"
               :data="state.data"></pie-chart>

    <candidateListView
        :candidates="state.candidates"
        v-on:candidate="state.candidate_id = $event"
    />
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
                @click="getCandidates(state.pagination.prev_page_url)"
            >
                Prev
            </button>
            <button
                class="bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"
                :disabled='!state.pagination.next_page_url'
                :class="{'opacity-50': !state.pagination.next_page_url }"
                @click="getCandidates(state.pagination.next_page_url)"
            >
                Next
            </button>
        </div>
    </div>

    <div class="flex justify-center pb-4">

        <template v-if="!state.Voted">
            <template v-if="isSameDay(state.election?.election_date)">
                <button @click="isModalOpen = true"
                        class="bg-purple-500 hover:bg-purple-400 border-purple-700 hover:border-purple-500' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded">
                    Submit Vote
                    <font-awesome-icon
                        icon="check"
                    />
                </button>
            </template>
            <template v-if="!isSameDay(state.election?.election_date)">
                <template v-if="!isPastDay(state.election?.election_date)">
                    <span
                        class="bg-yellow-200 text-yellow-600 py-2 px-5 rounded-full text-2xl">Election is coming soon</span>
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

export default {
    components: {
        addCandidateForm,
        candidateListView,
        Modal
    },
    setup() {
        const isModalOpen = ref(false)

        const state = reactive({
            candidates: {},
            election: null,
            candidate_id: null,
            Voted: false,
            data: [],
            password: '',
            pagination: {},
            loading: true,
        });
        const router = useRoute();
        const electionId = computed(() => router.params.electionId)

        onMounted(async () => {
            await axios.get(`api/elections/${electionId.value}`)
                .then(response => {
                    state.election = response.data
                })
                .catch(error => {
                    console.log(error);
                })
        });

        async function getCandidates(page_url) {
            page_url = page_url || `api/elections/${electionId.value}/candidates`

            await axios.get(page_url)
                .then(response => {
                    state.candidates = response.data.data
                    makePagination(response.data)
                })
                .catch(error => {
                    console.log(error);
                })
        }

        function makePagination(data){
            let pagination = {
                current_page: data.meta.current_page,
                last_page: data.meta.last_page,
                prev_page_url: data.links.prev,
                next_page_url: data.links.next,
            }
            state.pagination = pagination
        }

        async function SubmitVote() {
            if (state.candidate_id == null && state.password) {
                console.log('no password or candidate selected');
                return;
            }
            console.log('candidate: ', state.candidate_id);
            await axios.post('api/vote', {
                candidate_id: state.candidate_id,
                password: state.password,
            })
            .then(response => {
                console.log('Voted')
                isModalOpen.value = false
                isUserVoted();
            })
            .catch(error => {
                console.log(error);
                isModalOpen.value = false
            })

        }


        async function isUserVoted() {
            await axios.post('api/voted', {
                election_id: electionId.value
            })
                .then(response => {
                    state.Voted = response.data.voted;
                })
                .catch(error => {
                    console.log(error);
                })
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
                if (data[element].votecnt === null) {
                    data[element].votecnt = 0
                }
                alphaNumOut.push([data[element].firstname]);
                alphaNumOut.push([data[element].votecnt]);
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




        state.candidates = getCandidates();
        isUserVoted();
        getVotingResults(electionId.value);

        return {
            state,
            getCandidates,
            SubmitVote,
            electionId,
            isUserVoted,
            isSameDay,
            isPastDay,
            isModalOpen,
        }
    }
}
</script>
