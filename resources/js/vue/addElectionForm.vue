<template>
    <div class="flex justify-start mb-1 sm:mb-0">
        <div class="relative">
            <input type="text" v-model="state.election.election_name" placeholder="Election Name"
                   class="appearance-none rounded-r sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
        </div>
        <div class="relative">
            <input type="date" v-model="state.election.election_date" placeholder="Election Date"
                   class="appearance-none rounded-r sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />

        </div>
        <div class="relative">
            <button
                @click="addElection()"
                :class="[ state.election.election_name ? 'bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500' ]"
                class=" text-white font-bold py-1 px-4 ml-3 border-b-4 rounded">
                Add
            </button>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
export default {
    emits: {
        'election-add': null,
    },
    setup(_,{emit}){
        const state = reactive({
           election: {
               election_name: "",
               election_date: "",
           }
        });

        function addElection() {
            if (state.election.election_name === "" || state.election.election_date === ""){
                return;
            }

            axios.post('api/elections', {
                election_name: state.election.election_name,
                election_date: state.election.election_date
            })
            .then( response => {
                if ( response.status === 201) {
                    state.election.election_name = "";
                    emit('election-add');
                }
            })
            .catch( error => {
                console.log(error);
            })
        }

        return  {
            state,
            addElection
        }
    }
}

</script>
