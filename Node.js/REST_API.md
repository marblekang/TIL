### 1. API란?
<image src="https://blog.kakaocdn.net/dn/LSsUR/btqJMw21syp/bo1vHeeHuuJ9tM765Xgmd1/img.png">

- Application Programming Interface 의 약자로 서로 다른 프로그램간의 소통을 도와주는 통신 규약을 뜻한다. 이를 웹이서 사용하면 서버와 고객간의 통신 규약 , 즉 서버에게 요청을 보내서 원하는 데이터를 가져오는 방법을 뜻한다. 


<hr/>

### 2. REST API는 무엇인가
<image src="https://image.toast.com/aaaadh/alpha/2016/techblog/uADF8uB9BC1.png">


- Representational State Transfer 라는 뜻으로 2000년도에 로이 필딩 (Roy Fielding)의 박사학위 논문에서 최초로 소개되었다. 웹 api를 짤때 웹의 장점을 최대한 활용할수 있게 지켜야 할 6가지 원칙을 의미한다.

<hr/>

### 3. REST API 6가지 원칙
3-1) `Uniform Interface`

- 인터페이스는 일관성이 있어야한다

- 하나의 URL로는 하나의 데이터를 가져와야한다. (하나를 가져오기 위한 두개의 URL을 만들지 말자)

- 간결하고 예측가능하게 짜야한다. (URL 하나를 알면 둘을 알게)

- URL 이름짓기 관습에 따라 짜야한다.

3-2) `Client-server 역할 구분`

client는  그냥 URL 하나만 알면 서버에 있는 자료를 갖다쓸 수 있어야 한다.

client 에게 서버역할을 맡기거나 DB에 있는 자료를 직접 꺼내라고 하든지 그런 식으로 코드를 짜면 안된다. 

3-3) `Stateless`

요청들은 각각 독립적으로 처리되어야 한다. 요청1이 성공해야 요청2를 보내주고 그런 식으로 요청간의 의존성이 존재하는 코드를 짜면 안된다. 다르게 말하면 요청 하나 만으로 자료를 가져오기 충분하도록 요청에 필요한 모든 정보들을 실어 보내는게 좋다. 

 

3-4) `Cacheable`

요청을 통해 보내는 자료들은 캐싱이 가능해야한다.. 그리고 캐싱이 가능하다고 표시하거나 캐싱 기간을 설정해주어야 한다.

 

`*캐싱`

네이버를 방문하면 크롬 브라우저는 자동으로 자주 사용하는 이미지 파일, CSS 파일 등을 하드에 저장 해 놓는다. (별로 바뀔일 없는 네이버 로고나 아이콘 등) 하드에 저장해놓고 네이버에 방문할 때 네이버서버에 네이버 로고를 요청하지 않고 하드에서 불러오는데 이 행위를 캐싱이라고 한다. 

 

3-5) `Layered System`

요청처리하는곳, DB에 저장하는곳 이런 여러가지 단계를 거쳐서 요청을 처리해도 된다. 즉 여러개의 레이어를 거쳐서 요청을 처리하게 만들어도 된다.



 

3-6) `Code on Demand`

서버는 고객에게 실제 실행가능한 코드를 전송해줄 수 있다. 

<hr/>

### 4. URL 이름짓기 관습

<br/>

- 단어들을 동사보다는 명사 위주로 구성할것.

- 응용해서 다른 정보들을 쉽게 가져올 수 있을 정도로 일관성 있을것.

- 대충 봐도 어떤 정보가 들어올지 예측이 가능해야 한다. 

- 띄어쓰기는 '_' 대신 '-' 사용

- 파일 확장자 쓰지 말것.

- 하위 문서들을 뜻할 땐 / 기호를 사용할것. (하위폴더같은 느낌)