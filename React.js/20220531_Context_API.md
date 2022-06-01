## 1.Context
- context는 부모 컴포넌트로부터 자식 컴포넌트로 전달되는 데이터의 흐름과는 상관없이 전역적인 데이터를 다룰 때 사용한다. 

- 즉,  컴포넌트간 props 를 일일이 전달하는 props drilling 현상을 개선하기 위해 사용한다. 

- context 를 사용하면 단계마다 props를 넘겨주지 않고도 컴포넌트 트리 전처에    데이터를 제공할 수 있다. 
<br>
<hr>

## 2.셋팅 & 사용법
```javascript
(App.js)

let stockContext = React.createContext(); // context 생성 후 변수에 저장.

function App(){
  let [stock, setStock] = useState([10,11,12]);
  
  return (
    <div>
     {/* Card */}
          <stockContext.Provider value={stock}> //  stock 이라는 state 의 값을 감싼 범위 내에서 공유
          <div className='container'>
            <div className='row'>
            {shoes.map(function(a,i){
              return(
                <Card shoes={shoes} i={i} key={i}></Card>
              )
            })}
            </div>
          </div>
          </stockContext.Provider>
    <div/>
  )
}
```

- `React.createContext();` : context 생성하기.
- `<context이름.Provider value={state이름} >` :  state 값 공유를 원하는 컴포넌트들을 <범위></범위>로 전부 감싼후, value={state이름} 이렇게 공유할 state를 집어넣으면 된다.

```javascript
(App.js)

function Card(props){

  let stock = useContext(stockContext); // 범위 입력

  return(

    <div className='col-md-4'>  
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.shoes[props.i].id+1)+'.jpg'} width="100%" />
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
      <p>{props.shoes[props.i].price}</p>
      <p>{Stock : {stock}}</p> 
    </div>
  )  
}

```
- `useContext()` : 
    
    state를 사용하기위해 `useContext(context이름)` 이렇게 사용을 원하는 context를 불러온다. 

    `let stock` 이라는 변수에 미리 지정해 뒀던 stock 이라는 state를 저장해서 쓰겠다는 뜻이다. 
