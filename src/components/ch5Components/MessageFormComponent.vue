<template>
    <div>Form
        <textarea v-model="message"></textarea>
    </div>
</template>

<script>
    export default {
        name: "MessageFormComponent",
        data () {
            return {
                message: ''
            }
        }
    }
</script>

<style scoped>

</style>