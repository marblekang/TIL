## 1.확장모듈 관리하기
- 확장모듈들은 같은 기능을 구현한 것이라도 그 성능과 구성이 천차만별이다. 또한 하나의 확장모듈도 지속적으로 개발되는 경우가 많기 때문에 주기적으로 최신버전으로 업데이트 하거나 필요없는 모듈은 삭제하여 정리할 필요가 있다.

<br>
<hr>
<br>

## 2. 확장모듈 목록 확인과 업데이트하기
- 현재 개발중인 프로젝트에 설치된 확장모듈을 확인하려면 터미널에 아래와 같은 명령을 입력하면 된다.

    `npm list` : 로컬 설치 모듈 목록

    `npm list -g` : 글로벌 설치 모듈 목록

- 설치된 확장모듈을 업데이트 하기 위해서는 아래 코드를 이용하면 설치된 모듈을 최신 버전으로 업데이트 할 수 있다.
    
    `npm update [모듈명]` : 로컬 설치 모듈 업데이트
    
    `npm update [모듈명] -g` : 글로벌 설치 모듈 업데이트

    `npm install [모듈명]@[버전]` : 모듈 버전 지정 업데이트

<br>
<hr>
<br>

## 3. 확장모듈 삭제하기
- 확장 모듈 삭제는 unintall 명령을 이용하면 된다. 이외에도 node_modules 에 있는 모듈 directory를 삭제하면 해당 모듈이 삭제된다.
    
    `npm uninstall [모듈명]` : 로컬 설치 모듈 삭제
    
    `npm uninstall [모듈명] -g` : 글로벌 설치 모듈 삭제

<br>
<hr>
<br>

- 출처

    <a href="https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174370/%ED%99%95%EC%9E%A5%EB%AA%A8%EB%93%88-%EA%B4%80%EB%A6%AC">구름EDU - 한눈에 끝내는 node.js</a>

    <a href="https://tofusand-dev.tistory.com/97">평범하지 않은 또야의 블로그  </a>