// root vue 객체 생성위해 함수 가져오기
import { createApp } from 'vue'
// root vue 객체 정의파일 가져오기
import App from './App.vue'
//import App from './components/CommonComponent.vue';
// vue router 가져오기 router를 처리하기 위한 가짜서버
import router from './router'

createApp(App).use(router).mount('#app')
