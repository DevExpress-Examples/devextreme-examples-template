<template>
  <div>
     <DxButton :text="getText" @click="clickHandler" />
  </div>
</template>

<script>

import DxButton from 'devextreme-vue/button';

export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    DxButton
  },
  data(){
     return {
        count: 0
     }
  },
  computed: {
    getText(){
       return `Click count: ${this.count}`;
    }
  },
  methods: {
    clickHandler(){
        this.count+=1;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
