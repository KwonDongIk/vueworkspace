<template>
  <div>
    <input type="number" v-model="price"> 원
    <br>
    <input type="number" v-model="count"> 개
    <p> 과세 금액 : {{ amount }} </p>
    <p> 부가세 10% : {{ tax }} </p>
    <p> 결제 금액 : {{ total }} </p>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        price : 0,
        count : 0
      }
    },
    computed : {
      amount(){
        return this.price * this.count;
      },
      tax(){
        return this.amount * 0.1;
      },
      total(){
        return this.amount + this.tax;
      }
    }
  }
</script>