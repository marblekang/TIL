## 1. 리액트 에서 반복문.
- 리액트 환경에서는 일반적인 for 반복문을 이용해서 HTML을 줄일 수 있다. 그러나 JSX문법을 사용하는 중간에는 for 반복문을 사용할 수 없기 때문에 map 함수를 사용해서 반복문을 수행한다.
## 2. map 함수 사용방법.
- map 함수는 array에 붙일 수 있는 내장 함수로써 아래와 같이 사용한다.
```javascript
var arr = [2,3,4];
var newArr = arr.map(function(a,i){
    return console.log(a*i) ; /// 0, 3, 8
});
```


- 파라미터 첫번째 자리는 각각의 데이터를 의미한다. 
- 파라미터 두번째 자리는 반복 횟수마다 0부터 1씩 증가하는 정수이다. 