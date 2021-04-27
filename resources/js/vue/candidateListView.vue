<template>
    <div class="container mx-auto px-4 sm:px-8 ">
        <ListCandidate class="my-2 p-2" v-for="(candidate, index) in candidates" :key="index"
            :candidate="candidate" :index="index" v-on:selected-candidate="$emit('candidate', $event)"
        />
    </div>
</template>

<script>
import ListCandidate from "./listCandidate";

export default {
    components: {ListCandidate},
    emits: {
        'candidate': null,
    },
    props: {
        candidates: Object,
    }

}
</script>
