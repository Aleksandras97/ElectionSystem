<template>
<!--    <ElectionCard :election_id="parseInt(electionId)" />-->
    {{ state.election?.election_date }}
    <div class="heading">
        <h2 id="title">Add Candidate</h2>
        <addCandidateForm
            :electionId="electionId"
            v-on:candidate-add="getCandidates(electionId)"
        />
    </div>
    <pie-chart v-if="!isSameDay(state.election?.election_date) && isPastDay(state.election?.election_date)" :data="state.data"></pie-chart>

        <candidateListView
            :candidates="state.candidates"
            v-on:candidate="state.candidate_id = $event"
        />

    <div class="flex justify-center pb-4">

        <template v-if="!state.Voted">
            <template v-if="isSameDay(state.election?.election_date)">
                <button @click="SubmitVote" class="bg-purple-600 hover:bg-purple-700 text-white font-bold p-4 rounded shadow-lg hover:shadow-xl transition duration-200">
                    Submit Vote
                    <font-awesome-icon
                        icon="check"
                    />
                </button>
            </template>
            <template v-if="!isSameDay(state.election?.election_date)">
                <template v-if="!isPastDay(state.election?.election_date)">
                    <span class="bg-yellow-200 text-yellow-600 py-2 px-5 rounded-full text-2xl">Election is coming soon</span>
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
<div>

</div>

</template>

<script>
import addCandidateForm from "../vue/addCandidateForm";
import candidateListView from "../vue/candidateListView";
import {computed, onMounted, reactive, watchEffect} from "vue";
import {useRoute} from "vue-router";
import ElectionCard from "../vue/ElectionCard";
import moment from "moment";

export default {
    components: {
        ElectionCard,
        addCandidateForm,
        candidateListView,
    },
    setup() {
        const state = reactive({
            candidates: Promise,
            election: null,
            candidate_id: null,
            Voted: false,
            data: []
        });
        const router = useRoute();
        const electionId = computed(() => router.params.electionId)

        watchEffect(() => console.log(state.candidate_id))

        onMounted( async () =>{
            await axios.get(`api/elections/${electionId.value}`)
                .then(response => {
                    state.election = response.data
                })
                .catch(error => {
                    console.log(error);
                })
        });

        async function getCandidates(electionId) {
            await axios.get(`api/elections/${electionId}/candidates`)
                .then(response => {
                    state.candidates = response.data.data
                })
                .catch(error => {
                    console.log(error);
                })
        }

        async function SubmitVote() {
            if (state.candidate_id == null){
                console.log('candidate is not selected');
            } else {
                console.log('candidate: ', state.candidate_id);
                await axios.post('api/vote', {
                    candidate_id: state.candidate_id
                })
                .then(response => {
                    console.log('Voted')
                })
                .catch(error => {
                    console.log(error);
                })
            }

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

                const chartData = ConverForChart(response.data);
                state.data = chartData;
            })
            .catch(error => {
                console.log(error);
            })
        }

        function ConverForChart(data){
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

        function isSameDay(date1){
            let date = moment().format(date1);
            return moment().diff(date, 'days') === 0
        }

        function isPastDay(date1){
            let date = moment().format(date1);
            return moment().diff(date, 'days') > 0
        }

        isUserVoted();
        state.candidates = getCandidates(electionId.value);
        getVotingResults(electionId.value);

        return {
            state,
            getCandidates,
            SubmitVote,
            electionId,
            isUserVoted,
            isSameDay,
            isPastDay,
            getVotingResults,
        }
    }
}
</script>
