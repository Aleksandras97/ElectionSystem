<template>
    <div class="flex justify-start mb-1 sm:mb-0">
        <div class="relative">
            <input type="text" v-model="state.candidate.firstname" placeholder="Candidate Firstname"
                   class="appearance-none rounded-r sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
        </div>
        <div class="relative">
            <input type="text" v-model="state.candidate.lastname" placeholder="Candidate Lastname"
                   class="appearance-none rounded-r sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
        </div>
        <div class="relative">
            <input type="date" v-model="state.candidate.birthdate" placeholder="Candidate Birthdate"
                   class="appearance-none rounded-r sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
        </div>
        <div class="relative">
            <input type="text" v-model="state.candidate.street_address" placeholder="Candidate St.adr"
                   class="appearance-none rounded-r sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
        </div>
        <div class="relative">
            <input type="text" v-model="state.candidate.city" placeholder="Candidate City"
                   class="appearance-none rounded-r sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
        </div>
        <div class="relative">
            <input type="text" v-model="state.candidate.district" placeholder="Candidate District"
                   class="appearance-none rounded-r sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
        </div>
        <div class="relative">
            <select class="appearance-none rounded-r sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                    v-model="state.candidate.gender"
                    id="gender"
                    name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        <div class="relative">
            <button
                @click="addCandidate()"
                :class="[ state.candidate.firstname ? 'bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500' ]"
                class="text-white font-bold py-1 px-4 ml-3 border-b-4 rounded">
                Add
            </button>
        </div>
    </div>
</template>

<script>
import {reactive} from "vue";

export default {
    emits: {
        'candidate-add': null,
    },
    props: {
        electionId: String,
    },
    setup(props,{emit}) {
        const state = reactive({
            candidate: {
                firstname: "",
                lastname: "",
                birthdate: "",
                street_address: "",
                city: "",
                district: "",
                gender: ""
            },
        });
        console.log(props)
        async function addCandidate() {
            if (
                state.candidate.firstname === "" ||
                state.candidate.lastname === ""||
                state.candidate.birthdate === ""||
                state.candidate.street_address === ""||
                state.candidate.city === ""||
                state.candidate.district === ""||
                state.candidate.gender === ""
            ){
                return;
            }
            console.log(props.electionId)
            await axios.post( `api/elections/${props.electionId}/candidates`, {
                firstname: state.candidate.firstname,
                lastname: state.candidate.lastname,
                birthdate: state.candidate.birthdate,
                street_address: state.candidate.street_address,
                city: state.candidate.city,
                district: state.candidate.district,
                gender: state.candidate.gender,
            })
            .then( response => {
                if (response.status === 201) {
                    state.candidate.firstname = "";
                    state.candidate.lastname = "";
                    state.candidate.birthdate = "";
                    state.candidate.street_address = "";
                    state.candidate.city = "";
                    state.candidate.district = "";
                    state.candidate.gender = "";
                    emit('candidate-add');
                }
            })
            .catch( error => {
                console.log(error);
            })
        }

        return {
            state,
            addCandidate
        }
    }
}
</script>
