<template>
    <section @click="close" class="z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50"></section>
    <div class="absolute inset-0">
        <div class="flex h-full">
            <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/5">
                <div class="p-2 border">
                    <h1>
                        <slot name="title" class="text-blue-500 text-2xl">Modal Title</slot>
                    </h1>
                    <main>
                        <slot name="body">Provide data here</slot>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['close-modal'],
    setup(_,{emit}){
        function close() {
            emit('close-modal')
        }
        return {
            close
        }
    }
}
</script>
