## 1. 모듈
- 리액트에서 애플리케이션의 크기가 커질수록 하나의 파일에서 코드를 작성하기에는 한계가 존재한다. 이러한 문제를 해결하기 위해 자바스크립트 에서는 모듈(module)이라는 기능을 지원하여 하나의 파일을 여러개의 파일로 나눌 수 있다. 이렇게 나눠진 파일들의 코드에 접근할때 사용하는 키워드가 `import` , `export` 이다.

## 2. export default 문법
```javascript
(data.js) 

var name = 'kim';
export default name;
```
- src 폴더의 App.js와 나란히 data.js 를 생성했디. 이 파일에서 중요한 변수를 export 하고 싶을땐 `export default` 라는 문법을 쓰고 우측에 배출을 원하는 변수를 담을 수 있다.
- `변수명` , `함수명`, `자료형` 전부 배출 가능하다.
- 파일마다 `export default` 키워드는 하나만 사용 가능하다.

## 3. export {} 문법
```javascript
(data.js)

var name1 ='kim';
var name2 = 'park';
export {name1 , name2}
```
- 여러개의 변수를 내보내고 싶으면 `export{}` 문법을 쓴다. `export default` 와는 다르게 꼭 변수나 함수명이 있어야 하며 , 원하는 `변수명`, `함수명`을 배출할 수 있다.

## 4. import 문법 
```javascript
(App.js)

import name from './data.js'
```
- App.js에서 data.js 에서 배출한 변수를 쓰고 싶으면 `import 변수명 from '경로'` 
라고 작성해서 다른파일에서 배출한 변수를 가져다 쓸 수 있다.  
 - 변수명 은 직접 작명한다. 
 - `'./' 는 현재경로를 의미한다.` 

 ## import {} 문법
 ```javascript
 (App.js)

import { name1, name2 } from './data.js';
 ```
 - `export {}` 를 사용해서 내보낸 변수들을 갖다 쓰려면 `import {}` 문법을 사용한다. 
 - export 했던 변수명을 원하는 것만 골라서 쓰면 된다. 
 - 이경우에는 변수명 작명이 불가능 하고 export했던 변수명 그대로 써야한다.

 
 참고
 - https://codingapple.com
 - https://developer-talk.tistory.com/139