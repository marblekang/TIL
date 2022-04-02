## 1. reducer 란 무엇인가?
 - redux 에서 state를 수정하고 싶으면 state 데이터의 수정 방법을 index.js 에 미리 정의해두어야 하는데 , 수정하는 방법을 만들어 두는것이 reducer 이다. reducer 안에는 state의 초기값과 데이터 수정 방법을 집어 넣는다.
<br>

## 2. reducer를 이용한 state 데이터 수정 하는 방법.
```javascript
(index.js)

let initVal = [
  {id: 0, name: 'awesomeShoes', quan : 2},
  {id: 1, name: 'awesomeShoes2', quan : 1}
];

function reducer(state = initVal, action){
  if(action.type === 'incQuan'){
    let copy = [...state];
    copy[0].quan++;
    return copy
  } else if(action.type === 'decQuan'){
    let copy = [...state];
    copy[0].quan--;
    return copy
  } else{
    return state
  }
}

```

#### 2-1 ) 데이터 수량을 증가시키기 위한 `incQuan` , 감소시키기 위한 `decQuan` 이라는 데이터 수정방법 이름을 작명해서 넣어준다. 

    `(action.type === 수정 방법 작명)`

#### 2-2 ) if문 안에는 'incQuan' 라는 요청이 들어올 경우, else if문에는 'decQuan'라는 요청이 들어올 경우 수정방법 정의.

#### 2-3 ) else문에는 기본 state를 return 하도록 정의.
<br>

## 3. reducer가 더 필요한 경우에는?
- reducer가 여러개 필요하면 다른 이름의 reducer2 와 reducer2의 초기값을 하나 더 만들고 combineReducers() 함수안에 집어넣은 후에 createStore()안에 넣으면 된다.

```javascript
(index.js)

import {combineReducers, createStore} from 'redux';

let alertInitVal = true; // 

function reducer2(state = alertInitVal, action){
  if(action.type === 'closeAlert'){
    state = false;
    return state;
  } else{
    return state
  }
}

let initVal = [
  {id: 0, name: 'awesomeShoes', quan : 2},
  {id: 1, name: 'awesomeShoes2', quan : 1}
];

function reducer(state = initVal, action){
  if(action.type === 'incQuan'){
    let copy = [...state];
    copy[0].quan++;
    return copy
  } else if(action.type === 'decQuan'){
    let copy = [...state];
    copy[0].quan--;
    return copy
  } else{
    return state
  }
}

let store = createStore(combineReducers({reducer,reducer2}));
```

 4. dispatch 
 -HTML 안에서 reducer를 실행하기 위한 함수이다. `dispatch({type:작명한 reducer 이름})`

 ``` javascript
 (cart.js)
 <tbody>
 {
  props.state.map((a,i)=>{
   return (
    <tr key={i}>
     <td>{ a.id }</td>
     <td>{ a.name }</td>
     <td>{ a.quan }</td>
     <td>
      <button onClick={()=>{ props.dispatch({ type: 'incQuan'}) }}>+</button>
      <button onClick={()=>{ props.dispatch({ type: 'decQuan'}) }}>-</button>
     </td>
    </tr>
   )
  })
 }
</tbody>

{ props.alert === true
    ? (<div className="my-alert-pink">
        <p>지금 구매하시면 신규할인 20%</p>
        <button onClick={()=>{props.dispatch({ type: 'closeAlert' }) }}>X</button>
       </div>)
    : null
}

function stateToProps(state){
 return {
  state : state.reducer,
  alert : state.reducer2
 }
}

export default connect(stateToProps)(Cart);
 ```