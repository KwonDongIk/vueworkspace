<!-- views/CustomerAdd.vue -->
 <template>
  <div class="container">
    <div class="row">
      <label for="">이름</label>
      <input type="text" v-model="info.name">
      <div class="form-text text-danger" :class="{'warning' : nameOk}">사용 가능한 이름이 아니에요.</div>
      <div class="form-text text-success" :class="{'warning' : !nameOk}">사용 가능한 이름이에요.</div>
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
      <button class="btn btn-info" v-on:click="addCustomer" :disabled="!nameOk">등록</button>
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
    methods : {
      async addCustomer(){
      let ajaxRes = await axios.post(`/api/customers`, this.info)
                               .catch(err => console.log(err));
      
      let sqlRes = ajaxRes.data;
      let custId = sqlRes.insertId;
      if(custId > 0){
        alert('정상 등록 완료되었어요.');
        this.$router.push({name:'customerInfo', query : { id : custId}});
      }else{
        alert('다시 확인해주세요. 등록 되지않았어요.');
      }
      }
    },
    computed:{
      nameOk(){
        return this.info.name != null && this.info.name != '';
      }
    }
  }
</script>
<style>
  .warning {
    display: none;
  }
</style>