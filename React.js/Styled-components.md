## 1. Css in JS 
Css in JS 는 문구 그대로 JS 안에 CSS 를 작성하는 것을 의미힌다. 기존에 웹사이트를 개발할 때는 HTML과 CSS, JavaScript는 각자 별도의 파일에 두는 것을 최선의 방법으로 생각했다. 하지만 React나 Vue, Angular와 같은 모던 자바스크립트 라이브러리가 인가를 끌면서 웹개발의 패러다임이 바뀌고 있다. 최근에는 웹 애플리케이션을 여러 개의 재활용이 가능한 빌딩 블록으로 분리하여 개발하는 컴포넌트 기반 개발 방법이 주류가 되고 있다. 따라서, 웹페이지를 HTML, CSS, JavaScript 3개로 분리하는 것이 아니라, 여러 개의 컴포넌트로 분리하고, 각 컴포넌트에 HTML, CSS, JavaScript을 몽땅 때려 박는 패턴이 많이 사용되고 있다. React는 JSX를 사용해서 이미 JavaScript가 HTML을 포함하고 있는 형태를 취하고 있는데, 여기에 CSS-in-JS 라이브러리만 사용하면 CSS도 손쉽게 JavaScript에 삽입할 수 있다. `Styled Components`는 이렇게 트랜드가 되고 있는 CSS-in-JS 라이브러리 중에서도 단연 가장 널리 사용되고 있는 라이브러리 이다.

<br>
<hr>
<br>


## 2. 패키지 설치 & 사용환경 설정
### 설치
```
npm install styled-components //설치
```
### 설정
- 사용할 파일에 import 한다. 
```javascript
import styled from 'styled-components' //
```
<br>
<hr>
<br>


## 3. 기본 사용법

### Styled-components 를 활용해서 컴포넌트 만들기
    
- padding 이 20px 인 div박스 제작.

```javascript
import React, { useState } from 'react';
import styled from 'styled-components';

let Box = styled.div` // 지정할 스타일을 변수에 저장.
  padding : 20px;
`;

function Detail(){
  return (
    <div>
      <Box></Box>
    </div>
  )
}
```
` styled.div`` ` : styled components로 만들 html 태그 적고,  backtick 기호 안에는 스타일을 적는다.

<br>
<hr>
<br>

## 4. props로 스타일링 하기.
```javascript
import React, { useState } from 'react';
import styled from 'styled-components';

let Box = styled.div` 
  padding : 20px;
`;
let Title = styled.h4`
  font-size : 25px;
  color : ${ props => props.color };
`;

function Detail(){
  return (
    <div>
      <Box>
      <Title color="blue">안녕하세요1</Title>
      <Title color={'red'}>안녕하세요2</Title>
      </Box>
    </div>
  )
}
```
- `${}` 라는 문법은 문자를 생성하는 `` 백틱 기호안에서 쓸수 있는 ES6 문법인데 , 문자 중간에 변수나 함수를 집어 넣고 싶을 때 사용한다.
- 그리고 `props.color` 라는 props 변수를 집어넣은것이다. 변수를 넣을 때는 꼭 콜백함수로 넣어야한다.
- props.color 자리에 각각 blue, red 라는 문자가 들어가서 컴포넌트가 생성되고 실행한 결과는  
![실행결과](https://user-images.githubusercontent.com/87058243/157180348-6cd7ef57-6bde-44e6-917f-5d043ac6be19.jpg)

- 일반 텍스트를 전송하고 싶으면 `<Title color="blue">` 처럼 "" 안에 적으면 되고 변수나 자료형을 담고 싶으면 `<Title color={'red'}>` 처럼 { } 안에 적으면 된다.

<br>
<hr>
<br>


참고 

https://codingapple.com/

https://www.daleseo.com/react-styled-components/
