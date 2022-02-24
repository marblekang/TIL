## 1.State 란 무엇인가? ⚡
- State는 리액트에서 앱의 유동적인 데이터를 다루기 위한 객체이다. 리액트에서는 일반적으로 유동적 데이터를 변수가 아닌 useState() 라는 리액트 함수를 사용하여 State라는 저장공간에 담아 사용한다.  State가 변경되면 자동으로 관련된 HTML이 재렌더링 된다. 따라서 유동적 데이터의 변경사항이 새로고침 없이 부드럽게 웹페이지에 반영되게 하려면 State를 사용해야 한다.
<hr>
<br>

## 2. State 동작원리
```javascript
import {useState} from 'react';

let [state, setState] = useState('State'); // ES6 destructuring
```

- React 라이브러리에 있는 useState()함수를 통해 state를 사용할 수 있다. useState()를 실행시키면 초기값으로 설정해 놓은 state를 기억하고 있다가 이벤트에 의해 setState를 통해 state의 값이 변경되면 변경된 state값에 맞춰 재렌더링 하게 된다.

- state가 변경되어 재렌더링 하는 과정에서 Virtual DOM이 생성되는데 리액트에서 이전의 Virtual DOM과 다른 부분을 찾아내어 메모리에서 먼저 구현한 후 실제 DOM 부분만 업데이트 한다.
<hr>
<br>

## 3. useState()
리액트 라이브러리에 있는 useState() 함수는 state를 하나 만들어주는 함수이다. useState()의 경우 ES6 destructuring 문법을 이해하면 좀더 쉽게 사용이 가능하다.
<hr>
<br>

### *destructuring 문법   
array안에 있는 데이터들을 변수로 쉽게 저장하고 싶으면 쓰는 자바스크립트 신문법.

['kim', 20] 이라는 array 자료형에서 kim이랑 20이라는 자료를 각각 변수에 저장하고 싶다면

- 구문법
```
var array = ['Kim', 20];

var name = array[0];
var age = array[1];​
```

- 신문법 
```
var [name, age] = ['Kim', 20]

```
<hr>
<br>


```javascript

import React, {useState} from 'react'; // useState 를 import 

function App(){

    let [name,setName] = useState('Kim') // state 초기값 지정

    return(
        <>

        <h1>{name}</h1>
        <button onclick={()=>{setName('Lee')}}>name change</button>  
        
            
        </>
    )
}
```
`name` : state에 저장한 데이터.

`setName` : state에 저장된 데이터를 변경시킬 함수. 바꿀 데이터를 ()안에 입력하면 된다.



참고
- <a href="https://codingapple.com/course/react-basic/">코딩애플 - React</a>
- https://yoo11052.tistory.com/68