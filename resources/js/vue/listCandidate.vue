<template>
    <div class="rounded overflow-hidden shadow-lg border border-gray-300">

        <div class="grid grid-cols-7">
            <div class="col-start-1 col-end-1">
                <label class="flex justify-center ml-6">
                    <input v-model="state.candidate_id" v-on:click="$emit('selected-candidate', candidate.id)" type="radio" class="form-radio w-8 h-8" name="accountType">
                </label>
            </div>
            <div class="col-start-2 col-end-3">
                <div class="font-semibold text-4xl mb-2">{{ candidate.firstname }}</div>
            </div>
            <div class="col-start-3 col-end-4">
                <div class="font-semibold text-4xl mb-2">{{ candidate.lastname }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {reactive} from "vue";

export default {
    emits: {
        'selected-candidate': null,
    },
    props: {
        candidate: Object,
        index: Number,
    },
    setup(){
        const state = reactive({
            candidate_id: null
        });
        return {
            state
        }
    }
}
</script>

