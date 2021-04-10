<template>
    <div class="item">
        <span> {{ election.election_name }} </span>

        <button @click="deleteElection" class="trashcan">
            <font-awesome-icon icon="trash" />
        </button>
    </div>
</template>

<script>
export default {
    emits: {
        'election-delete': null,
    },
    props: {
        election: Object,
    },
    setup(props,{emit}){

        function deleteElection() {
            axios.delete('api/elections/' + props.election.id )
            .then( response => {
                if( response.status === 204 ) {
                    emit('election-delete');
                }
            })
            .catch( error => {
                console.log(error);
            })
        }

        return {
            deleteElection,
        }
    }
}

</script>

<style scoped>
.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.trashcan {
    background: #60A5FA;
    border: none;
    color: #EF4444;
    outline: none;
}
</style>
