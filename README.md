<div align = center>
  <img src="https://capsule-render.vercel.app/api?type=Venom&color=gradient&height=390&section=header&text=Vuejs%20learning&fontSize=100&animation=fadeIn&fontAlignY=37&desc=Yedam%20Fullstack%20class&descAlignY=60&descAlign=77"/>
</div>
<hr>
</div>
<div align = center>
  날짜별 자바스크립트 프레임워크 실습
</div>

* 250328
  * Vue 실습
    * 데이터 바인딩
    * document.querySelect... 안 쓴다.
    * vue create ~
      * Babel 필수 >> JS 컴파일러 역할
      * Router
      * 3.x 감
      * component는 3개가 한 세트

* 250331
  * ajax 
	  * 웹 개발 기술
     	* 웹 페이지가 서버와 비동기적으로 데이터를 교환할 수 있게 해주는 기술
     	* 이 기술을 사용하면 전체 페이지를 새로고침하지 않아도 웹 페이지의
       	  일 부분만 업데이트 가능
		** 주요 특징
		  * 비동기 통신
			  * 사용자가 페이지를 계속 사용하는 동안 서버와 통신이 이루어짐
		  * 페이지 새로고침 없다
			  * 전체 페이지를 다시 로드하지 않고 필요한 데이터만 가져오는 거 가능

  * dom
    * 프로그래밍 언어에서 접근하고 조작할 수 있도록 하는 인터페이스
    * 문서의 노드의 계층 구조를 트리로 표현
    * html 요소들을 객체로 표현
    * 웹 페이지의 구조, 스타일, 내용을 동적으로 표현 가능
    * 사용자 이벤트에 반응하는 상호작용 가능

  * virtual dom
    * 가상
    * dom clone함
    * 실제 dom의 메모리 내 표현
    * 실제 dom 업데이트를 최소화하여 성능 향상
      * 작동방식
        * 상태 변경 발생 시 vitual dom에서 새로운 가상 트리 생성
        * 이전 vitual dom과 새 vitual dom을 비교
        * 실제로 변경된 부분만 식별
        * 변경된 부분만 실제 dom에 적용


  * [vue]
    * create : 생성 -> vue 객체
    * mount : virtual Dom(먼저 업데이트) => Real Dom(문제없으면 업뎃) / 시각적으로 화면에 보이는 걸 확인
    * update : 변경 (데이터 바인딩)
    * destroy : 소멸
    * property : vue가 가지는 데이터