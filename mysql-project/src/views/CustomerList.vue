<!-- views/customerList.vue -->
<template>
  <div class="container">
    <table class="table">
      <caption>total:{{ count }}</caption>
        <thead>
          <tr>
            <th>NO</th>
            <th>아이디</th>
            <th>이름</th>
            <th>연락처</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="count > 0">
            <tr v-for="(info, idx) in customerList" v-bind:key="info.id">
              <td>{{ idx+1 }}</td>
              <td>{{ info.id }}</td>
              <td>{{ info.name }}</td>
              <td>{{ info.phone }}</td>
            </tr>
          </template>
          <tr v-else>
            <td colspan="4">
              현재 데이터가 존재하지 않아요.
            </td>
          </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios' // => ajax

  export default{
    data(){
      return{
        customerList : [],
      }
    },
    computed : {
      count(){
        return this.customerList.length;
      }
    },
    created(){
      // 컴포넌트가 초기화할 데이터 호출
      this.getCustomerList();
    },
    methods : {
      async getCustomerList(){
        let ajaxRes = await axios.get(`api/customers`)
                                 .catch(err => console.log(err));
        this.customerList = ajaxRes.data;
      }
    }
  }
</script>