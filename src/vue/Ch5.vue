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
        <div>
            <h2>Toggle Component</h2>
            <button v-on:click="toggle^=1">Toggle</button>
            <div v-bind:is="component"></div>
        </div>
        <div>
            <h2>Usage Mixin</h2>
            <mix-in-a></mix-in-a>
            <mix-in-b></mix-in-b>
        </div>
        <div>
            <h2>Message Board Component</h2>
            <button v-on:click="currentMessage='message-board'">message list</button>
            <button v-on:click="currentMessage='message-form'">message form</button>
            <keep-alive>
                <div v-bind:is="currentMessage"></div>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import MyComponent from '../components/ch5Components/MyComponent'
    import SimpleSlotComponent from '../components/ch5Components/SimpleSlotComponent'
    import MyCalendarComponent from '../components/ch5Components/MyCalendarComponent'
    import SyncBindComponent from '../components/ch5Components/SyncBindComponent'
    import ToggleAComponent from '../components/ch5Components/ToggleAComponent'
    import ToggleBComponent from '../components/ch5Components/ToggleBComponent'
    import AttackedComponent from '../components/ch5Components/AttackedComponent'
    import RefChildComponent from '../components/ch5Components/RefChildComponent'
    import SendEventComponent from '../components/ch5Components/SendEventComponent'
    import MessageBoardComponent from '../components/ch5Components/MessageBoardComponent'
    import MessageFormComponent from '../components/ch5Components/MessageFormComponent'

    const mixin = {
        created () {
            this.hello()
        },
        methods: {
            hello () {
                console.log('Mixin->hello()')
            }
        }
    };

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
        MixinAComponent = {
            mixins: [mixin],
            template: '<p>MixinAComponent</p>'
        },
        MixinBComponent = {
            mixins: [mixin],
            template: '<p>MixinBComponent</p>'
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
                currentMessage: 'message-board',
                componentTypes: ['toggle-a', 'toggle-b'],
                hp: 100,
                toggle: 0,
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
            'send-event': SendEventComponent,
            'attacked': AttackedComponent,
            'ref-child': RefChildComponent,
            'simple-slot': SimpleSlotComponent,
            'my-calender': MyCalendarComponent,
            'sync-bind': SyncBindComponent,
            'toggle-a': ToggleAComponent,
            'toggle-b': ToggleBComponent,
            'mix-in-a': MixinAComponent,
            'mix-in-b': MixinBComponent,
            'message-board': MessageBoardComponent,
            'message-form': MessageFormComponent
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
        },
        computed: {
            component () {
                console.log (this.componentTypes[this.toggle])
                return this.componentTypes[this.toggle]
            }
        }
    }
</script>

<style scoped>

</style>