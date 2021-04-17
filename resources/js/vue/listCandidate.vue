<template>
    <tr>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap text-center">{{ index + 1  }} and {{ candidate.id }}</p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap text-center">{{ candidate.firstname }}</p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap text-center">{{ candidate.lastname }}</p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap text-center">{{ candidate.birthdate }}</p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <label class="flex justify-center ml-6">
                <input v-model="state.candidate_id" v-on:click="$emit('selected-candidate', candidate.id)" type="radio" class="form-radio w-8 h-8" name="accountType">
            </label>
        </td>
    </tr>


<!--        <button @click="deleteElection" class="trashcan">-->
<!--            <font-awesome-icon icon="trash" />-->
<!--        </button>-->
</template>

<script>
import {reactive} from "vue";

export default {
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

<style scoped>

</style>
