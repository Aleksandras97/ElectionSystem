import { ref } from "vue"

export function makePagination() {

    const pagination = ref({})

    function paginate(data) {
        let pag = {
            current_page: data.meta.current_page,
            last_page: data.meta.last_page,
            prev_page_url: data.links.prev,
            next_page_url: data.links.next,
        }
        pagination.value = pag
    }

    return {
        paginate,
        pagination,
    }

}
