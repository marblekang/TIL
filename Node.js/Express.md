## Express
### Express는 가장 인기있는 Node 웹 프레임워크 이며 , 다음과 같은 매커니즘을 제공한다. 
- HTTP 통신 요청(Request; GET, POST, DELETE 등)에 대한 핸들러를 만든다.
- 템플릿에 데이터를 넣어 응답(response)을 만들기 위해 view의 렌더링 엔진과 결합(integrate)한다. 
- 접속을 위한 포트나 응답 렌더링을 위한 템플릿 위치같은 공통 웹 어플리케이션 세팅을 한다. 
- 핸들링 파이프라인(reqest handling pipeline) 중 필요한 곳에 추가적인 미들웨어 처리 요청을 추가한다.

### Express 설치

- 터미널에 아래와 같이 입력
```
npm install express
```

### Express 사용방법
```javascript
const express = require('express');
const app = express();

app.listen(8080, function() {
    console.log('listening on 8080')
})
});
```

