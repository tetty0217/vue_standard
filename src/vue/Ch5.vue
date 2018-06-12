<template>
    <div v-bind:class="{'contents-wrap': true, 'components-wrap': true}">
        <div>
            <h2>Import Component</h2>
            <my-component></my-component>
        </div>
        <div>
            <h2>Global Component</h2>
            <global-component></global-component>
        </div>
        <div>
            <h2>Text send to child Component</h2>
            <comp-child val="this child A (text)"></comp-child>
            <comp-child val="this child B (text)"></comp-child>
        </div>
        <div>
            <h2>Value send to child Component</h2>
            <comp-child :val="valueA"></comp-child>
            <comp-child :val="valueB"></comp-child>
        </div>
        <div>
            <h2>Props send to child component</h2>
            <ul>
                <props-send v-for="item in monsterList"
                            v-bind:key="item.id"
                            v-bind:name="item.name"
                            v-bind:hp="item.hp"></props-send>
            </ul>
        </div>
        <div>
            <h2>Solved props type Component</h2>
            <input v-model="typeVal">
            <props-type :val="typeVal"></props-type>
        </div>
        <div>
            <h2>Send event to parent component</h2>
            <send-event v-on:childs-event="parentsMethod"></send-event>
        </div>
        <div>
            <h2>Child send to parent component</h2>
            <ul>
                <attacked v-for="item in list"
                          v-bind:key="item.id"
                          v-bind="item"
                          v-on:attack="handleAttack">
                </attacked>
            </ul>
        </div>
        <div>
            <h2>Ref to child component</h2>
            <ref-child ref='child'></ref-child>
            <button @click="handleRef">click!</button>
        </div>
        <div>
            <h2>Slot</h2>
            <simple-slot>
                <header slot="header">
                    Hello Vue.js!
                </header>
                Vue.js is JS Framework!
            </simple-slot>
        </div>
        <div>
            <h2>Component interactive</h2>
            <my-calender v-model="current"></my-calender>
        </div>
        <div>
            <h2>Sync binding Component</h2>
            <sync-bind :name.sync="name"
                       :hp.sync="hp"></sync-bind>
        </div>
    </div>
</template>

<script>
    import MyComponent from '../components/ch5Components/MyComponent'
    import SimpleSlotComponent from '../components/ch5Components/SimpleSlotComponent'
    import MyCalendarComponent from '../components/ch5Components/MyCalendarComponent'
    import SyncBindComponent from '../components/ch5Components/SyncBindComponent'

    const
        compChildComponent = {
            template: '<p>{{ val }}</p>',
            props: ['val']
        },
        propsComponent = {
            template: '<li>{{ name }} HP.{{ hp }}</li>',
            props: ['name', 'hp']
        },
        propsTypeComponent = {
            template: '<p>{{ val }}</p>',
            props: {
                val: String
            }
        },
        sendEventComponent = {
            template: "<button @click='handleClick'>click!</button>",
            methods: {
                handleClick(){
                    this.$emit('childs-event')
                }
            }
        },
        attackedComponent = {
            template: '<li>{{ name }} HP.{{ hp }}\<button v-on:click="doAttack">attack</button></li>',
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
        },
        refChildComponent = {
            template: "<button>click!</button>",
            created() {
                console.log('ref: created()');
                this.$on('open', () => {
                    console.log('refChild->ref: this.$on()');
                })
            }
        };
    export default {
        name: "Ch5",
        data: () => {
            return {
                valueA: 'this child A (value)',
                valueB: 'this child B (value)',
                typeVal: '',
                current: '',
                name: 'slime',
                hp: 100,
                list: [
                    { id: 1, name: 'slime', hp: 100 },
                    { id: 2, name: 'goblin', hp: 200 },
                    { id: 3, name: 'dragon', hp: 500 }
                ],
                monsterList: [
                    { id: 1, name: 'slime', hp: 100 },
                    { id: 2, name: 'goblin', hp: 200 },
                    { id: 3, name: 'dragon', hp: 500 }
                ]
            }
        },
        components: {
            'my-component': MyComponent,
            'comp-child': compChildComponent,
            'props-send': propsComponent,
            'props-type': propsTypeComponent,
            'send-event': sendEventComponent,
            'attacked': attackedComponent,
            'ref-child': refChildComponent,
            'simple-slot': SimpleSlotComponent,
            'my-calender': MyCalendarComponent,
            'sync-bind': SyncBindComponent
        },
        methods: {
            parentsMethod () {
                alert('caught event!!')
            },
            handleAttack (id) {
                const item = this.list.find((el)=>{return el.id === id});
                if (item !== undefined && item.hp > 0) item.hp -= 10
            },
            handleRef () {
                console.log('handleRef()');
                this.$refs.child.$emit('open')
            }
        }
    }
</script>

<style scoped>

</style>