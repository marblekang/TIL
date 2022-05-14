# Conditional redering (조건부 렌더링)

## 조건부 렌더링 이란 무엇인가??

- React에서는 원하는 동작을 캡슐화하는 컴포넌트를 만들 수 있는데 이에 따라 특정 조건에 따라서 원하는 컴포넌트 만을 렌더링할 수 있다.

## 삼항 연산자를 이용한 조건부 렌더링

- 조건부 렌더링을 처리하는 가장 기본적인 방법은 삼항 연산자를 이용하는 것이다.

- 삼항 연산자는 `조건 ? true : false` 의 형식으로 작성한다.

```javascript
import React, { useState } from 'react';

function App() {

let [alert,setAlert] = useState(false)

    return(
        <div className="App">

        {
            alert === true
            ? <div> 알림창입니다. </div>
            : null
        }

        <button onClick={function(){setAlert(true)}}>알림창 버튼<button>
        </div>
    )
}
```

### 1 ) 알림창의 상태 정보를 저장할 수 있는 `alert` state 만들기.

### 2 ) 삼항 연산자를 이용해 `alert` 값이 `true` 면 `<div> 알림창입니다. </div>` 를 , 그렇지 않으면 `null` 를 보여 주도록 작성, `null` 이면 렌더링 되지 않는다.

### 3 ) 버튼을 클릭하면 `alert` 의 값이 true로 바뀌도록 작성.

Reference

> [CodingApple](https://codingapple.com/course-status/)
