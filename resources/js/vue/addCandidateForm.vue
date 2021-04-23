<template>
    <div class="flex justify-start mb-1 sm:mb-0">
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

                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="address">St. address</label>
                <input type="text" v-model="state.candidate.street_address" id="address" placeholder="Candidate St. address"
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
            <div v-if="state.errors && state.errors.gender " class="mb-2 mr-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded">{{ state.errors.gender[0] }}</div>

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

        <div class="relative">
            <button
                @click="addCandidate()"
                :class="[ state.candidate.firstname ? 'bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500' ]"
                class="text-white font-bold py-1 px-4 ml-3 border-b-4 rounded">
                Add
                <font-awesome-icon v-if="state.loading" class="animate-spin" icon="spinner" />
            </button>
        </div>
    </div>
    <div class="block w-3">

        <div class=" mb-6 mr-2 p-3 rounded bg-gray-200">

            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="image">Image</label>
            <input type="file" accept="image/*" id="image" @change="uploadFile"/>
        </div>
    </div>
    <img v-show="photoUrl" :src="photoUrl" class="w-48 h-48 object-cover" >
    
</template>

<script>
import {reactive, ref, watch} from "vue";
import {useStore} from "vuex";
import { useImageUpload } from '../composables/useImageUpload.js';

export default {
    emits: {
        'candidate-add': null,
    },
    setup(props,ctx) {

        let { photo, photoUrl, uploadFile } = useImageUpload();

        const store = useStore()
        
        const state = reactive({
            candidate: {
                firstname: "",
                lastname: "",
                birthdate: "",
                street_address: "",
                city: "",
                district: "",
                gender: "",
                
            },
            errors: {},
            loading: false,
        });

        

        async function addCandidate() {
            state.loading = true;
            await axios.post( `api/candidates`, {
                firstname: state.candidate.firstname,
                lastname: state.candidate.lastname,
                birthdate: state.candidate.birthdate,
                street_address: state.candidate.street_address,
                city: state.candidate.city,
                district: state.candidate.district,
                gender: state.candidate.gender,
                photo: photo.value,
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
                    state.errors = "";
                    SendNotification('green', "Successfully added candidate")
                    emit('candidate-add');
                }
            })
            .catch( error => {
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
            state,
            addCandidate,
            photo, 
            photoUrl, 
            uploadFile
        }
    }
}
</script>
