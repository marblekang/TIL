## Redux 설치 & 사용환경 설정
### 1) 라이브러리 설치

```
npm install redux react-redux // redux, react-redux  두 개의 라이브러리 설치
```

### 2) 사용환경 설정
<br>

 2-1 ) `<Provider>` import 하기.

```javascript
(index.js)

import 많은곳;
import {Provider} from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>

);
```
<br>

 2-2 ) state 값 공유를 원하는 컴포넌트 감싸기.
 - `<APP>` 컴포넌트를 감싸면 `<APP>` 컴포넌트와 그 안에 있는 모든 HTML, 컴포넌트는 전부 state를 직접 , props 전송 없이 사용할 수 있다. 

<br>
 
 2-3 ) `createStore()`
 ```javascript
 (index.js)

import 많은곳;
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let store = createStore(()=>{ return [{id : 0, name : 'awesomeShoes', quan : 2}]  })

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>

);
 ```
  - import 한 다음 `createStore(콜백함수)` 이렇게 사용하면 된다. 콜백 함수 내에는 내가 원하는 state 초기값을 return 하게 작성하면 된다.

<br>

  2-4 ) `<Provider>` 에 만든 state를 props 처럼 등록하기.
  ```javascript
  (index.js)

import 많은곳;
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let store = createStore(()=>{ return [{id : 0, name : '멋진신발', quan : 2}]  })

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>

);
  ```
  - 이제 하위 컴포넌트들이 props 전송 없이 state를 사용 가능하다. 

  ## store 에 있는 state 데이터 꺼내쓰는 방법.
  - 데이터를 꺼내쓰기 위해서는 store 안에 있는 데이터를 props의 형태로 등록해야 사용 가능하다. 

  1 ) 데이터 사용을 원하는 컴포넌트 파일 하단에 function을 하나 만들고 , export default conncect() (connect 함수는 파일 상단에 import 해와야 한다.)
  
```javascript
  (Cart.js)

import 많은곳;
import {connect} from 'react-redux';
function Cart(){
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </Table>
    </div>
  )
}

function stateToProps(state){
  return {
    state : state
  }
}

export default connect(stateToProps)(Cart);
```
- 화면 하단 function은 store 안에 있던 state를 props로 만들어 주는 역할이다. return 내에 `작명:state` 이렇게 적으면 store안의 모든 state 데이터가 props로 등록되고 , 작명한 이름의 데이터에 담긴다. 

- connect 함수에 위의 함수를 집어넣고 해당 컴포넌트도 함께 소괄호에 집어넣으면 redux store에 있던 데이터들이 props로 엮인 채 컴포넌트가 export 된다.

<br>

- 마지막으로 props 사용법에 맞춰  function Cart(props) 의 형식으로 파라미터 추가하면 필요한 곳에서 작명한 props 이름으로 데이터를 꺼내 사용할수 있다. 

```javascript
(Cart.js)

import 많은곳;
import {connect} from 'react-redux';
function Cart(props){
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        <tr>
          <td>1</td>
          <td>{props.state[0].name}</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </Table>
    </div>
  )
}

function stateToProps(state){
  return {
    state : state
  }
}

export default connect(stateToProps)(Cart);
```

