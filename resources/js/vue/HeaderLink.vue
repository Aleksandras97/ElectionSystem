<template>
    <router-link
        class="p-2"
        :to="`/${$i18n.locale}/`+to"
        :class="active ? 'text-blue-500 text-bold' : null"
    >
        <slot />
    </router-link>
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
