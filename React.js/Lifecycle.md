## 1. Lifecycle
- 리액트 컴포넌트에는 Lifecycle , 즉 컴포넌트의 수명 주기가 존재한다. 컴포넌트의 수명은 보통 페이지에서 렌더링되기 전인 준비 과정에서 시작하여 페이지에서 사라질 때 끝이 난다. 이러한 컴포넌트의 수명주기 중간중간 LifeCycle Hook을 걸 수 있다. Hook을 사용하면 컴포넌트가 등장 할때, 컴포넌트가 사라지기 전에 , 컴포넌트가 업데이트 되었을때 등의 상황에 원하는 동작을 실행하게 할 수 있다.

<br>
<hr>
<br>

## 2. Lifecycle Hook의 형태.
- Lifecycle Hook 은 class형 컴포넌트 에서 사용 가능하다.
 
 ```javascript

 class Detail extends React.Component {
  componentDidMount(){
    //Detail 컴포넌트가 Mount 되고나서 실행할 코드
  }
  componentWillUnmount(){
    //Detail 컴포넌트가 Unmount 되기전에 실행할 코드
  }
}
 ```


- 가장 유용한 Hook 두개는

1 ) `componentDidMount()` - 컴포넌트 첫 등장 후 실행할 코드 

2 ) `componentWillUnmount()` - 다른페이지로 넘어간다는 등의 사유로 컴포넌트가 사라기지 전 실행할 코드

<br>
<hr>
<br>

## 3. useEffect
- 최신 리액트 개발에서는 function형 컴포넌트에 `useEffect` hook을 사용한다. Lifecycle Hook 에 비해 조금 더 간결하고 쉽다. 

- useEffect 내의 코드의 실행 조건은 

    1 ) 컴포넌트가 첫 등장해서 로딩이 끝난 후에(mount)
    
    2 ) 컴포넌트가 재 렌더링 되고 난 후에 (update)

```javascript
import React, {useState, useEffect} from 'react';

function Detail(){

  useEffect(()=>{
    
    //코드적는곳
    
    return( // 컴포넌트가 사라질때 실행되는 함수 )  
  
  });
  
  return (
    <div>
    <h4>Detail page</h4>
    </div>
  )
}
```

1 ) 파일 상단에 `useEffect`  import 한 후에 사용한다.

2 ) `useEffect` 안에는 콜백함수를 사용하고 콜백함수내에는 컴포넌트가 첫 등장하고 나서 실행할 코드를 적어 주면 된다.

3 ) 콜백함수 내의 `return` 안에는 함수가 들어갈 수 있다. 들어간 함수는 컴포넌트가 사라질 때 실행된다.


