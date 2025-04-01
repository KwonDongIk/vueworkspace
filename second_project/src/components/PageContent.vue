<template>
  <table>
    <tr>
      <th>제목</th>
      <td>{{ title }}</td>
      <th>조회수</th>
      <td>{{ readInfo }}</td>
    </tr>
    <tr>
      <th>작성자</th>
      <td>{{ writer }}</td>
      <th>작성일</th>
      <td>{{ regdate }}</td>
    </tr>
    <tr>
      <th>내용</th>
      <td width="200px" height="100px">{{ content }}</td>
    </tr>
    <tr>
      <td>
      <button @click="updateInfo">업데이트</button>
      </td>
    </tr>
  </table>
</template>
<script>
  export default{
    //props : ['title', 'count', 'writer', 'regdate', 'content'],
    props : {
      title : String,
      count : {
        type : Number,
        default : 0
      },
      writer : {
        type : [String, Object],
        default : function(){
          return{first : 'Ronaldo', second : "Messi"}
        }
      },
      regdate : {
        required : true,
        validator : function(value){
          // yyyy-mm-dd
          let format = /[1-2][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]/ // 날짜 정규표현식
          return format.test(value);
        }
      },
      content : String
    },
    computed : {
      readInfo(){
        return this.count+1;
      }
    },
    methods : {
      updateInfo(){
        this.$emit('update-info', this.readInfo);
      }
    }
      
  }
</script>
<style>

</style>