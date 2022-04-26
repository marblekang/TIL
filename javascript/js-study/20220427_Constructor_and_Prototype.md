# 생성자 함수와 프로토타입✏️

## 생성자 함수는 무엇인가?

- 생성자 함수는 객체를 생성하는 함수이다. 다른 언어에서의 class와 같은 역할을 한다.

- 유사한 객체를 여러 개 만들어야 할때 쉽게 만들기 위해 사용한다.

- ES6 에서 자바스크립트에도 class 가 도입되어 객체지향 프로그래밍에서 사용되는 다양한 기능을 자바스크립트 에서도 사용할 수 있다.

<br>

## 생성자 함수 사용방법

1. 함수의 첫 글자는 대문자로 시작한다. (관습적)

2. `new` 연산자를 붙여 실행한다.  

<br>

## 생성자 함수로 객체 생성하기

```javascript
f function Person(name, age) {
      this.name = name;
      this.age = age;
      this.info = function () {
        console.log(`name:${this.name} , age:${this.age}`)
      }
    }

    let player1 = new Person('kim', 22);
    let player2 = new Person('park',30);

    console.log(player1.name) // kim
    console.log(player2.name) // park
    
    console.log(player1.age) // 22
    console.log(player2.age) // 30

    player1.info(); // name:kim , age:22
    player2.info(); // name:park , age:30
```

- 하나의 Person 생성자로 player1 , player2 두 개의 객체를 만들었고, 이 객체들은 공통적으로 `info` 라는 메서드를 가진다.
- 생성자 함수를 만들때 파라미터를 입력 받도록 하고 , 입력받은 인수를 `this.name` , `this.age` 에 저장한다. 
- 생성자함수 안에서 사용한 `this` 는  생성자 함수로 부터 새로 생성되는 오브젝트를 뜻한다. 

--- 

## 프로토타입은 무엇인가?

- 생성자 함수를 만들면 내부에 자동으로 `prototype` 이라는 객체가 생성된다. `prototype` 은 원형 객체로서 같은 생성자로 부터 만들어진 객체는 모두 이 원형객체를 공유한다. 

- 따라서 생성자 함수의 `prototype` 에 어떤 변수나 함수가 들어가 있다면 그 생성자 함수로부터 만들어진 객체는 전부 그대로 물려받아 사용 할 수 있다. 

- 위 코드를 `prototype` 객체를 사용해서 바꾸면

```javascript
f function Person(name, age) {
      this.name = name;
      this.age = age;
    }

    Person.prototype.info = function(){
      console.log(`name:${this.name} , age:${this.age}`)
    }

    let player1 = new Person('kim', 22);
    let player2 = new Person('park',30);

    console.log(player1.name) // kim
    console.log(player2.name) // park
    
    console.log(player1.age) // 22
    console.log(player2.age) // 30

    player1.info(); // name:kim , age:22
    player2.info(); // name:park , age:30
```

## 프로토타입 사용이 효율적인 이유
- `this` 를 사용하는 것보다 `prototype` 이 효율적인 이유는 , `this` 에 넣은것은 객체 하나를 만들때 마다 메서드도 하나씩 만들어 지기 때문에 메모리 낭비가 발생하지만 `prototype` 은 모든 객체가 공유하고 있어서 한번만 만들어 지기 때문에 불필요한 메모리 사용을 방지할 수 있다. 



