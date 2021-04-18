<template>

    <div class="rounded overflow-hidden shadow-lg border border-gray-300">
        <img class="h-auto w-auto p-1"
             src="https://picsum.photos/400"
             alt="Sunset in the mountains">
        <div class="px-2 py-2">
            <div class="font-semibold text-sm mb-2">{{ election.election_name }}</div>
            <p class="font-semibold text-gray-400 text-xs">
                {{ election.election_date }}
            </p>
        </div>

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

