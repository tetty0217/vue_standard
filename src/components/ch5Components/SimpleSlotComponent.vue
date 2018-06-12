<template>
    <section class="simple-slot">
        <header>
            <slot name="header">initial title</slot>
        </header>
        <div class="content">
            <slot>initial contents</slot>
        </div>
        <slot name="footer">
        </slot>
    </section>
</template>

<script>
    export default {
        name: "SimpleSlotComponent"
    }
</script>

<style scoped>

</style>