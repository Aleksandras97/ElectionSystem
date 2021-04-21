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
            <font-awesome-icon v-if="state.loading" class="animate-spin" icon="spinner" />
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
        const goToCandidates = (id) => {
            router.push({path: `/admin/${id}/candidates`})
        }

        const isModalOpen = ref(false)

        const state = reactive({
            isOpen: false,
            election: {},
            errors: {},
            loading: false,
        });

        onMounted(() => {
            state.election = props.election
        })

        onUpdated(() => {
            state.election = props.election
        })


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
                        state.isOpen = false;
                        isModalOpen.value = false;
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
