## 1.Sass란 무엇인가?🔥
- Sass는 CSS의 단점을 보완하기 위해 CSS의 확장으로 나온 스크립트 언어이다. 프로젝트의 규모가 점점 커져가면서 스타일시트도 관리할게 많아지고 복잡해 짐에 따라 유지보수도 당연히 힘들어진다. 이를 보완하기 위해 variable , mixin , nesting , inheritance 등의 개념이 추가된 것이 Sass이다. Sass는 Pre-Processing 과정을 통해 css로 해석 컴파일 된다. 
<br>
<hr>
<br>

## 2.Sass와 SCSS의 차이?
- Sass는 '전처리기(Pre-Processor)'와 그 '구문(Syntax)' 두가지를 모두 지칭한다. Sass는 CSS의 { } 블록이 아닌 들여쓰기 감지를 핵심특성으로 갖는 구문을 가리켰으나, 'Sassy CSS'를 의미하는 SCSS라는 CSS친화적인 구문을 제공함으로써 Sass와 CSS 사이의 차이를 좁히는 방향으로 변화되어 왔다. 그에 따라 Sass 버전3 애소 새롭게 등장한 SCSS 는 CSS 구문과 완전히 호환되도록 새로운 구문을 도입해 만든 Sass의 모든 기능을 지원하는 CSS의 상위집합이다. 즉, SCSS와 CSS는 거의 같은 문법으로 Sass를 지원한다.
<br>
<hr>
<br>

## 3. Sass 설치 & 셋팅 

```
npm install node-sass
```

```scss
(App.scss)

.red{
    color:red;
}
```

```javascript
(App.js)

import './App.scss';
```
<br>
<hr>
<br>

## 4. Sass 문법 사용
<br>

### 1 )  variable

```scss
(App.scss)

$mainColor : #ff0000; // $변수명 : 집어넣을값;

.red {
  color : $mainColor;
}
```
- 변수에 값 저장해서 사용
<br>
<br>

### 2 ) nesting

```scss
(기존 CSS 셀렉터)

div.container h4 {
  color : blue;
}
div.container p {
  color : green;
}
```

```scss
(nesting)

div.container {
  h4 {
    color : blue;
  }
  p {
    color : green;
  }
}
```
- 셀렉터를 옆으로 길게 나열하지 않고 안쪽으로 나열하여 셀렉터 해석이 쉽고 , 관련 클래스끼리 묶어서 관리하기 편하다.
<br>
<br>

### 3 ) @extend


```scss

.my-alert {
  background : #eeeeee;
  padding : 15px;
  border-radius : 5px;
  max-width : 500px;
  width : 100%;
  margin : auto;
}

.my-alert2 {
  @extend .my-alert; //@extend .클래스명; 
  background : yellow;
}
```
- 클래스에 들어있는 모든 내용을 그대로 사용 가능하다. CSS 코드 재사용 가능해진다.
<br>
<br>

### 4 ) @mixin / @include
```css

@mixin style() {
  background : #eeeeee;
  padding : 15px;
  border-radius : 5px;
  max-width : 500px;
  width : 100%;
  margin : auto;
}
.my-alert {
  @include style()
}

```
- mixin은 함수 만드는 문법으로 , `@mixin` 이라고 쓰고 중괄호 내에 축약하고 싶은 코드를 전부 담으면 된다.
- 함수를 호출할때는 `@include 함수명()` 으로 호출하면 된다.
