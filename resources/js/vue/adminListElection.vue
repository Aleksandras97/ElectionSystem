<template>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
            <div class="flex-shrink-0 w-10 h-10">
                <img class="w-full h-full rounded-full"
                     src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                     alt="" />
            </div>
            <div class="ml-3">
                <p class="text-gray-900 whitespace-no-wrap hover:text-blue-300 hover:font-bold cursor-pointer"
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
            @click="isEditModalOpen = true"
        >
            Edit
        </button>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
            @click="deleteElection()"
        >
            Delete
            <font-awesome-icon v-if="state.loading" class="animate-spin" icon="spinner" />
        </button>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
            @click="isAddCandidateModalOpen = true, getAllCandidates()"
        >
            View Candidates
            <font-awesome-icon v-if="state.loading" class="animate-spin" icon="spinner" />
        </button>
    </td>

    <Modal v-if="isEditModalOpen" @close-modal="isEditModalOpen = false" >
        <template #title>
            Edit Election
        </template>
        <template #body>
            <div class="flex justify-center p-2">
                <div class="block">

                    <div class="flex justify-start mb-1 sm:mb-0">
                        <div class="relative ">
                            <div v-if="state.errors && state.errors.election_name " class="mb-2 mr-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded">{{ state.errors.election_name[0] }}</div>
                            <div class="mb-6 mr-2 pt-3 rounded bg-gray-200">

                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="name">Name</label>
                                <input type="text" v-model="state.election.election_name" id="name" placeholder="Election Name"
                                       class="login-input" />
                            </div>
                        </div>
                        <div class="relative">
                            <div v-if="state.errors && state.errors.election_date " class="mb-2 mr-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded">{{ state.errors.election_date[0] }}</div>
                            <div class=" mb-6 mr-2 pt-3 rounded bg-gray-200">

                                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="date">Date</label>
                                <input type="date" v-model="state.election.election_date" id="date" placeholder="Election Date"
                                       class="login-input" />
                            </div>

                        </div>
                    </div>
                    <div class="flex justify-end my-2 sm:mb-0">
                        <div class="relative">
                            <button
                                @click="editElection()"
                                :class="[ state.election.election_name ? 'bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500' ]"
                                class=" text-white font-bold py-1 px-4 ml-3 border-b-4 rounded">
                                Edit
                                <font-awesome-icon v-if="state.loading" class="animate-spin" icon="spinner" />
                            </button>
                            <button @click="isEditModalOpen = false" class="bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500  text-white font-bold py-1 px-4 ml-3 border-b-4 rounded">Cancel</button>
                        </div>
                    </div>
                </div>
<!--                <button @click="deletePost" class="bg-red-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full">Delete</button>-->
            </div>
        </template>
    </Modal>

    <Modal v-if="isAddCandidateModalOpen" @close-modal="isAddCandidateModalOpen = false" >
        <template #title>
            Candidates
        </template>
        <template #body>
            <div class="grid grid-cols-2 gap-4 p-2">
                <div class="border">
                    <h1 class="font-bold text-2xl p-1 mb-2 text-center">List of candidates</h1>
                    <div class="p-2" v-for="(candidate, index) in state.candidates" :key="index" :value="candidate.id">
                        <span class="font-bold">{{ candidate.firstname }}</span>  {{ candidate.lastname }}
                    </div>
                    <div
                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span class="text-xs xs:text-sm text-gray-900">
                            Showing {{ state.pagination.current_page }} of {{ state.pagination.last_page }} Entries
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button
                                class="bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"
                                :disabled='!state.pagination.prev_page_url'
                                :class="{'opacity-50': !state.pagination.prev_page_url }"
                                @click="getAllCandidates(state.pagination.prev_page_url)"
                            >
                                Prev
                                <font-awesome-icon v-if="state.loading" class="animate-spin" icon="spinner" />
                            </button>
                            <button
                                class="bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"
                                :disabled='!state.pagination.next_page_url'
                                :class="{'opacity-50': !state.pagination.next_page_url }"
                                @click="getAllCandidates(state.pagination.next_page_url)"
                            >
                                Next
                                <font-awesome-icon v-if="state.loading" class="animate-spin" icon="spinner" />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center border">
                    <div class="block w-full">
                        <h1 class="font-bold text-2xl p-1 mb-2 text-center">Add candidate</h1>
                        <div class="mx-2 mb-1 sm:mb-0">
                            <div class="relative">

                                <div class="mb-6 mr-2 pt-3 rounded bg-gray-200">

                                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="candidate">Candidate</label>
                                    <select class="login-input"
                                            v-model="state.candidate"
                                            id="candidate"
                                            name="candidate">
                                        <option v-for="(candidate, index) in state.allCandidates" :key="index" :value="candidate.id" >{{ candidate.firstname }} {{ candidate.lastname }} </option>
                                        <h1>test</h1>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center my-2 sm:mb-0">
                            <div class="relative">
                                <button
                                    @click="addCandidateToElection"
                                    :class="[ state.election.election_name ? 'bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500' ]"
                                    class=" text-white font-bold py-1 px-4 ml-3 border-b-4 rounded">
                                    Add
                                    <font-awesome-icon v-if="state.loading" class="animate-spin" icon="spinner" />
                                </button>
                                <button @click="isAddCandidateModalOpen = false" class="bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500  text-white font-bold py-1 px-4 ml-3 border-b-4 rounded">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </template>
    </Modal>

</template>

<script>
import {onMounted, onUpdated, reactive, ref} from "vue";
import Modal from "./Modal";
import {useRouter} from "vue-router";
import {useStore} from "vuex";

export default {
    components: {Modal},
    emits: {
        'elections-update': null,
    },
    props: {
        election: Object,
    },
    setup: function (props, {emit}) {
        const store = useStore()
        const router = useRouter();
        // const goToCandidates = (id) => {
        //     router.push({path: `/admin/${id}/candidates`})
        // }

        const isEditModalOpen = ref(false)
        const isAddCandidateModalOpen = ref(false)

        const state = reactive({
            election: {},
            allCandidates: {},
            candidates: {},
            candidate: null,
            pagination: {},
            errors: {},
            loading: false,
        });

        onMounted(() => {
            state.election = props.election
        })

        onUpdated(() => {
            state.election = props.election
        })



        async function getAllCandidates(page_url) {
            page_url = page_url || `api/elections/${state.election.id}/candidates`
            state.loading = true;
            try {

                const allCandidates = axios.get(`api/all/candidates`)
                    .then(response => {
                        state.allCandidates = response.data.data
                    })
                    .catch(error => {
                        console.log(error);
                    })
                    .finally(()=> state.loading = false)

                const electionCandidates = axios.get(page_url)
                    .then(response => {
                        state.candidates = response.data.data
                        makePagination(response.data)
                    })
                    .catch(error => {
                        console.log(error);
                    })
                    .finally(()=> state.loading = false)

                    await Promise.all([allCandidates, electionCandidates]);
            } catch(error) {
                console.log(error)
            }
        }

        function addCandidateToElection() {
            state.loading = true;
            axios.post(`api/elections/${state.election.id}/candidates`, {
                candidate_id: state.candidate,
            })
                .then(response => {
                    if (response.status === 201) {
                        getAllCandidates()
                        SendNotification('green', "Successfully add candidate to election")

                    }
                })
                .catch(error => {
                    console.log(error);

                })
                .finally(() => state.loading = false)
        }



        function deleteElection() {
            state.loading = true;
            axios.delete('api/elections/' + props.election.id)
                .then(response => {
                    if (response.status === 204) {
                        emit('elections-update');
                        SendNotification('green', "Successfully deleted election")

                    }
                })
                .catch(error => {
                    console.log(error);

                })
                .finally(() => state.loading = false)
        }

        function editElection() {
            state.loading = true;
            axios.put('api/elections/' + props.election.id, {
                election_name: state.election.election_name,
                election_date: state.election.election_date
            })
                .then(response => {
                    if (response.status === 200) {
                        state.errors = "";
                        emit('elections-update');
                        isEditModalOpen.value = false;
                        SendNotification('green', "Successfully updated election")
                    }
                })
                .catch(error => {
                    if (error.response.status === 422) {
                        state.errors = error.response.data.errors
                    }
                })
                .finally(() => state.loading = false)
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

        function makePagination(data) {
            let pagination = {
                current_page: data.meta.current_page,
                last_page: data.meta.last_page,
                prev_page_url: data.links.prev,
                next_page_url: data.links.next,
            }
            state.pagination = pagination
        }

        return {
            deleteElection,
            isEditModalOpen,
            isAddCandidateModalOpen,
            state,
            editElection,
            getAllCandidates,
            addCandidateToElection
        }
    }
}
</script>
