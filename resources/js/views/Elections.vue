<template>
    <!--    <div class="electionListContainer">-->
    <!--        <div class="heading">-->
    <!--            <h2 id="title">Elections</h2>-->
    <!--            <addElectionForm-->
    <!--                v-on:election-add="getElections()"-->
    <!--            />-->
    <!--        </div>-->

    <!--    </div>-->

    <!-- Main Page -->

            <div
                class="m-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2x1:grid-cols-6 gap-4">

                <electionListView
                    :elections="state.elections"
                    v-on:reload-elections="getElections()"
                />
            </div>



</template>

<script>
import addElectionForm from "../vue/addElectionForm";
import electionListView from "../vue/electionListView";
import {reactive} from "vue";

export default {
    name: "Elections",
    components: {
        addElectionForm,
        electionListView
    },
    setup() {
        const state = reactive({
            elections: getElections(),
        });

        function getElections() {
            axios.get('api/elections')
                .then(response => {
                    state.elections = response.data.data
                })
                .catch(error => {
                    console.log(error);
                })
        }


        return {
            state,
            getElections,
        }
    }
}
</script>

<style scoped>
.electionListContainer {
    width: 350px;
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
