# 자바스크립트 동작 원리

## 싱글 스레드

- 자바스크립트는 한번에 한가지 일 밖에 처리할 수 없다.
- 현재 실행하고 있는 함수가 있는 경우에 , 다른 일을 할수 없고 다른일은 중단되게 된다.
- 브라우저에서 오래 걸리는 작업이 실행될 경우, 웹페이지의 UI는 멈춰버리고 , 유저는 어떤 조작도 할 수 없게된다. 이런 상황에서 사용하는 것이 비동기 콜백이다.
- 비동기 콜백에 대해 이해하기 위해서는 `JS Engine` , `Web API`, `Event Loop` 에 대한 이해가 필요하다.

---

## JS 엔진

- JS엔진은 JS코드를 이해하고 실행을 도와준다.
- 대표적으로 V8엔진(chrome,Node.js에서 사용)이 있다.

---

## JS 엔진의 구성요소와 브라우저 환경에서의 동작원리

![JS 엔진의 구성요소와 동작원리](https://miro.medium.com/max/1400/1*i9nTlOSPH3q-sCd5-WHg-g.png)

### Memory Heap

- 메모리의 할당이 일어나는 곳 이다.
- 선언한 변수가 어디에 저장되어 있는지 기록하는 장치이다.

### Call Stack

- 코드 실행에 따라 호출 스택이 쌓이는 곳 , 함수가 실행되는 공간이다.

- 자바스크립트는 싱글 스레드 기반 언어로, 호출 스택이 하나이다. 따라서 한번에 한 작업만 처리할 수 있다.

- 작업이 오래 걸리는 함수는 일단 `Web API` 로 보내두고 `Call Stack` 영역에 있는 작업 먼저 순서대로 실행한다.

- `Call Stack` 영역의 작업이 모두 실행되고 나서 비워지면 `Web API`에 의해 비동기 처리 함수들이 `Callback Queue` 영역으로 보내지는데 , 이 때 `Call Stack` 영역과 `Callback Queue` 영역이 둘 다 비워져 있을 때 하나씩 순차적으로 `Callback Queue` 영역으로 보내진다.

- `Callback Queue` 영역에 있던 작업은 `Call Stack` 영역이 완전히 비워지면 `Call Stack` 영역으로 이동하여 실행된다.

### Web API(Background)

- 브라우저 에서 동작할때는 Web API, Node.js 환경에서 동작할때는 Background 이다.

- DOM , Ajax , setTimeout() , Event Handler 등이 브라우저에서 제공하는 API 이다.

- 비동기 처리되는 함수들은 `Call Stack` 에서 처리되는 것이 아니라 Web API 로 보내진다. (Node.js 에서는 Background가 동일한 작업을 수행한다.)

- `Web API` 는 비동기 함수의 콜백함수를 `Callback Queue` 로 보낸다.

```js
예시;

console.log(1);

setTimeout(() => {
  console.log(2);
}, 500);

console.log(3);

//setTimeout() 함수는 Web API로 이동하고, Web API는 setTimeout() 의 인자로 들어간 함수를 Callback Queue 로 보낸다.
```

### Event Loop

- `Event Loop` 는 `Call Stack` 과 `Callback Queue` 의 상태를 체크하여 `Call Stack` 이 빈 상태가 되면 `Call Stack` 의 첫번째 콜백 함수 하나를 `Call Stack` 으로 보낸다. 이러한 행동의 반복을 `tick` 이라고 한다.

---

## 정리

1. Call Stack 은 함수가 실행되는 공간으로 하나씩 순차적으로 실행된다. 작업이 오래걸리는 함수는 Web API로 보내진다.

2. Web API 에서는 비동기 처리되는 함수를 보관하다가 CallStack 과 Callback Queue 가 비워지면 비동기 처리 함수의 콜백함수를 하나씩 Callback Queue로 보낸다.

3. Event Loop는 Call Stack이 빈 상태가 되면 Callback Queue 에 있는 콜백함수를 Call Stack으로 보낸다.

---

> Reference

[코딩애플 - 개발자 90%가 모르는 자바스크립트 동작원리](https://www.youtube.com/watch?v=v67LloZ1ieI&t=549s)

[조은길 Velog - JS 비동기의 핵심 Event Loop](https://velog.io/@gil0127/JS-%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%95%B5%EC%8B%AC-Event-Loop)
