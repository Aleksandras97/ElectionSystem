<template>
    <div class="addItem">
        <label>
            Firstname
            <input type="text" v-model="state.candidate.firstname" />
        </label>
        <label>
            Lastname
            <input type="text" v-model="state.candidate.lastname" />
        </label>
        <label>
            Birthdate
            <input type="date" v-model="state.candidate.birthdate" />
        </label>
        <label>
            Street address
            <input type="text" v-model="state.candidate.street_address" />
        </label>
        <label>
            City
            <input type="text" v-model="state.candidate.city" />
        </label>
        <label>
            District
            <input type="text" v-model="state.candidate.district" />
        </label>
        <label for="gender">Gender</label><select v-model="state.candidate.gender" id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <font-awesome-icon
            icon="plus-square"
            @click="addCandidate()"
            :class="[ state.candidate.firstname ? 'active' : 'inactive', 'plus' ]"
        />
    </div>
</template>

<script>
import {reactive} from "vue";

export default {
    emits: {
        'candidate-add': null,
    },
    props: {
        electionId: Number,
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

<style scoped>
.addItem {
    display: block;
    padding: 15px;
}

input, select {
    display: block;
    max-width: 80%;
    background: #f7fafc;
    border: 0px;
    outline: none;
    padding: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    width: 100%;
}

.plus {
    font-size: 30px;

}

.active {
    color: #282828;
}

.inactive {
    color: #999999;
}
</style>
