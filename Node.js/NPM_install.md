## 1. NPM (Node Package Manager)
<image src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEPYpq%2FbtqZhgQx1yk%2FF40NULoSDG8MAY65zc2KN1%2Fimg.png">

- NPM은 명령어를 통해 컴퓨터를 제어하는 CLI(Command Line Interface) 를 통해서 동작하는 프로그램으로 Node.js에서 사용 가능한 모듈들을 패키지화시켜 모아놓은 것이다. 
이를 통해 웹에서 필요로 하는 특정 기능들을 일일이 개발하지 않아도 이미 누군가가 만들어 올려놓은 모듈을 다운받기만 하면 되므로, 개발을 쉽게 할 수 있어서 노드가 빠르게 인기를 끄는 것에 도움을 주었다. 또한 npm 역시 Node.js의 급격한 인기로 인해 빠르게 성장하여 세계 최대의 패키지 저장소가 되었다.

<br>
<hr>
<br>

## 2. NPM 설치
- Node.js를 설치하면 npm이 같이 설치된다.
### 1) <a href="https://nodejs.org/en/">nodejs.org</a> 사이트 접속해서 Node.js 설치

### 2) 명령 프롬프트 들어가서 

`node -v` : Node.js 버전 확인

`npm -v` : npm 버전 확인

<br>
<hr>
<br>

## 3. NPM 확장모듈 설치하기

 - npm 은 install 이라는 명령으로 간단하게 설치 할수 있으며 글로벌 설치 , 로컬 설치 두 가지 방법이 있다.
 ### 1) 글로벌 설치
 - 확장 모듈을 글로벌로 설치하면 {prefix}/lib/node_modules 에 노드 모듈을 설치하고 모듈을 구성하는 파일 중 실행과 관련된 파일들은 {prefix}/bin 에 설치한다.

 - 글로벌로 설치하는 확장 모듈은 노드로 작성한 소스와는 의존성이 없다.  주로 개발 편의성이나 지속적인 서비스를 위한 도구 등의 형태로 이러한 확장 모듈은 특정 프로젝트 에서만 활용하는 것이 아니므로 글로벌로 설차하여 사용하는 것을 권장한다. (ex. nodemon , express)

 - 글로벌 묘듈 설치방법은 일반적인 모듈 설치방법과 같으며 -g 옵션을 통해 글로벌로 설치하도록 지정할 수 있다. 

 `npm install [모듈명] -g` : 글로벌 모듈 설치

 `npm list -g` : 글로벌로 설치된 모듈 목록 확인


 ### 2) 로컬 설치
 - 확장 모듈을 로컬로 설치하면 현재 디렉터리에 패키지를 설치힌다. 노드 모듈은 ./node_modules 에 설치하고, 실행 관련 파일들은 ./node_modules/bin/ 에 설치한다.

 -  코드에서 require() 메소드를 통해 사용하는 형태로 특정 애플리케이션에 국한되어 사용하는 경우가 많은 확장 모듈일 경우 로컬 설치 형태를 사용하는 것이 좋다. 로컬 설치는 애플리케이션의 소스코드들이 확장 모듈과 의존성이 있게 되므로 애플리케이션과 함께 관리한다. 다시 말해, 로컬 설치는 애플리케이션을 중심으로 해당 애플리케이션이 접근할 수 있는 로컬에 설치되어야 한다.

`npm install [모듈명]` 
 
`npm list`
<br>
<hr>
<br>

## 4. 원하는 NPM 찾아서 설치하기

 - <a href="https://www.npmjs.com">npmjs.com</a> 에 접속하면 원하는 확장 모듈을 검색하고 확인 할 수 있다. npm에 등록된 확장 모듈의 이름과 간단한 소개를 살펴볼 수 있고 , 이를 사용하려면 해당 모듈의 이름으로 `npm install` 명령을 이용하여 설치하면 된다. 
    

<br>
<br>

출처

- <a href="https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174367/npm-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EC%84%A4%EC%B9%98">구름EDU - 한눈에 끝내는 node.js</a>
- <a href="https://opentutorials.org/module/4044">생활코딩 - npm</a>

