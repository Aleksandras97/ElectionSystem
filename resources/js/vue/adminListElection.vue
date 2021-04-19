<template>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
            <div class="flex-shrink-0 w-10 h-10">
                <img class="w-full h-full rounded-full"
                     src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                     alt="" />
            </div>
            <div class="ml-3">
                <p class="text-gray-900 whitespace-no-wrap"
                   @click="goToCandidates(election.id)"
                >
                    {{ election.election_name }}
                </p>
            </div>
        </div>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{{ election.election_date }}</p>
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
            @click="deleteElection()"
        >
            Delete
        </button>
    </td>

    <Modal v-if="isModalOpen" @close-modal="isModalOpen = false" >
        <template #title>
            Edit Election
        </template>
        <template #body>
            <div class="flex justify-center p-2">
                <div class="block">

                    <div class="flex justify-start mb-1 sm:mb-0">
                        <div class="relative">
                            <input type="text" v-model="state.election.election_name" placeholder="Election Name"
                                   class="appearance-none rounded-r sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                        </div>
                        <div class="relative">
                            <input type="date" v-model="state.election.election_date" placeholder="Election Date"
                                   class="appearance-none rounded-r sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />

                        </div>
                    </div>
                    <div class="flex justify-end my-2 sm:mb-0">
                        <div class="relative">
                            <button
                                @click="editElection()"
                                :class="[ state.election.election_name ? 'bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500' ]"
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
import Modal from "./Modal";
import {useRouter} from "vue-router";

export default {
    components: {Modal},
    emits: {
        'elections-update': null,
    },
    props: {
        election: Object,
    },
    setup: function (props, {emit}) {
        const router = useRouter();
        const goToCandidates = (id) => {
            router.push({path: `/admin/${id}/candidates`})
        }

        const isModalOpen = ref(false)

        const state = reactive({
            isOpen: false,
            election: {},
        });

        onMounted(() => {
            state.election = props.election
        })

        onUpdated(() => {
            state.election = props.election
        })


        function deleteElection() {
            axios.delete('api/elections/' + props.election.id)
                .then(response => {
                    if (response.status === 204) {
                        emit('elections-update');

                    }
                })
                .catch(error => {
                    console.log(error);

                })
        }

        function editElection() {
            if (state.election_name === "" || state.election_date === "") {
                return;
            }

            axios.put('api/elections/' + props.election.id, {
                election_name: state.election.election_name,
                election_date: state.election.election_date
            })
                .then(response => {
                    if (response.status === 200) {
                        emit('elections-update');
                        state.isOpen = false;
                        isModalOpen.value = false;
                    }
                })
                .catch(error => {
                    console.log(error);
                    state.isOpen = false;
                    isModalOpen.value = false;
                })
        }

        return {
            deleteElection,
            isModalOpen,
            state,
            editElection,
            goToCandidates
        }
    }
}
</script>
