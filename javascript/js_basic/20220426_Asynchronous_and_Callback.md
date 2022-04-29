# 비동기적 처리와 콜백함수✏️

##  동기적 처리 
- 자바스크립트는 일반적인 코드를 작성하면 동기적 처리 된다. 동기적 처리가 된다는 것은 코드를 적은 순서대로 윗줄부터 차례로 실행 된다는 뜻이다. 
---
<br>

## 비동기적 처리 
- `ajax`, `EventListener`, `setTimeout` 등 의 처리시간 긴 함수들은 비동기적 처리를 지원한다. 비동기적 처리를 한다는 것은 순차적으로 실행되지 않고 처리가 완료되면 실행된다. 

```javascript
console.log(1+1)

function timeout(){
  setTimeout(()=>{console.log(1+2)},3000)
}

console.log(1+3)
```

위 코드의 출력 결과는 아래와 같다. 이처럼 순차적으로 실행하지 않고 처리가 오래걸리는 작업은 비동기적 API를 제외한 모든 코드가 실행된 이후에 실행하는게 비동기적 처리이다.

```text
2
4
3
```
### 비동기적 처리의 효용
- 예를 들어 ajax 통신과 같이 데이터를 서버로 부터 받아오는 어플리케이션을 만들었다고 하면, 서버로부터 데이터를 받아와서 처리해야 하므로 , 데이터를 받아오는 코드는 전체 코드중 최 상단에 위치해야 한다. 받아오는 데이터의 크기가 작고 갯수가 적다면 크게 상관 없을 수 있으나 , 받아오는 데이터의 크기가 크고 많다면 모든 데이터를 수신한 다음에야 다른 코드를 실행할 수 있으므로 데이터를 받아오는 동안 프로그램은 사실상 멈춰 있는 것이나 다름이 없다. 이러한 불편함을 없애기 위해 데이터의 수신과 처리시간이 오래걸리는 코드들을 비동기적으로 처리하는 것이다. 
---
<br>

## 콜백함수란 무엇인가?
- 콜백함수는 함수의 파라미터로 들어가는 함수를 의미하며 , 순차적으로 코드를 실행하고 싶을때 사용한다. 
- 어떤 함수가 실행되고나서 바로 다음에 실행되게 하고 싶은 함수가 있으면 사용한다. 
```javascript
function timeout(){
  setTimeout(()=>{
    console.log('Start!')
  },0)
}

timeout();

console.log('End!')
```
- `setTimeout()` 은 비동기적 처리를 지원하므로 위 코드를 실행하면 아래와 같다. 

```text
End!
Start!
```

- 그런데 `timeout` 함수가 실행되고 나서 `console.log('End!')`  가 실행되게 하고 싶으면

```javascript
function timeout(callback){
  setTimeout(()=>{
    console.log('Start!')
    callback() //실행 순서 지정
  },0)
}
        // timeout의 인수 콜백함수
timeout(function(){console.log('End!')});
```
```text
Start!
End!
```


출처

https://codingapple.com/course-status/

https://pro-self-studier.tistory.com/89