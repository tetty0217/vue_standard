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
            <button v-on:click="handleClick">Alert</button>
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
        <div>
            <h2>v-bind</h2>
            <input type="text" v-bind:value="bindMessage">
        </div>
        <div>
            <h2>counter(v-on + method)</h2>
            <p>{{ count }} clicked!!</p>
            <button @click="increment">+</button>
        </div>
        <div>
            <h2>v-bind for class and style</h2>
            <p v-bind:class="{'bind-text': isClass}">binded class</p>
            <p v-bind:style="{'color': bindStyle}">binded style</p>
            <small v-bind:class="{'point-text': true}">sets vue attribute is <strong>win</strong></small>
        </div>
        <div>
            <h2>data can sets object</h2>
            <p v-bind:style="classObject">texttext</p>
        </div>
        <div>
            <h2>v-bind image</h2>
            <img v-bind="bindImage" v-bind:alt="'top_'+bindImage.alt">
        </div>
        <div>
            <h2>binding svg</h2>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <circle cx="100" cy="75" v-bind:r="radius" fill="lightpink" />
            </svg>
            <input type="range" min="0" max="100" v-model="radius">
        </div>
    </div>
</template>
<script>
	export default {
	    name: "App",
        data: function () {
            return {
                //this properties is reactive
                message: 'Hello Vue.js',
                list: ['りんご', 'ばなな', 'いちご'],
                outMessage: 'Initial message',
                bindMessage: "Completed bind!",
                contentMessage: "prop text",
                show1: true,
                show2: true,
                count: 0,
                isClass: true,
                bindStyle: 'red',
                radius: 50,
                classObject: {
                    color: 'red',
                    fontWeight: 'bold',
                },
                bindImage: {
                    id: 1,
                    src: 'http://via.placeholder.com/350x150',
                    alt: "image_1",
                }
            }
        },
        mounted: function(){
            this.scroll = 100
        },
        methods: {
            handleClick() {
                alert("through!!!")
            },
            increment() {
                this.count += 1
            }
        }
    }
</script>
<style scoped>

</style>

