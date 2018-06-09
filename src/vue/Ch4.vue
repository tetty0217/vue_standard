<template>
    <div v-bind:class="{'contents-wrap': true}">
        <div>
            <h2>Calculation property for half of width</h2>
            <p>{{ width }} / 2 = {{ halfWidth }}</p>
        </div>
        <div>
            <h2>Calculation property for center point</h2>
            <p>x: {{halfPoint.x}}</p>
            <p>y: {{halfPoint.y}}</p>
        </div>
        <div>
            <h2>Calculation getter and setter</h2>
            <input v-model.number="getWidth"> {{ getWidth }}<br>
            <input v-model.number="getHalfWidth"> {{ getHalfWidth }}
        </div>
        <div>
            <h2>Method and computed different</h2>
            <ol>
                <li>{{ computeData }}</li>
                <li>{{ computeData }}</li>
            </ol>
            <ol>
                <li>{{ methodData() }}</li>
                <li>{{ methodData() }}</li>
            </ol>
        </div>
        <div>
            <h2>List twister</h2>
            <input v-model.number="budget">down yen.
            <input v-model.number="limit">
            <p>{{ limited.length }} / {{ matched.length }}</p>
            <ul>
                <li v-for="item in limited" v-bind:key="item.id">
                    {{ item.name }} {{ item.price }}yen
                </li>
            </ul>
        </div>
        <div>
            <h2>Axios</h2>
            <select v-model="current">
                <option v-for="topic in topics" v-bind:value="topic.value" >
                    {{ topic.name }}
                </option>
            </select>
            <div v-for="item in topicList" :class="{'topics': true}">{{ item.full_name }}</div>
        </div>
        <div>
            <h2>Filters</h2>
            <p>{{ price }} => {{ price | localeNum }}円</p>
        </div>
        <div>
            <h2>Multi filter</h2>
            <p>180° is {{ 180 | radian | round }} radian.</p>
        </div>
        <div>
            <h2>Custom directive</h2>
            <input type="text" v-focus>
        </div>
        <div>
            <div :class="{'video-wrap': true}">
                <h2>Video</h2>
                <button @click="video1=!video1"
                        :class="{'video-btn':true, 'stopped-btn': video1}">
                    {{ !this.video1 ? "Play" : "Stop"}}
                </button>
                <video src="../static/movies/sample.mp4" v-video="video1"></video>
            </div>
        </div>
        <div>
            <h2>Input dom height</h2>
            <button @click="heightList.push(heightList.length+1)">add</button>
            <ul ref="heightList">
                <li v-for="item in heightList">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Ch4",
        data: () => {
            return {
                width: 600,
                height: 700,
                getWidth: 1000,
                rand: 0,
                budget: 300,
                limit: 2,
                price: 19800,
                current: '',
                order: false,
                video1: false,
                topicList: [],
                heightList: [],
                list: [
                    { id: 1, name: 'apple', price: 100 },
                    { id: 2, name: 'banana', price: 200 },
                    { id: 3, name: 'orange', price: 400 },
                    { id: 4, name: 'melon', price: 300 },
                    { id: 5, name: 'pineapple', price: 500 }
                ],
                topics: [
                    { value: 'vue', name: 'Vue.js'},
                    { value: 'jQuery', name: 'jQuery' }
                ]
            }
        },
        watch: {
            current(val) {
                axios.get('https://api.github.com/search/repositories', {
                    params: {
                        q: 'topic:' + val
                    }
                }).then(function (response) {
                    this.topicList = response.data.items
                }.bind(this))
            },
            heightList(){
                console.log('normal', this.$refs.heightList.offsetHeight)
                this.$nextTick(()=>{
                    console.log('nextTick', this.$refs.heightList.offsetHeight)
                })
            }
        },
        filters: {
            localeNum(val) {
                return val.toLocaleString()
            },
            round(val) {
                return Math.round(val * 100) / 100
            },
            radian(val){
                return val * Math.PI / 100
            }
        },
        directives: {
          focus: {
              inserted(el){
                  el.focus()
              }
          },
          video(el, binding) {
              if (binding.value !== binding.oldValue) {
                  binding.value ? el.play() : el.pause()
              }
          }
        },
        computed: {
            halfWidth() {
                return this.width / 2
            },
            halfHeight() {
                return this.height / 2
            },
            halfPoint() {
                return {
                    x: this.halfWidth,
                    y: this.halfHeight
                }
            },
            getHalfWidth: {
                get() {return this.getWidth / 2},
                set(val) {
                    return this.getWidth = val * 2
                }
            },
            computeData() {
                return Math.random()
            },
            matched() {
                return this.list.filter(function (el) {
                    return el.price <= this.budget
                }, this)
            },
            limited() {
                return this.matched.slice(0, this.limit)
            }
        },
        methods: {
            methodData() {
                return Math.random()
            }
        }
    }
</script>
