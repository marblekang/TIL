## 요청방법
- 서버는 요청을 처리하는 기계이다. 요청의 종류에는 크게 GET,POST,PUT,DELETE 요청이 있다.

## GET
1) 서버로부터 데이터를 조회하기 위해 설계된 요청이다. 
2) 요청을 전송할 때 필요한 데이터를 URL의 끝에 query string으로 전송한다.

```javascript
// 예제 localhost:8080/pet 으로 접속하면 응답하기.

(server.js)

app.get('/pet', function(request, response) { 
  response.send('펫용품 사시오')
})
```

## GET 요청시 HTML 파일 보내기

```html
<!-- html 파일 작성 -->
(index.html)

<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <h4>Hello!</h4>
  </body>
</html>

```

```javascript
(server.js)

app.get('/', function(requset, response) { 
  response.sendFile(__dirname +'/index.html')
});

```

 - sendFile() : 파일 전송 하는 함수
 - __dirname : 현재 파일의 경로