## 1. Routing 하기. (페이지 나누기)
```javascript
(App.js)

import React, { useState } from 'react';
import {Route,Link,Switch} from 'react-router-dom';

function App(){
    retrun (
        <div>
        <Route exact path="/"> //정확히 "/" 라는 경로로 접속 했을때만 라우팅 해준다.
        <div>Home page</div>
        <Route>

        <Route path="/detail">
        <div>Detail Page</div>
        <Route>

        
        </div>
    )
}
```
- `<Route>` 컴포넌트 import 하기. 
- `exact` 사용하지 않을 경우 `'/detail'` 이라는 경로에는  `'/'` 경로가 포함되어 `'/detail'` 로 접속하면 홈페이지와 상세페이지 둘다 보여주기 때문에 `exact` 를 입력하여 정확히 해당 경로로 접속했을 때에만 라우팅 해준다. 

## 2. Link , Switch , history 기능

### 1 ) `<Link>` 컴포넌트로 페이지 이동 기능 만들기. 
```javascript


function App(){
  return (

    <div>

      <Navbar>
         <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
         <Nav.Link> <Link to="/detail">Detail</Link> </Nav.Link>
      </Navbar> 

      <Route exact path="/"> 
      <div>Home page</div>
      <Route>

      <Route path="/detail">
      <div>Detail Page</div>
      <Route>

    <div>
       
   
  )
}
```
- 페이지 이동 버튼으로 바꾸길 원하는 글자들에 `<Link>` 태그를 감싸고 `to` 라는 속성을 이용해 경로를 적어주면 이동버튼이 완성된다.

### 2 ) `useHistory()` 함수를 이용한 페이지 이동 기능 만들기.
- 코드 실행 중간중간에 페이지를 이동시키고 싶을 때는 페이지 이동함수인 `useHistory()`를 사용하면 된다. 

```javascript

(Detail.js)

import React from 'react';
import {useHistory} from 'react-router-dom';

function Detail(){

let history = useHistory();
return(
    <div>
    <div>Detail Page</div>
    <button onClick={()=>{ history.goBack() }} className="btn btn-danger">Back</button> 
    <button onClick={()=>{ history.push('/') }} className="btn btn-danger">Home</button> 
    </div>
)

}
```
- `useHistory()` import 하고 `history` 변수에 저장한다. `history` 라는 변수에는 object 자료가 하나 저장 되어 있는데 그 object 안에는 페이지 이동내역과 유용한 함수가 저장되어 있다.
- `goBack()` 은 `history` 안에 저장된 함수이며 , 이 함수를 실행하면 바로 이전에 방문한 페이지로 돌아갈 수 있다. 
- `push()` 는 그 안에 경로를 입력하면 입력한 경로로 이동하게 해주는 함수이다. 

### 3 ) `<Switch>` 컴포넌트 
- `<Switch>` 는 매치되는 `<Route>` 들을 전부 보여주지 말고 하나만 보여줄 때 사용한다. 
```javascript
function App(){
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route path="/detail">
          <Detail/>
        </Route>
        <Route path="/:id">
          <div>새로 만든 Route 입니다.</div>
        </Route>
      </Switch>
    </div>
  )
}
```
- `/:id` : url파라미터 , ' / ' 뒤에 어떤 문자가 와도 이 Route로 안내해 준다.
- `<Swtich>` 를 사용하지 않으면 '/detail' 로 접속하면 1) `<Detail>` (2) `<div>새로 만든 route입니다</div>`  둘 다 보여준다.
- `<Switch>` 를 사용해서 감싸면 여러개가 매칭되어도 맨 위 하나의 Route만 보여준다.  
