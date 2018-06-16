<template>
    <div v-bind:class="{'contents-wrap': true, 'transition-wrap': true}">
        <div>
            <h2>Transition</h2>
            <p><button v-on:click="show=!show">Switch</button></p>
            <transition>
                <div v-show="show">
                    Transition element
                </div>
            </transition>
        </div>
        <div>
            <h2>Started transition</h2>
            <transition appear name="start">
                <div v-if="startedShow" :class="{'startedShow': true}"></div>
            </transition>
        </div>
        <div>
            <h2>Transition usage Key</h2>
            <p><button v-on:click="keyShow=!keyShow">switch</button></p>
            <transition name="key">
                <div v-if="keyShow" key="a">true</div>
                <div v-else key="b">false</div>
            </transition>
        </div>
        <div>
            <h2>Transition counter</h2>
            <p><button v-on:click="count++">switch</button></p>
            <transition name="count">
                <div v-bind:key="count">{{ count }}</div>
            </transition>
        </div>
        <div>
            <h2>Shuffle transition</h2>
            <p>
                <button v-on:click="doShuffle">shuffle</button>
                <button v-on:click="doAdd">add</button>
            </p>
            <transition-group tag="ul" class="list" name="shuffle">
                <li v-for="(item, index) in list"
                    v-bind:key="item"
                    class="item"
                    v-on:click="doRemove(index)">{{ item }}</li>
            </transition-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Ch6",
        data: () => {
            return{
                count: 0,
                show: true,
                startedShow: true,
                keyShow: true,
                order: false,
                list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        methods: {
            doShuffle () {
                this.list = _.shuffle(this.list)
            },
            doAdd() {
                const newNumber = Math.max.apply(null, this.list) + 1
                const index = Math.floor(Math.random() * (this.list.length + 1))
                this.list.splice(index, 0, newNumber)
            },
            doRemove(index) {
                this.list.splice(index, 1)
            }
        }
    }
</script>