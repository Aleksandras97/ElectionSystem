<template>
    <div class="flex justify-start mb-1 sm:mb-0">
        <div class="relative ">
            <div v-if="state.errors && state.errors.election_name " class="mb-2 mr-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded">{{ state.errors.election_name[0] }}</div>
            <div class="mb-6 mr-2 pt-3 rounded bg-gray-200">
                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="election_name">Name</label>
                <input type="text" name="election_name" id="election_name" v-model="state.election.election_name" placeholder="Election Name"
                       class="login-input" />

            </div>
        </div>
        <div class="relative ">
            <div v-if="state.errors && state.errors.election_date " class="mb-2 mr-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded">{{ state.errors.election_date[0] }}</div>
            <div class="mb-6 mr-2 pt-3 rounded bg-gray-200">

                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="election_date">Date</label>
                <input type="date" id="election_date" v-model="state.election.election_date" placeholder="Election Date"
                       class="login-input" />
            </div>
        </div>
        <div class="relative">
            <button
                @click="addElection()"
                :class="[ state.election.election_name ? 'bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500' ]"
                class=" text-white font-bold py-1 px-4 ml-3 border-b-4 rounded">
                Add
                <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                    <!-- ... -->
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import {useStore} from "vuex";
export default {
    emits: {
        'election-add': null,
    },
    setup(_,{emit}){
        const store = useStore()

        const state = reactive({
           election: {
               election_name: "",
               election_date: "",
               errors: {},
               notification: {}
           }
        });

        setTimeout(() => {
           store.dispatch('removeNotification');
        }, 3000);

        function addElection() {

            axios.post('api/elections', {
                election_name: state.election.election_name,
                election_date: state.election.election_date
            })
            .then( response => {
                if ( response.status === 201) {
                    state.election.election_name = "";
                    state.errors = "";
                    SendNotification('green', 'Successfully added election');

                    emit('election-add');
                }
            })
            .catch( error => {
                if (error.response.status === 422) {
                    state.errors = error.response.data.errors
                }
            })
        }

        function SendNotification(type, message) {
            let notification = {
                id: ((Math.random().toString(36) + Date.now().toString(36)).substr(2)),
                type: type,
                message: message,
            }
            store.dispatch('addNotification', notification);

            setTimeout(() => {
                store.dispatch('removeNotification', notification);
            }, 3000);
        }

        return  {
            state,
            addElection
        }
    }
}

</script>
