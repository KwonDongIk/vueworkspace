<div align = center>
  <img src="https://capsule-render.vercel.app/api?type=Venom&color=gradient&height=390&section=header&text=Vue%20js%20learning&fontSize=100&animation=fadeIn&fontAlignY=37&desc=Yedam%20Fullstack%20class&descAlignY=60&descAlign=79"/>
</div>
<hr>
</div>
<div align = center>
  자바스크립트 프레임워크 기간 실습
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
     	* 이 기술을 사용하면 전체 페이지를 새로고침하지 않아도 웹 페이지의 일 부분만 업데이트 가능

		* 주요 특징
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

    * npm run serve 서버실행
    * databinding 연속 추가 가능
      * 컴포넌트는 독립적이다.
    * .lazy
      * 지연 / 사용자 입력 확인 시 이벤트 처리
    * 컴포넌트, 데이터 바인딩 핵심 -_-;; 어렵다.

    * <input type="checkbox" v-model="chData" true-value="여" false-value="부">
    * <p>{{ chData }}</p>
      * ture, false value 대체값 설정 가능

    * <div>
        <input type="checkbox" value="서울" v-model="city">서울
        <input type="checkbox" value="대구" v-model="city">대구
        <p>{{ city }}</p>
      </div>
      * checkbox 배열 덮어쓰지 않는다. v-model = [] value 값 바뀌면 해당하는 value 값이 []안에 들어감
    
    * v-for="(prod, index) in products 반복문

    * 조건문
    * <div>
        <input type="number" v-model="grade">
        <p v-if="grade >= 90">성적 : A</p>
        <p v-else-if="grade >= 80">성적 : B</p>
        <p v-else-if="grade >= 70">성적 : C</p>
        <p v-else>성적 : D</p>
      </div>

    * v-model, v-show / data에 boolean값 넣으면 보여짐(check 유무에 따라..)

* 250401
  * Vuejs는..
    * SPA : 지향성
    * MVVM : 디자인 패턴
    * 데이터 바인딩
    * Virtual-Dom

  * <button onclick = "seleted()">
    * selected() 즉시호출
    * 함수 호출 구문으로 해석
    * 버튼 클릭 시 selected 함수가 실행되고 그 반환값이 이벤트 핸들러로 사용
      * 이벤트 핸들러
        * 이벤트 발생 시 사용되는 코드
    * 이벤트 객체를 사용하려면 onclick = "selected(event)"형태로 명시적으로 전달해야함
  * <button onclick = "selected">
    * 작동하지 않음
    * selected라는 변수를 찾음
    * 일반 값으로 해석
    * selected의 변수 값 반환

  * 이벤트 처리 v-on
    * @ 심볼로 사용가능
    * // default
      <tag event="EventHandler" />
    * // 심볼 @ 사용
      <tag @event="EventHandler" />
    * // 필요에 따라 매개변수를 넘기는 형태로 구현가능
      <tag @event="EventHandler(parameter)" />
    * // 하나의 이벤트에 여러 개의 이벤트핸들러를 연결할 수 있음
      <tag @event="EventHandler1(), EventHandler2()" />
    * // 이벤트 객체가 필요한 경우
      <tag @event="EventHandler($event)"/>

  * Event 객체 => 이벤트 버블링
    * 필드
      * target(고정) 실제 이벤트 발생
      * currentTarget (유동) 이벤트 버블링을 따라 이벤트가 발생되는 태그
    * 메서드
      * preventDefault(); 이벤트의 기본 동작을 취소, 오직 브라우저의 기본 동작만 방지
      * stopPropagation(); 이벤트 객체의 메서드, 이벤트의 추가적인 전파를 중지
      * .once 한번 핸들러 동작하면 동작안함
      * .stop 이벤트 버블링 막아버림

  * 부모 -> 자식 props
  * 자식 -> 부모 event

  * created : 생성
  * mounted : virtual-DOM => Real-DOM
  * updated : 데이터 변경
  * destroyed : 소멸

  * created
    * component 정순 app ->
  * mounted
    * component 역순 propscomponent -> app

  * ref
    * 요소에 접근.. js의 document.queryselect와 유사하다라고 보면됨

  * slot
    * modal layout
    * 컴포넌트 내에서 다른 컴포넌트를 사용할 때 쓰는 컴포넌트의 마크업을 재정의하거나 확장하는 기능
    * 이름없는애 default

* 250402
  * Axios
    * Ajax 밖에 안함
    * node.js와 브라우저를 위한 Promise 기반 HTTP 클라이언트

  * URL + METHOD 네이밍
  * Ajax
  * json

  * v-if v-for 태그안에 함께 있을 때..
    * 우선순위는 if가 높다.

  * browser..
    * Same Origin Policy
    * CORS
  
  * proxy
    * 중개

  * post(등록) -> put(수정)

  * router에게 일시키는 방법 push