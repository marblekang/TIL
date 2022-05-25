import React, { useRef, useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/hello/:id" element={<Hello />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

const Main = () => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const idInput = React.useRef(null);
  const passwordInput = React.useRef(null);

  const checkIdValid = (id) => {
    return id.length >= 6 && id.length <= 20;
  };
  const checkPasswordValid = (password) => {
    return password.length >= 12 && password.length <= 20;
  };

  const handleClick = () => {
    if (!checkIdValid(id)) {
      setId("");
      idInput.current?.focus();
      alert("유효하지 않은 id입니다.");
      return;
    }
    if (!checkPasswordValid(password)) {
      setPassword("");
      passwordInput.current?.focus();
      alert("유효하지 않은 password입니다.");
      return;
    }

    window.location.href = `/hello/${idInput.current.value}`;
  };

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="id"
          placeholder="6글자 이상 20글자 이하"
          ref={idInput}
          value={id}
          onChange={handleChangeId}
        />
        {!checkIdValid(id) && "유효하지 않은 id입니다."}
      </div>
      <div>
        <input
          type="text"
          name="password"
          placeholder="12글자 이상 20글자 이하"
          ref={passwordInput}
          value={password}
          onChange={handleChangePassword}
        />
        {!checkPasswordValid(password) && "유효하지 않은 password입니다."}
      </div>

      <button
        type="button"
        onClick={handleClick}
        disabled={!(id.length || password.length)}
      >
        회원가입
      </button>
    </div>
  );
};

const Hello = () => {
  const { id } = useParams();
  return <>환영합니다. {id}</>;
};
export default App;
