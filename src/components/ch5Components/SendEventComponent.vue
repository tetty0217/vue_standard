<template>
    <button @click='handleClick'>click!</button>
</template>

<script>
    export default {
        name: "SendEventComponent",
        methods: {
            handleClick(){
                this.$emit('childs-event')
            }
        }
    }
</script>

<style scoped>

</style>