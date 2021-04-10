<template>
<!--    <ElectionCard :election_id="parseInt(electionId)" />-->
    <div class="candidate-container">
        <div class="heading">
            <h2 id="title">Candidates</h2>
            <addCandidateForm />
        </div>
        <div class="list-view">
            <candidateListView
                :candidates="state.candidates"
            />
        </div>
    </div>

</template>

<script>
import addCandidateForm from "../vue/addCandidateForm";
import candidateListView from "../vue/candidateListView";
import {computed, reactive} from "vue";
import {useRoute} from "vue-router";
import ElectionCard from "../vue/ElectionCard";
export default {
    components: {
        ElectionCard,
        addCandidateForm,
        candidateListView
    },
    setup() {
        const state = reactive({
            candidates: [],
        });
        const router = useRoute();
        const electionId = computed(() => router.params.electionId)


        function getCandidates(electionId) {
            axios.get(`api/elections/${electionId}/candidates`)
                .then(response => {
                    state.candidates = response.data.data
                })
                .catch(error => {
                    console.log(error);
                })
        }

        state.candidates = getCandidates(electionId.value);


        return {
            state,
            getCandidates,
            electionId
        }
    }
}
</script>

<style scoped>
.candidate-container {
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: auto;
}

.heading {
    background: #93C5FD;
    border: 2px solid #2d3748;
    border-radius: 5px;
    padding: 10px;

}


#title {
    text-align: center;
}
</style>
