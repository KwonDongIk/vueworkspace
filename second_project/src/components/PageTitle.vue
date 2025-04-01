<template>
  <h2>{{ title }}</h2>
</template>
<script>
  export default{
    // data(){
    //   return{
    //     title : 'hi',
    //   }
    // }
    props : ['title'],
    created(){
      console.log('PropsComponent.vue Created');
    },
    mounted(){
      console.log('PropsComponent.vue Mounted');
  }
  }
  
</script>