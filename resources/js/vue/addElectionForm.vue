<template>
    <div class="addItem">
        <input type="text" v-model="state.election.election_name" />
        <input type="date" v-model="state.election.election_date"/>
        <font-awesome-icon
            icon="plus-square"
            @click="addElection()"
            :class="[ state.election.election_name ? 'active' : 'inactive', 'plus' ]"
        />
    </div>
</template>

<script>
import { reactive } from 'vue';
export default {
    emits: {
        'election-add': null,
    },
    setup(_,{emit}){
        const state = reactive({
           election: {
               election_name: "",
               election_date: "",
           }
        });

        function addElection() {
            if (state.election.election_name === "" || state.election.election_date === ""){
                return;
            }

            axios.post('api/elections', {
                election_name: state.election.election_name,
                election_date: state.election.election_date
            })
            .then( response => {
                if ( response.status == 201) {
                    state.election.election_name = "";
                    emit('election-add');
                }
            })
            .catch( error => {
                console.log(error);
            })
        }

        return  {
            state,
            addElection
        }
    }
}

</script>

<style scoped>
.addItem {
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    display: block;
    background: #f7fafc;
    border: 0px;
    outline: none;
    padding: 5px;
    margin-right: 10px;
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
