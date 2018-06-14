<template>
    <li>{{ name }} HP.{{ hp }}
        <button v-on:click="doAttack">attack</button>
    </li>
</template>

<script>
    export default {
        name: "AttackedComponent",
        props: {
            id: Number,
            name: String,
            hp: Number
        },
        methods: {
            doAttack () {
                this.$emit('attack', this.id)
            }
        }
    }
</script>

<style scoped>

</style>