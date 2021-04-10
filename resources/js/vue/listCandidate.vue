<template>
    <div class="item">
        <span> {{ candidate.firstname }} </span>
        <br>
        <span> {{ candidate.lastname }} </span><br>
        <span> {{ candidate.birthdate }} </span><br>
        <span> {{ candidate.city }} </span><br>
        <span> {{ candidate.district }} </span><br>
        <span> {{ candidate.street_address }} </span><br>
        <span> {{ candidate.gender }} </span><br>

<!--        <button @click="deleteElection" class="trashcan">-->
<!--            <font-awesome-icon icon="trash" />-->
<!--        </button>-->
    </div>
</template>

<script>
export default {
    props: {
        candidate: Object,
    },
    setup(){

    }
}
</script>

<style scoped>

</style>
