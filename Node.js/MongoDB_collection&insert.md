## 1. DB에 자료 저장하기
 + 자료를 저장하기 위해서 먼저 MongoDB에 database 와 collection 생성.
 
 <br>

 ### 1-1. database/ collection 만들기 
 
 - MongoDB Atals 메인에서 Collection  -> Add my own data -> database 이름, collection 이름 지정 후 생성.

<image src="https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%98-4-600x382.png" width="600px">

<image src="https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%982-2-768x474.png" width = "600px">

<br>
<br>


### 1-2. database 와 collection 의 차이. 
- database는 하나의 폴더 , collection은 폴더 안의 파일이라고 생각하면 된다.

<image src="https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%983-1-460x200.png" width="600px">

## 2. collection에 자료 추가하기.

```javascript
(server.js)

const MongoClient = require('mongodb').MongoClient
var db 
MongoClient.connect(
 '접속 URL',
  function (error, client) {
    if (error) return console.log(error)
    db = client.db('todoapp')
    
    // db에 자료 저장하는 코드.
    db.collection('post').insertOne( {name : 'John', _id : 100} , 
   
    // 위 코드가 정상적으로 실행되면 수행할 코드를 callback 함수안에 적는다.
    function(error, result){ // 에러 , 결과
	    console.log('자료 저장 성공'); 
	});

    app.listen(process.env.8080, function () {
      console.log('listening on 8080')
    })
  }
)
```
`db.collection() : ` db 안의 collection 이름으로 선택할 수 있다.

`insertOne() : ` 자료를 하나 추가하겠다는 뜻으로 object 자료형으로 추가 가능하다.  

## 3. _id
- MongoDB 에서는 자료를 구분하기 위해 _id 가 꼭필요하다. _id를 직접 집어넣지 않으면 자동으로 유니크한 _id가 자료에 생성된다.