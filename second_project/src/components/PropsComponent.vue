<template>
  <div>
    <PageTitle title="First"/>
    <PageTitle title="Today is ..."/>
    <hr>
    <PageContent v-bind:title="header"
                 v-bind:count="(10+15)"
                 :writer="['Ronaldo']"
                 :regdate="20250102"
                 :content="{
                              first : 'Node.js',
                              second : 'Vue.js',
                           }"/>
  </div>
</template>
<script>
import PageTitle from './PageTitle.vue';
import PageContent from './PageContent.vue';

export default {
  data(){
    return{
      header : '게시글 조회',
      info : {
        title : 'Today is',
        count : 5,
        writer : 'Ronaldo',
        regdate : '2025-01-02',
        content : 'No Content'
      },
      num : 0
    }
  },
  components : { // 자식컴포넌트 등록
    PageTitle, PageContent
  },
  created(){
    console.log('PropsComponent.vue Created');
  },
  mounted(){
    console.log('PropsComponent.vue Mounted');
  }
}
</script>


