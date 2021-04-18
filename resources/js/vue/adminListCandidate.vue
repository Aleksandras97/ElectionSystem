<template>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
            <div class="flex-shrink-0 w-10 h-10">
                <img class="w-full h-full rounded-full"
                     src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                     alt="" />
            </div>
            <div class="ml-3">
                <p class="text-gray-900 whitespace-no-wrap">
                    {{ candidate.firstname }}
                </p>
            </div>
        </div>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{{ candidate.lastname }}</p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                @click="isModalOpen = true"
        >
            Edit
        </button>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
                @click="deleteCandidate()"
        >
            Delete
        </button>
    </td>

    <Modal v-if="isModalOpen" @close-modal="isModalOpen = false" >
        <template #title>
            Edit Candidate
        </template>
        <template #body>
            <div class="flex justify-center p-2">
                <div class="block">

                    <div class="block mb-1 sm:mb-0">
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
                    </div>
                    <div class="flex justify-end my-2 sm:mb-0">
                        <div class="relative">
                            <button
                                @click="editCandidate()"
                                :class="[ state.candidate.firstname ? 'bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500' ]"
                                class=" text-white font-bold py-1 px-4 ml-3 border-b-4 rounded">
                                Edit
                            </button>
                            <button @click="isModalOpen = false, state.isOpen = false" class="bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500  text-white font-bold py-1 px-4 ml-3 border-b-4 rounded">Cancel</button>
                        </div>
                    </div>
                </div>
                <!--                <button @click="deletePost" class="bg-red-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full">Delete</button>-->
            </div>
        </template>
    </Modal>
</template>

<script>
import {onMounted, onUpdated, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import Modal from "./Modal";

export default {
    components: {Modal},
    emits: {
        'candidates-update': null,
    },
    props: {
        candidate: Object,
        index: Number,
    },
    setup(props,{emit}){

        const isModalOpen = ref(false)

        const state = reactive({
            candidate_id: null,
            isOpen: false,
            candidate: null,
        });

        onUpdated( () => {
            state.candidate = props.candidate
        })

        function deleteCandidate() {
            axios.delete(`api/candidates/${props.candidate.id}`  )
                .then( response => {
                    if( response.status === 204 ) {
                        emit('candidates-update');

                    }
                })
                .catch( error => {
                    console.log(error);

                })
        }

        function editCandidate() {
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

            axios.put(`api/candidates/${props.candidate.id}`, {
                firstname: state.candidate.firstname,
                lastname: state.candidate.lastname,
                birthdate: state.candidate.birthdate,
                street_address: state.candidate.street_address,
                city: state.candidate.city,
                district: state.candidate.district,
                gender: state.candidate.gender,
                entry_id: state.candidate.entry_id,
            })
            .then( response => {
                if( response.status === 200 ) {
                    emit('candidates-update');
                    state.isOpen = false;
                    isModalOpen.value = false;
                }
            })
            .catch( error => {
                console.log(error);
                state.isOpen = false;
                isModalOpen.value = false;
            })
        }

        return {
            state,
            isModalOpen,
            deleteCandidate,
            editCandidate
        }
    }
}
</script>

<style scoped>

</style>
