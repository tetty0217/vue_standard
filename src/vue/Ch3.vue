<template>
    <div v-bind:class="{'contents-wrap': true}">
        <div>
            <h2>Click event handler</h2>
            <p>counter: {{ count }}</p>
            <button @click="increment">+</button>
        </div>
        <div>
            <h2>Image event handler</h2>
            <img v-bind="imageEv"
                 v-bind:alt="page+'_'+imageEv.alt+'_'+imageEv.id"
                 v-bind:class="{hide: !show}"
                 v-on:load="show=true">
        </div>
        <div>
            <h2>Form enter binding</h2>
            <input v-model="message">
            <p>{{ message }}</p>
        </div>
        <div>
            <h2>Checkbox binding</h2>
            <input type="checkbox" v-model="checked"><span>← click!!</span>
            <p>{{ checked }}</p>
            <input type="checkbox" v-model="checkedText" true-value="yes" false-value="no"><span>← click!!</span>
            <p>{{ checkedText }}</p>
        </div>
        <div>
            <h2>Multi checkbox binding</h2>
            <input v-model="checkVal" type="checkbox" value="A">
            <input v-model="checkVal" type="checkbox" value="B">
            <input v-model="checkVal" type="checkbox" value="C">
            <p>{{ checkVal }}</p>
        </div>
        <div>
            <h2>Radio binding</h2>
            <label>
                <input v-model="radioVal" type="radio" value="A" checked>
                <input v-model="radioVal" type="radio" value="B">
                <input v-model="radioVal" type="radio" value="C">
            </label>
            <p>→{{ radioVal }}</p>
        </div>
        <div>
            <h2>File binding</h2>
            <input type="file" @change="handleChange">
            <div v-if="bindImage.src" :class="page+'_image_wrap'">
                <img v-bind="bindImage"
                     v-bind:alt="page+'_'+bindImage.alt+'_'+bindImage.id"
                     v-bind:src="bindImage.src"
                >
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Ch3",
        data: function () {
            return {
                page: 'Ch3',
                count: 0,
                message: 'initial message',
                checkedText: 'no',
                checkVal: [],
                radioVal: '',
                show: false,
                checked: false,
                bindImage: {
                    id: 'b_1',
                    src: this.preview,
                    alt: 'bindImage',
                },
                imageEv: {
                    id: 1,
                    src: 'http://via.placeholder.com/350x150',
                    alt: 'image'
                }
            }
        },
        methods: {
          increment() {
              this.count += 1
          },
          handleChange(event) {
              let file = event.target.files[0];
              if (file && file.type.match(/^image\/(png|jpeg)$/)) {
                  this.bindImage.src = window.URL.createObjectURL(file);
                  console.log(this.bindImage.src);
              }
          }
        }
    }
</script>