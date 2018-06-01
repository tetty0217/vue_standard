<template>
    <div>
        <div>
            <h2>テキストバインディング</h2>
            <p>{{ message }}</p>
        </div>
        <div>
            <h2>v-for</h2>
            <ol>
                <li v-for="item in list">{{ item }}</li>
            </ol>
        </div>
        <div>
            <h2>v-on:click</h2>
            <button @click="handleClick">Click</button>
        </div>
        <div>
            <h2>v-model</h2>
            <input v-model="outMessage">
            <p>{{outMessage}}</p>
        </div>
        <div>
            <h2>v-if</h2>
            <button v-on:click="show1=!show1">Switch</button>
            <p v-if="show1">Hello Vue.js!</p>
        </div>
        <div>
            <h2>v-if</h2>
            <button v-on:click="show2=!show2">Switch</button>
            <transition>
                <p v-if="show2" class="transition">Hello Vue.js!</p>
            </transition>
        </div>
    </div>
</template>
<script>
	export default {
	    name: "App",
        data: function () {
            return {
                message: 'Hello Vue.js',
                list: ['りんご', 'ばなな', 'いちご'],
                outMessage: 'Initial message',
                show1: true,
                show2: true
            }
        },
        methods: {
            handleClick() {
                alert("through!!!")
            }
        }
    }
</script>
<style scoped>

</style>

