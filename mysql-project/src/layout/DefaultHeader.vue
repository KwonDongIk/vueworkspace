<!-- layout/DefaultHeader.vue -->
<template>
  <nav class="nav justify-content-center" id="nav_1">
    <router-link to="/">Home</router-link> |
    <router-link to="/customerList">전체조회</router-link> |
    <router-link to="/customerInfo">고객정보</router-link> |
    <router-link to="/customerAdd">회원가입</router-link> |
    <router-link to="/customerUpdate">회원수정</router-link>
  </nav>
</template>
<style>
  #nav_1{
    margin: 100px;
    font-size: 50px;
  }
</style>