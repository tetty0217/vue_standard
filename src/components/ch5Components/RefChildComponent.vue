<template>
    <button>click!</button>
</template>

<script>
    export default {
        name: "RefChildComponent",
        created() {
            console.log('ref: created()');
            this.$on('open', () => {
                console.log('refChild->ref: this.$on()');
            })
        }
    }
</script>

<style scoped>

</style>