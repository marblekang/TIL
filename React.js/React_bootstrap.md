## 1. React bootstrap 이란?
- 부트스트랩(bootstrap)은 오픈소스 프론트엔드 프레임워크이다. 웹사이트를 쉽게 만들 수 있도록 각종 레이아웃, 버튼, 입력창 등의 디자인을 CSS와 Javascript로 만들어 제공하고 있다.
react-bootstrap은 기존의 부트스트랩을 리액트 스타일의 컴포넌트로 압축하여 코드가 간단해진다는 장점이 있다.

## 2. react bootstrap 설치하기
### - react-bootstrap 패키지 설치
```
npm install react-bootstrap bootstrap
```

### - css 스타일시트 추가
최 상단의 루트파일인  src/index.js 또는 App.js 파일에 코드를 추가하면 부트스트랩의 스타일을 적용할 수 있다.
```
import "bootstrap/dist/css/bootstrap.min.css";
```

## 3. 여러가지 컴포넌트 사용하기
<a href="https://react-bootstrap.github.io/">리액트 부트스트랩 공식문서</a> 에서 다양한 컴포넌트 활용 예시를 확인할 수 있다. 예를 들어 Button 을 추가하려고 한다면

1 ) 버튼을 넣으려고 하는 컴포넌트 파일 상단에 코드를 추가한다.  
```
import Button from "react-bootstrap/Button";
// 또는
import { Button } from "react-bootstrap";
```
2 ) 원하는 위치에 Button 컴포넌트를 삽입한다.
```
import React from 'react';
import {Button} from 'react-bootstrap';

function App(){
    return(
        <div className="app">
            <Button variant="danger"> Danger </Button>
        </div>
    )
}
```
3 ) 실행결과

<img src="https://user-images.githubusercontent.com/87058243/156335246-48450e61-4588-456c-9cfb-d32d0b6237cb.jpg"> 
