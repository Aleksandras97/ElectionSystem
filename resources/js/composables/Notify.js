import { useStore } from "vuex";

export function Notification() {

    const store = useStore()

    function SendNotification(type, message) {
        let notification = {
            id: ((Math.random().toString(36) + Date.now().toString(36)).substr(2)),
            type: type,
            message: message,
        }
        store.dispatch('addNotification', notification);

        setTimeout(() => {
            store.dispatch('removeNotification', notification);
        }, 3000);
    }

    return {
        SendNotification,
    }

}
