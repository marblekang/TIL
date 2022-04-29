# 실행 컨텍스트 (Execution context)와 콜 스택(Call Stack)

## 실행 컨텍스트가 무엇인가?
- 실행 컨텍스트는 자바스크립트 함수가 실행되는 환경을 의미한다. 자바스크립트에서 대표적으로 두가지 타입의 실행 컨텍스트가 있다.

1 ) 전역 컨텍스트(Global Execution context)

- 자바스크립트 엔진이 처음 코드를 실행할때 전역 컨텍스트가 생성된다. 프로그램의 모든 코드, 동작 환경을 포함하는 전역 환경으로 프로그램(혹은 페이지)가 종료 될때까지 유지한다.
- 생성 과정에서 전역객체인 Window Object(Node는 Global)를 생성하고 this가 Window 객체를 가리키도록 한다. 

2 ) 함수 컨텍스트(Function Execution context)

- 자바스크립트 엔진은 함수가 호출 될 때마다 호출된 함수를 위한 실행 컨텍스트를 생성한다. 모든 함수는 호출되는 시점에 자신만의 실행 컨텍스트를 가진다. 

> 자바스크립트 엔진은 처음 코드를 실행할때 한번만 전역 컨텍스트를 생성하며 함수를 호출할 때 마다 함수컨텍스트를 생성한다. 

---
<br>

## 콜 스택이 무엇인가?

- 콜 스택 이란 자바스크립트 코드가 실행되며 생성되는 실행 컨텍스트를 저장하는 자료구조 라고 정의할 수 있다.

  1 ) 함수를 호출하면 실행 컨텍스트가 생성되고 이를 콜 스택에 추가한 다음 함수를 실행하기 시작한다.

  2 ) 함수에 의해 호출되는 모든 함수(내부함수) 콜 스택에 추가되고 해당 위치에서 실행한다.

  3 ) 함수의 실행이 종료되면 해당 실행 컨텍스트를 제거한 후 중단된 시점부터 다시 시작한다.

  4 ) 스택이 할당된 공간보다 많은 공간을 차지하면 'stack overflow' 에러가 발생한다. 

 ## 콜스택 구조

 ```javascript
 function first(){
   console.log('first')
   second();
 }

 function second(){
   console.log('second')
 }

 first();
 ```

- 위 코드를 그림으로 나타내면 아래와 같다.

 ![](https://miro.medium.com/max/1400/1*ctt_X7TP0GyR4W9XKuwQWQ.png)


 step 1 ) 전역 컨텍스트 생성

 step 2 ) first 함수 호출하면서 first 함수를 위한 함수 컨텍스트를 생성하고 콜스택에 추가한다.

 step 3 ) first 함수 내부에서 console.log 함수 발견하고 이를 위한 실행 컨텍스트 생성하고 콜스택에 추가.

 step 4 ) console.log('first') 함수가 종료되고 콜스택에서 제거.

 step 5 ) first 함수 내부에 second 함수 발견하고 second 함수를 위한 함수 컨텍스트 생성하고 콜스택에 추가

 step 6 ) seconde 함수 내부에서 console.log 함수 발견하고 이를 위한 함수 컨텍스트 생성하고 콜스택에 추가.

 step 7 ) console.log('second') 함수가 종료된 후 콜스택 에서 제거.

 step 8 ) second 함수가 종료되고 콜스택에서 제거.

 step 9 ) first 함수가 종료된 후 콜스택에서 제거.

 step 10 ) 모든 코드의 실행이 끝난뒤에 자바스크립트 엔진은 콜스택에서 전역 컨텍스트를 제거.

<br>

 > Reference
 
 https://medium.com/sjk5766/call-stack%EA%B3%BC-execution-context-%EB%A5%BC-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90-3c877072db79

   