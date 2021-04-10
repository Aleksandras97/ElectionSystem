<template>
    <div class="addItem">
        <label>
            Firstname
            <input type="text" />
        </label>
        <label>
            Lastname
            <input type="text" />
        </label>
        <label>
            Birthdate
            <input type="date" />
        </label>
        <label>
            Street address
            <input type="text" />
        </label>
        <label>
            City
            <input type="text" />
        </label>
        <label>
            District
            <input type="text" />
        </label>
        <label for="gender">Gender</label><select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <font-awesome-icon
            icon="plus-square"
        />
    </div>
</template>

<script>
import {reactive} from "vue";

export default {
    setup() {
        const state = reactive({
            candidate: {
                firstname: "",
                lastname: "",
                birthdate: "",
                street_address: "",
                city: "",
                district: "",
                gender: ""
            }
        });

        // function addCandidate() {
        //     if (
        //         state.candidate.firstname === "" ||
        //         state.candidate.lastname === ""||
        //         state.candidate.birthdate === ""||
        //         state.candidate.street_address === ""||
        //         state.candidate.city === ""||
        //         state.candidate.district === ""||
        //         state.candidate.gender === ""
        //     ){
        //         return;
        //     }
        //
        // }

        return {
            state
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

.inactive {
    color: #282828;
}

.inative {
    color: #999999;
}
</style>
