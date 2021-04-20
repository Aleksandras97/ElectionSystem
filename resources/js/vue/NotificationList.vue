<template>
    <div class="fixed bottom-0 right-0 m-10">
        <NotificationMessage v-for="notification in notifications" :key="notification.id" :notification="notification" />
    </div>

</template>

<script>
import NotificationMessage from "./NotificationMessage";
import { useStore } from "vuex";
import {computed} from "vue";
export default {
    components: {NotificationMessage},
    setup(){
        const store = useStore();
        return {
            notifications: computed(() => store.state.notifications)
        }
    }
}
</script>
