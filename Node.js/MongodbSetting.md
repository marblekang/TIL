## 1. Mongodb atlas 설정하기.
- 출처 : coddingapple.com
1. 구글에 Mongodb atlas 라고 검색해서 홈페이지 방문



2. 회원가입 (이메일 인증 필요)


▼ 3. 프로젝트 명 기입

 
 <image src="https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%984-3-460x491.png" width="600px">


 

 

 

▼ 4. 무료 티어 선택

 
<image src="https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%985-1-600x460.png">


 

 

 

 

▼ 5. 서버위치 한국과 가장 가까운 곳으로 선택
, 계속 진행하면 Cluster 생성. 

 

<image src="https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%986-2-600x440.png">

 

 

 

 

 

▼ 6. Database Access 메뉴에서 DB 접속용 ID/PW 생성

DB 접속 권한을 위해 새로 ID/PW 생성해주기.

<image src="https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%987-2-768x527.png" width="600px">

<image src="https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%985-600x438.png">

 

 



 


 

▼7. Network Access 메뉴에서 IP를 추가.

데이터베이스 접속할 수 있는 IP를 미리 정의해놓는 일종의 보안장치 이다. 

Allow access from anywhere을 누르거나 0.0.0.0/0 을 추가



 

 <image src="https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%986-1-600x340.png">

 <image src="https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%987-1-600x316.png">

 





 

 

 

 

 

 

▼8. Database / collection 만들기를 진행.

Cluster는 하나의 호스팅 공간이고 거기 안에 데이터베이스를 만들어야 데이터를 저장할 수 있다. 

 

 <image src="https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%985-2-768x279.png" width="600px">

 <image src="https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%986-3-768x401.png" width="600px">

 <image src="https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%987-3-768x370.png" width="600px">

▲ 데이터 베이스 이름 설정하고 생성.


<hr>
 
## 2. DB 접속하는 URL 찾아오기

1. 메인화면 셋팅이 끝나면 CONNECT라는 작은 흰색 버튼 누르기

2. Connect Your Application 버튼 누르기

3.  Choose your driver version 에서 Node.js 선택되어있는지 잘 확인하기

4. 접속 URL(Connection String) 나오면 복사해서 저장해놓기


 
<hr>

## 3. Mongodb 접속하기.

```javascript
(server.js)

const MongoClient = require('mongodb').MongoClient
var db // 데이터베이스 저장할 변수 선언
MongoClient.connect(
 /* Mongodb에서 발급받은 접속 URL */,
  function (error, client) {
    if (error) return console.log(error)
    db = client.db('todoapp')
    app.listen(process.env.8080, function () {
      console.log('listening on 8080')
    })
  }
)
```