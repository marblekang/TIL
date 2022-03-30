## Redux 란? 
<img src="https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/07/redux-logo.png?resize=980%2C490&ssl=1">

- 리덕스(Redux)는 Javascript app을 위한 예측가능한(predictable) state container이다. 리액트 뿐만 아니라 Augular, jQuery, vanilla JavaScript 등 다양한 framework와 작동되게 설계되었다. 즉, 리액트만을 위한 Library는 아니다. 리덕스는 리액트의 멋진 보완재이다. action에 반응하여 상태를 변경하기 때문에, 리액트 같이 UI를 상태에 대한 함수로 기술하는 프레임워크와 특히 잘 어울리기 때문이다.

## React 에 Redux 가 필요한 이유는 무엇인가?
- 리액트로 프로젝트를 진행하게 되면, Component는 local state를 가지게 되고, 어플리케이션은 global state를 가지게 된다.

    
    ```
    local state : 각각의 Component가 가지는 state. 어플리케이션은 이 state를 기반으로 만들어진다.

    global state : 예를 들어, 유저의 로그인의 유무에 따라 어플리케이션의 state가 달리 보이는 것을 들 수 있다. 어플리케이션 전체에서 global state는 유지, 즉 local state는 global state를 공유하게 되는 것이다.
    ```
    

- 리액트로만 프로젝트를 진행하게 될 경우 우리의 어플리케이션은 local state, 그리고 global state를 관리하기 어렵다. 

## Redux를 사용하지 않을 경우 문제점
    
### 1 ) local state의 전달이 어렵다. 
- 프로젝트의 규모가 커지고 컴포넌트 수가 늘어남에 따라 , props로만 state를 전달하게 되면 하위 컴포넌트에 state를 전달하기 위해 해당 state가 필요하지 않은 컴포넌트에도 필요없는 데이터의 흐름이 생기게 된다. 또한 제대로 props가 전달되지 않을 경우 그 중간에 낀 모든 컴포넌트 에서 일일이 문제점을 찾아 봐야 한다. 

### 2) global state의 상태관리가 어렵다.
- 대부분의 어플리케이션에서는 로그인 기능이 구현되어야 한다. 유저마다의 개인정보, 그리고 결제 정보등이 있어야 하기 때문이다. 하지만 Redux를 사용하지 않으면 global state 를 모든 컴포넌트에 props로 계속해서 전달해야 하는데 이는 아주 복잡한 절차를 거치게 된다. 하지만 Redux를 사용하면 하나의 store 를 통해 global state를 포함한 모든 state를 저장, 유지할수 있게 되며 원하는 컴포넌트에만 데이터를 전달할 수 있게 된다. 