<template>
<!--    <ElectionCard :election_id="parseInt(electionId)" />-->
    <div class="heading">
        <h2 id="title">Add Candidate</h2>
        <addCandidateForm
            :electionId="electionId"
            v-on:candidate-add="getCandidates(electionId)"
        />
    </div>
        <candidateListView
            :candidates="state.candidates"
            v-on:candidate="state.candidate_id = $event"
        />

    <div class="flex justify-center pb-4">

        <button @click="SubmitVote" class="bg-purple-600 hover:bg-purple-700 text-white font-bold p-4 rounded shadow-lg hover:shadow-xl transition duration-200">
            Submit Vote
            <font-awesome-icon
                icon="check"
            />
        </button>
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

export default {
    components: {
        ElectionCard,
        addCandidateForm,
        candidateListView,
    },
    setup() {
        const state = reactive({
            candidates: [],
            election: null,
            candidate_id: null,
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
            // console.log(electionId.value)
            await axios.get(`api/elections/${electionId}/candidates`)
                .then(response => {
                    state.candidates = response.data.data
                })
                .catch(error => {
                    console.log(error);
                })
        }

        function SubmitVote() {
            if (state.candidate_id == null){
                console.log('candidate is not selected');
            } else {
                console.log('candidate: ', state.candidate_id);
            }

        }



        state.candidates = getCandidates(electionId.value);

        return {
            state,
            getCandidates,
            SubmitVote,
            electionId,
        }
    }
}
</script>

<style scoped>

</style>
