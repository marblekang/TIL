# 데이터 타입
> 코어 자바스크립트 내용 참조하여 작성.

- 자바스크립트의 데이터 타입에는 크게 primitive type(기본형, 원시형), reference type(참조형) 의 두가지가 있다.

## primitive type (기본형)
- number

- string

- boolean

- null

- undefined

- ES6 에서 추가 : Symbol

## reference type (참조형)

- object

###  object의 하위 분류 

- Array, Function, Date, RegExp,    

- ES6 에서 추가 : Map , WeakMap , Set, WeakSet 

### primitive type 과 reference type 을 구분하는 기준

-  기본형 데이터는 값이 담긴 주솟값을 바로 복제하는 반면 참조형은 값이 담긴 주솟값들로 이루어진 묶음을  가리키는 주솟값을 복제한다는 차이점이 있다. 

- 기본형 데이터는 불변성을 띈다. 불변성에 대해 이해하려면 개략적인 메모리와 데이터에 대한 지식이 필요하고 나아가 식별자 와 변수 의 개념을 구분할 수 있어야 한다. 
---
## 불변성
- 불변성 여부를 구분할 때의 변경 가능성의 대상은 데이터 영역 메모리이다. 

### 기본형 데이터 할당

```javascript
// 기본형 데이터 할당을 통해 불변성에 대해 알아보자.

01 var a = 'abc';
02 a = a + 'def'; 
03
04 var b = 5;
05 var c = 5;
06 b = 7;
```
-  `01~02` : 변수 'a'에 문자열 'abc' 를 할당했다가 뒤에 'def'를 추가하면 기존의 'abc' 가 'abcdef'로 바뀌는게 아니라 새로운 문자열 'abcdef' 를 만들어 그 주소를 변수 a 에 저장한다. 'abc' 와 'abcdef'는 완전히 별개의 데이터이다. 

- `04` : 변수 'b' 에 숫자 5를 할당하면 컴퓨터는 데이터 영역에서 5를 찾고, 없으면 데이터 공간을 하나 만들고 그 주소를 'b' 에 저장한다.  

- `05` : 5번째 줄에서 다시 같은 수 인 5를 할당하려고 하면 컴퓨터는 데이터 영역에서 5를 찾고 , 4번째 줄에서 만들어 놓은 값이 있으니 그 주소를 재활용한다.

- `06` : 변수 b의 값을 7로 바꾸고자 하면 기존에 저장된 5 자체를 7로 바꾸는 것이 아니라 기존에 저장했던 7을 찾아서 있으면 재활용 하고 , 없으면 새로 만들어서 b에 저장한다. 결국 5와 7 모두 다른 값으로 변경할 수 없다. 

<br>

## 가변성
> 기본형 데이터는 모두 불변값 이지만, 참조형의 경우 기본적인 성질은 가변값이지만,
설정에 따라 변경 불가능한 경우도 있다.(Object.defineProperty, Object.freeze 등)

### 참조형 데이터 할당

```javascript
// 참조형 데이터 할당을 통해 가변성에 대해 알아보자.

01 var obj1 = {
02   a:1,
03   b:'bbb'
04 };

```
![참조형데이터할당](https://velog.velcdn.com/images%2Fcorete%2Fpost%2F45e65dd8-fba2-4860-8461-8314b6795d2b%2Fimage.png)

- `01` : 컴퓨터는 변수영역에 빈공간(@1002)를 확보하고, 그 주소의 이름을 obj1로 지정한다.

- `02` : obj1 은 여러개의 프로퍼티로 이뤄진 그룹이다. 이 그룹 내부의 프로퍼티들을 저장하기 위해 별도의 변수 영역을 마련하고, 그 영역의 주소(@7103~?)를 임의의 데이터 저장공간(@5001) 에 저장한다.

- `03` : @7103, @7104에 각각 a 와 b라는 프로퍼티 이름을 지정한다.

- `04` : 데이터 영역에서 숫자 1을 검색하는데 , 검색결과가 없으므로 임의로 @5003에 저장하고 , 이 주소를 @7103 에 저장한다. 문자열 'bbb' 역시 임의로 @5004에 저장하고, 이 주소를 @7104에 저장한다. 

> 기본형 데이터와 참조형 데이터의 차이는 '객체의 변수(프로퍼티)' 영역이 따로 존재한다는 점이다. 객체가 별도로 할애한 영역은 변수 영역일 뿐 '데이터 영역'은 기존의 메모리 공간을 그대로 활용하고 있다. 

<br>

### 참조형 데이터의 프로퍼티 재할당

> 데이터 영역에 저장된 값은 모두 불변값 이다. 그러나 변수에는 다른 값을 얼마든지 대입할 수 있다. 이 부분 때문에 참조형 데이터는 가변값 이라고 할 수 있는 것이다.

```javascript
// 참조형데이터 재할당
01 var obj1= {
02    a: 1,
03    b: 'bbb'
04  };
05  obj1.a = 2;
```

![참조형데이터재할당](https://velog.velcdn.com/images%2Fcorete%2Fpost%2Fde014d42-09d4-4fef-a28d-3087510be953%2Fimage.png)

`05` : obj1에 저장된 주소값(@5001) 에는 변화가 없고 , 프로퍼티인 'a' 가 저장된 메모리 주소(@7103) 에 저장된 주소값을 @5003 에서 @5005로 교체한다.

> 새로운 객체가 만들어진 것이 아니라 기존의 객체 내부의 값만 바뀐것.

<br>

### 중첩객체
> 참조형 데이터의 프로퍼티에 다시 참조형 객체를 할당.
```javascript
01 var obj={
02    x:3,
03    arr:[3,4,5]
04  };
```

![중첩객체](https://velog.velcdn.com/images%2Fcorete%2Fpost%2Fd2434f9f-da1b-44bd-8e02-a264cf54c4ff%2Fimage.png)


`01`: 참조형 변수의 프로퍼티 x , arr 를 저장하기 위해 별도의 변수영역(@7103~?) 을 마련하고 , 그영역의 주소를 @5001 에 저장한다.

`02` : 데이터 영역에서 숫자 3을 검색하고 없으니 , 임의로 @5002에 저장, 이 주소값을 @7103에 저장한다.

`03`: @7104에 저장할 arr 은 배열 이므로 데이터 영역의 @5003의 주소값을 저장한다. @5003에는 배열 arr 의 변수 영역의 주소값을 저장한다.

`04` : @8104~? 에는 배열 내 요소의 각각의 인덱스 값을 부여하고 , 각각의 값에는 데이터가 저장되있는 데이터 영역(@5002 , @5004, @5005) 의 주소값을 저장한다.

<br>

### 중첩객체의 재 할당

```javascript
01 var obj={
02    x:3,
03    arr:[3,4,5]
04  };
 
05   obj.arr = 'str'
```
![중첩객체재할당](https://velog.velcdn.com/images%2Fcorete%2Fpost%2F586eb223-a5ef-4f74-8215-4eeebf12da65%2Fimage.png)

`05` : @5006에 'str' 저장하고 그 주소를 @7104에 저장한다. 그러면 배열[3,4,5] 를 위해 사용되었던 메모리 주소(@5003)는 자신의 주소를 참조하는 변수가 하나도 없게 된다.(참조카운트 = 0) . 

이에 따라 가비지 컬렉터의 수거 대상이 되고 , 이후 담겨있던 데이터인 @8104~? 라는 값이 사라지고 , 이 과 정에서 @8014~? 의 각 데이터 들의 참조카운트가 0 이 되면서 가비지 컬렉터의 수거 대상이 되어 사라진다.