<!-- views/CustomerUpdate.vue -->
<template>
  <div class="container">
    <div class="row">
      <label for="">아이디</label>
      <input type="text" v-model="info.id" readonly>
    </div>
    <div class="row">
      <label for="">이름</label>
      <input type="text" v-model="info.name">
    </div>
    <div class="row">
      <label for="">이메일</label>
      <input type="email" v-model="info.email">
    </div>
    <div class="row">
      <label for="">연락처</label>
      <input type="tel" v-model="info.phone">
    </div>
    <div class="row">
      <label for="">주소</label>
      <input type="text" v-model="info.address">
    </div>
    <div class="row">
      <button class="btn btn-warning" v-on:click="updateCustomer">수정</button>
    </div>
  </div>
 </template>
<script>
import axios from 'axios'

export default{
  data(){
    return{
      info : {
        name : null,
        email : null,
        phone : null,
        address : null,
      }
    }
  },
  created(){
    // 수정 1) 사용자가 선택한 대상의 원래 데이터 조회
    // => 단건조회
    const selectId = this.$route.params.custId;
    this.getCustomerInfo(selectId);
  },
  methods : {
    async getCustomerInfo(id){ // http://localhost:3000/customers/1
      let ajaxRes = await axios.get(`/api/customers/${id}`) // /api/customers/1
                              .catch(err => console.log(err));
      this.info = ajaxRes.data;
    },
    async updateCustomer(){
      let updateDta = {
        name : this.info.name,
        email : this.info.email,
        phone : this.info.phone,
        address : this.info.address,
      }
      let ajaxRes = await axios.put(`/api/customers/${this.info.id}`, this.info)  // post(등록) -> put(수정)
                             .catch(err => console.log(err));
    
      let sqlRes = ajaxRes.data;
      let result = sqlRes.affectedRows;
      if(result > 0){
        alert('정상적 수정 완료되었어요.');
      }else{
       alert('다시 확인해주세요. 수정 되지않았어요.');
     }
    }
  }
}
</script>