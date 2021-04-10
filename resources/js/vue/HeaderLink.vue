<template>
    <div class="p-2">
        <router-link
            :to="to"
            :class="active ? 'font-weight-blod' : null"
        >
            <slot />
        </router-link>
    </div>
</template>

<script>
import {useRoute} from "vue-router";
import {computed} from "vue";

export default {
    props: {
        to: {type: String, required: true},
        exact: { type: Boolean, default: false}
    },
    setup(props){
        const route = useRoute();
        const active = computed(() =>
            props.exact ? route.path === props.to : route.path.startsWith(props.to)
        )

        return { active }
    }
}
</script>

<style scoped>

</style>
