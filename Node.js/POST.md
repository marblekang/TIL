### 1. POST요청
- POST요청은 리소스를 생성/업데이트하기 위해 서버에 데이터를 보내는 데 사용된다. get 요청을 전송할때 url 주소 끝에 parameter로 포함되어 전송하는 것과 달리 전송해야할 데이터를 http 메세지의 body에 담아서 전송한다. http 메세지의 body는 길이의 제한 없이 데이터를 전송할 수 있으므로 get 과 달리 대용량의 데이터를 전송할 수 있다.
<hr>

### 2. form 데이터 서버 전송하기.
- post 요청으로 HTML form 내의 input태그들에 입력한 데이터를 서버로 전송할 수 있다.

```html
(write.html)

<form action="/add" method="POST">
  <div class="form-group">
    <label>오늘의 할일</label>
    <input type="text" class="form-control" name="title">
  </div>
  <div class="form-group">
    <label>날짜</label>
    <input type="text" class="form-control" name="date">
  </div>
  <button type="submit" class="btn btn-outline-secondary">Submit</button>
</form> 
```
```action : 전송할 경로```

```method : 요청의 종류 ```

```name : 서버에서 어떤 input에 적혔던 데이터인지 식별할 수 있게 하기 위해 이름 붙여준것```

<hr>

### 3. 서버에서 POST 요청 처리하기
```javascript
(server.js)
//get요청 처리
// '/write' 라는 경로로 get요청 받으면 write.html 파일 보여준다.
app.get('/write', function(request, response) { 
  response.sendFile(__dirname +'write.html')
});

//post요청 처리
// '/add' 라는 경로로 post요청이 들어오면 
// 요청시 보낸 데이터를 출력하고 전송완료 메세지 보내준다.
app.post('/add', function(request, response){
  console.log(request.body);
  response.send('전송완료')
});
```
