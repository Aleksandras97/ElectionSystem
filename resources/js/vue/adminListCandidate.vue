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
                    {{ state.candidate.firstname }}
                </p>
            </div>
        </div>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{{ state.candidate.lastname }}</p>
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
            <font-awesome-icon v-if="state.loading" class="animate-spin" icon="spinner" />
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
                            <div v-if="state.errors && state.errors.firstname " class="mb-2 mr-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded">{{ state.errors.firstname[0] }}</div>

                            <div class=" mb-6 mr-2 pt-3 rounded bg-gray-200">

                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="firstname">Firstname</label>
                                <input type="text" v-model="state.candidate.firstname" id="firstname" placeholder="Candidate Firstname"
                                       class="login-input" />
                            </div>
                        </div>
                        <div class="relative">
                            <div v-if="state.errors && state.errors.lastname " class="mb-2 mr-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded">{{ state.errors.lastname[0] }}</div>

                            <div class=" mb-6 mr-2 pt-3 rounded bg-gray-200">

                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="lastname">Lastname</label>
                                <input type="text" v-model="state.candidate.lastname" id="lastname" placeholder="Candidate Lastname"
                                       class="login-input" />
                            </div>
                        </div>
                        <div class="relative">
                            <div v-if="state.errors && state.errors.birthdate " class="mb-2 mr-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded">{{ state.errors.birthdate[0] }}</div>

                            <div class=" mb-6 mr-2 pt-3 rounded bg-gray-200">

                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="birthdate">Birthdate</label>
                                <input type="date" v-model="state.candidate.birthdate" id="birthdate" placeholder="Candidate Birthdate"
                                       class="login-input" />
                            </div>
                        </div>
                        <div class="relative">
                            <div v-if="state.errors && state.errors.street_address " class="mb-2 mr-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded">{{ state.errors.street_address[0] }}</div>

                            <div class=" mb-6 mr-2 pt-3 rounded bg-gray-200">

                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="street_address">St. address</label>
                                <input type="text" v-model="state.candidate.street_address" id="street_address" placeholder="Candidate St. address"
                                       class="login-input" />
                            </div>
                        </div>
                        <div class="relative">
                            <div v-if="state.errors && state.errors.city " class="mb-2 mr-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded">{{ state.errors.city[0] }}</div>

                            <div class=" mb-6 mr-2 pt-3 rounded bg-gray-200">

                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="city">City</label>
                                <input type="text" v-model="state.candidate.city" id="city" placeholder="Candidate City"
                                       class="login-input" />
                            </div>
                        </div>
                        <div class="relative">
                            <div v-if="state.errors && state.errors.district " class="mb-2 mr-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded">{{ state.errors.district[0] }}</div>

                            <div class=" mb-6 mr-2 pt-3 rounded bg-gray-200">

                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="district">District</label>
                                <input type="text" v-model="state.candidate.district" id="district" placeholder="Candidate District"
                                       class="login-input" />
                            </div>
                        </div>
                        <div class="relative">
                            <div v-if="state.errors && state.errors.election_date " class="mb-2 mr-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded">{{ state.errors.election_date[0] }}</div>

                            <div class=" mb-6 mr-2 pt-3 rounded bg-gray-200">

                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="gender">Gender</label>
                                <select class="login-input"
                                        v-model="state.candidate.gender"
                                        id="gender"
                                        name="gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end my-2 sm:mb-0">
                        <div class="relative">
                            <button
                                @click="editCandidate()"
                                :class="[ state.candidate.firstname ? 'bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500' ]"
                                class=" text-white font-bold py-1 px-4 ml-3 border-b-4 rounded">
                                Edit
                                <font-awesome-icon v-if="state.loading" class="animate-spin" icon="spinner" />

                            </button>
                            <button @click="isModalOpen = false, state.isOpen = false" class="bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500  text-white font-bold py-1 px-4 ml-3 border-b-4 rounded">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Modal>
</template>

<script>
import {onMounted, onUpdated, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import Modal from "./Modal";
import {useStore} from "vuex";
import { Notification } from '../composables/Notify.js';

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
        const store = useStore()
        const isModalOpen = ref(false)


        let { SendNotification } = Notification();

        const state = reactive({
            candidate_id: null,
            isOpen: false,
            candidate: {},
            errors: {},
            loading: false,
        });

        onMounted( () => {
            state.candidate = props.candidate
        })

        onUpdated( () => {
            state.candidate = props.candidate
        })

        function deleteCandidate() {
            state.loading = true;
            axios.delete(`api/candidates/${props.candidate.id}`  )
                .then( response => {
                    if( response.status === 204 ) {
                        emit('candidates-update');
                        SendNotification('green', "Successfully deleted candidate")

                    }
                })
                .catch( error => {
                    console.log(error);

                })
                .finally(() => state.loading = false)
        }

        function editCandidate() {
            state.loading = true;

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
                    SendNotification('green', "Successfully updated candidate")
                    state.errors = "";
                    emit('candidates-update');
                    state.isOpen = false;
                    isModalOpen.value = false;
                }
            })
            .catch( error => {
                if (error.response.status === 422) {
                    state.errors = error.response.data.errors
                }
            })
            .finally(() => state.loading = false)
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
