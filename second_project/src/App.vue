<template>
  <div>
    <input type="text" v-model.lazy="selected">
    <component v-bind:is="selected"></component>
  </div>
</template>
<script>
  import PropsCom from './components/PropsComponent.vue';

  export default{
    data(){
      return{
        selected : 'PropsCom',
      }
    },
    components : {
      PropsCom,
    },
    created(){
      console.log('App.vue Created');
    },
    mounted(){
      console.log('App.vue Mounted');
    }
  }
</script>
