```js
import React, { useState, createContext, useContext } from "react";

const NameContext = createContext(); //초깃값 선언은 해도 되고 안해도 됨.
const App = () => {
  const [name, setName] = useState("kim");
  const [age, setAge] = useState(10);
  return (
    <>
      <input type="text" onChange={(e) => setAge(e.target.value)} value={age} />
      <NameContext.Provider value={{ name, age }}>
        {/*  JSX문법 안에 object 넣기, 너무 많으면 밖에 따로 선언해줘도 됨 */}
        <Hello1 />
      </NameContext.Provider>
    </>
  );
};
export default App;

const Hello1 = () => {
  const { name, age } = useContext(NameContext); //받아서 쓰기
  return (
    <div>
      {" "}
      this is Hello1. and Name is {name} {age} <Hello4 />{" "}
    </div>
  );
};

const Hello4 = () => {
  const { name, age } = useContext(NameContext);
  return (
    <div>
      this is Hello4. and Name is {name} {age}
    </div>
  );
};
```
