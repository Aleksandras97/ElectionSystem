<template>

    <div class="rounded overflow-hidden shadow-lg border border-gray-300">
        <div class="px-2 py-2">
            <div class="grid grid-cols-4">
                <div class="col-start-1 col-end-4">
                    <div class="font-semibold text-4xl mb-2">{{ election.election_name }}</div>
                    <p class="font-semibold text-gray-400 text-3xl">
                        {{ election.election_date }}
                    </p>
                </div>
                <div class="col-start-4 col-end-4 content-center grid place-items-center">
                    <template v-if="isPastDay(election.election_date)">
                        <span class="bg-red-200 text-red-600 py-2 px-5 rounded-full text-2xl">{{ t("elections.election_over") }}</span>
                    </template>
                    <template v-if="isSameDay(election.election_date)">
                        <span class="bg-blue-200 text-blue-600 py-2 px-5 rounded-full text-2xl">{{ t("elections.today") }}</span>
                    </template>
                    <template v-if="!isSameDay(election.election_date)">
                        <template v-if="!isPastDay(election.election_date)">
                            <span
                                class="bg-yellow-200 text-yellow-600 py-2 px-5 rounded-full text-2xl">{{ t("elections.coming_soon") }}</span>
                        </template>
                    </template>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import moment from "moment";
import { useI18n } from 'vue-i18n';

export default {
    emits: {
        'election-delete': null,
    },
    props: {
        election: Object,
    },
    setup(props,{emit}){

        const { t } = useI18n()

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

        function isSameDay(date1) {
            let date = moment().format(date1);
            return moment().diff(date, 'days') === 0
        }

        function isPastDay(date1) {
            let date = moment().format(date1);
            return moment().diff(date, 'days') > 0
        }

        return {
            deleteElection,
            isSameDay,
            isPastDay,
            t
        }
    }
}

</script>

