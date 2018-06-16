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
            <p><button v-on:click="keyShow=!keyShow">Switch</button></p>
            <transition name="key">
                <div v-if="keyShow" key="a">True</div>
                <div v-else key="b">False</div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Ch6",
        data: () => {
            return{
                show: true,
                startedShow: true,
                keyShow: true
            }
        }
    }
</script>