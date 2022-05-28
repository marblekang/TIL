## 1. Routung 이란 무엇인가?
- Routing 이란 url 에 따라 그에 상응하는 화면을 전송해 주는 것을 의미한다.웹 애플리케이션 을 만들때 프로젝트를 하나의 페이지로 구성할수도 있고 , 여러 페이지로 구성할수도 있는데 여러 페이지로 구성된 웹 애플리케이션을 만들 때 페이지별로 컴포넌트들을 분리해 가면서 프로젝트를 관리하기 위해 필요한 것이 라우팅 시스템이다.
## 2. React Router 
- 리액트 라우터는 리액트 라우팅 관련 라이브러리 들 중 가장 오래됐고, 가장 널리 사용되고 있다. 리액트 라우터 라이브러리는 컴포넌트 기반의 라우팅 시스템을 설정할 수 있다. 리액트 라우터를 사용하면 손쉽게 SPA를 구현할 수 있다.

## 3. SPA 
- SPA 는 Single Page Application의 약자로, 페이지가 1개인 애플리케이션이란 뜻이다. 전통적인 멀티페이지 애플리케이션의 구조는 여러 페이지로 구성되어 사용자가 다른 페이지로 이동할 때마다 새로운 html을 받아오고, 페이지를 로딩할 때마다 서버에서 리소스를 전달받아 렌더링 한다. 또한 페이지마다 다른 html 파일을 만들어서 제공하거나 데이터에 따라 유동적인 html을 생성해주는 템플릿 엔진을 사용하기도 했다. 이 방식은 사용자와의 인터렉션이 별로 없는 정적인 페이지들은  적합하지만 사용자 인터렉션이 많고 다양한 정보를 제공하는 모던 웹 애플리케이션에는 적합하지 않다. 렌더링 하는것을 서버에서 담당하는 것은 그만큼 렌더링을 위한 서버 자원이 사용되는 것이고 불필요한 트래픽도 낭비된다는 것을 의미한다. 

- 이에따라 이를 개선하기 위해 리액트같은 라이브러리 혹은 프레임워크를 사용해서 뷰 렌더링은 유저의 브라우저가 담당하도록 하고 , 일단 어플리케이션을 브라우저에 로드 한 다음 사용자와 인터렉션이 발생하면 필요한 부분만 업데이트 하는 방식을 사용하게 됐다. 이처럼 html은 한번만 받아와서 웹 애플리케이션을 실행시킨 이후에는 필요한 데이터만 받아와서 업데이트 해주는것이 싱글 페이지 애플리 케이션이다. 

## 4. react-router-dom 설치 & 셋팅

- react-router-dom 설치하기
```
npm install react-router-dom@5.2.0
```

- 셋팅하기
```javascript
(index.js)

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
```

- `BrowserRouter` import 하고 `<BrowserRouter>` 태그 추가하기.

