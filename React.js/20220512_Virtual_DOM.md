# Virtual DOM

<image src="https://i.imgur.com/u6YnxUS.png">

## 브라우저 동작 원리

- 먼저 DOM 이 브라우저로 어떻게 동작되는지 살펴보고 Virtual DOM이 나오게된 배경에 대해 알아보자.

  ![DOM](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/webkitflow.png)

- 브라우저가 HTML을 전달받으면 , 이를 변환(parsing) 하고 노드들로 이루어진 DOM 트리를 만든다.

- Render 트리가 만들이지면, 각 노드들이 화면에서 정확히 어디에 나타나야 하는지에 대한 위치가 주어진다. 그 후, paint() 메서드를 호출하면 내가 구현하고 싶었던 화면이 출력된다.

- DOM은 해당 과정을 계속 반복한다. 즉, 오타 수정, 문구 제거 혹은 이미지를 첨부하는 사소한 일을 하더라도, DOM은 처음부터 다시 HTML을 파싱하여 DOM 트리를 만들고 CSS를 파싱하여 Render 트리를 만들고, 레이아웃을 입혀 출력한다.

- 과거에는 하나의 웹사이트에 몇 페이지 없었을 테지만, 현재 대부분의 웹사이트는 수십 개 심지어 수백, 수 천개의 페이지로 이루어져 있다. 겨우 오타 하나를 잡으려고 해도 전체 사이트를 다시 처음부터 렌더링 해야 하며 해당 오타를 찾기까지 너무 많은 시간이 들어 상당히 비효율적이다. 이에 따라 Virtual DOM 이 나왔다.

## Virtual DOM은 무엇인가?

- Virtual DOM은 가상의 DOM 으로 , 브라우저에 실제로 보여지는 게 아니라 그냥 메모리에 가상으로 존재하는 JS 객체이기 때문에 작동 성능이 실제로 브라우저에서 DOM을 보여주는 것보다 훨씬 속도가 빠르다.

- 수정사항이 여러가지가 있더라도 Virtual DOM은 한 번만 렌더링을 일으킨다.

- DOM 생성 전에 , 이전 상태값과 수정사항을 비교하여 달라진 부분만 DOM에게 한번에 전달하여 딱 한번만 렌더링을 진행한다.

- DOM에 직접 접근해도 문제가 되지 않지만 DOM이 직접 변경된다면 사소한 변경 사항에도 전체가 재 렌더링 되기 때문에 브라우저 과부하가 올 수 있다. 따라서 최대한 DOM에 직접 접근하지 않는것이 권장 된다.

Reference

> [DOM과 Virtual DOM 이란?](https://www.howdy-mj.me/dom/what-is-dom/)
