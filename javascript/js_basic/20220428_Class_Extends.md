# 클래스 상속 



## 클래스는 무엇인가?

![](https://velog.velcdn.com/images%2Fdpdnjs402%2Fpost%2Fd05978f8-5b00-4a89-8b29-3877add90480%2F0_6toopU9v5QWIKBwx.png)

- 클래스는 ES6 부터 지원하기 시작했다. IE 에서는 사용이 불가능 하나 최신 브라우저 에서는 클래스 를 지원한다.

- 자바스크립트에서는 클래스 를 통해 클래스 기반 객체지향 프로그래밍 언어와 매우 흡사한 새로운 객체 생성 매커니즘을 구현한다.

---

<br>


## 클래스의 구성.

### new 
- 클래스는 `new` 연산자 없이는 호출이 불가능하다. 

### constructor

- `constructor` 를 이용하면 class 객체의 초기값을 설정 해 줄 수 있다.
- `constructor` 는 class 내부에 한 개만 존재 할 수 있다.

### prototype method

- 프로토타입으로 메서드를 만들어 주지 않으면 클래스가 생성될 때마다 계속해서 메서드를 생성해 줘야 한다.
- 클래스는 보다 간결하게 프로토타입 메서드를 생성하는 것이 가능하다. 


```javascript
class User {
  constructor(name,age,country){ //constructor
    this.name = name;
    this.age = age;
    this.country = country;
  }
  hello(){ //프로토타입 메서드 
    return `Hello ${this.name}`
  }
}

// 클래스로부터 새로운 인스턴스 생성
const peter = new User('peter',30,'USA');

console.log(peter) // User {name: 'peter', age: 30, country: 'USA'}

// 프로토타입 메서드 호출
console.log(peter.hello()); // Hello peter
```

### extends
- extends 문법을 통해 상속을 통한 클래스 확장이 가능하다. 
- 클래스 확장이란 기존 클래스를 상속 받아 새로운 클래스를 확장하는 것을 의미한다. 

```javascript
class User {
  constructor(name,age,country){ 
    this.name = name;
    this.age = age;
    this.country = country;
  }
  hello(){ 
    return `Hello ${this.name}`
  }
}

//상속을 통한 클래스 확장
class UserInfo extends User {

  userinfo() {
    return `name:${this.name} , age: ${this.age} country:${this.country}`
  }
}

const kang = new UserInfo('Kang',30,'Korea');
console.log(kang.userinfo()) // name:Kang , age: 30 country:Korea
console.log(kang.hello()) // Hello Kang  

```

### super 
- 상속을 통해 만들어진 서브클래스 자체에서 필요한 프로퍼티를 초기화 시켜준다. 
- `super` 는 extends 로 상속중인 상위 클래스의 `constructor` 를 의미한다. 

```javascript
class UserInfo {
  constructor(lName,fName){
    this.lName = lName;
    this.fName = fName;
    
  }
  
}

class MoreUserInfo extends UserInfo {
  constructor(lName,fName,age){
   
    //상위 클래스 프로퍼티 중 서브 클래스에서만 사용할 요소 지정.
    super(lName,fName); 

    // 서브 클래스에서 새로 지정한 프로퍼티
    this.age = age;
  }
  introduce(){
    console.log(`안녕하세요 나는 ${this.fName} ${this.lName} 입니다. 나이는${this.age}살 입니다.`)
  }
} 

// UserInfo 와 MoreUserInfo 의 모든 프로퍼티를 상속받은 jiwon 인스턴스 생성.
const jiwon = new MoreUserInfo('jiwon','Kang',30);
console.log(jiwon);  // {lname: 'jiwon', fName: 'Kang', age: 30}
jiwon.introduce();  // 안녕하세요 나는 Kang jiwon 입니다. 나이는30살 입니다.

```




<br>



> Reference

https://wonjaetech.tistory.com/entry

https://ordinary-code.tistory.com/22