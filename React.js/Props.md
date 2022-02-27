## 1.props
- 리액트에서 애플리케이션을 설계할 때는 컴포넌트 간 데이터의 흐름을 구조하는 것이 중요하다. 여기서 말하는 컴포넌트 간 데이터의 흐름은 한 컴포넌트에서 다른 컴포넌트로 데이터 전달(props의 전달)을 의미한다. props의 전달은 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 것이며 , 자식 컴포넌트는 한 개가 될 수 있고 두개 이상이 될수 있다. 주의 사항으로는 자식 컴포넌트가 부모 컴포넌트에게 콜백함수를 사용해서 props를 전달할 수 있는데 ,이 과정이 복잡하며, 전달하는 기능(함수)은 부모 컴포넌트에서 구현되어야 한다.

<img src="https://blog.kakaocdn.net/dn/xHYQG/btrhN4ZPZGs/hnkRlJkUFHSvnxZ1gamz8k/img.png">

## 2. props 전달방법
 ### 1 ) App.js 설정
 ```javascript
 (App.js)
 function App(){
     let name = "kang";
     retrun(
         <div className="container">
            <h1>Hello world</h1>
            <Modal num = {1} ></Modal> // 전송할 데이터 이름 = {전송할 데이터}
         </div>
     )
 }
 ```
 ### 2 ) 클래스형 컴포넌트
  ```javascript
  class Modal extends Component {
      render() {
          return (
              <div className="container">
              <p>Number : {this.props.num}</p> // this.props.전송한 데이터 이름
              </div>
          )
      }
  }
  ```

 ### 3 ) 함수형 컴포넌트

```javascript
 function Modal(props){ //props
     return(
         <div className="container">
         <p>Number: {props.num}</p> // props.전송한 데이터 이름
         </div>
     )
 }
  ```