<template>
    <p class="my-calender">{{ current }}</p>
</template>

<script>
    export default {
        name: "MyCalendarComponent",
        model: {
            prop: 'current',
            event: 'change'
        },
        props: { current: String },
        mounted() {
            console.log('MyCalendar: created()');
            console.log('MyCalendar<-current');
            this.$emit('change', '2018-01-01')
        }
    }
</script>

<style scoped>

</style>