import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import changeId from "./store.js";

const App = () => {
  const id = useSelector((state) => state.id);

  console.log(id);
  return (
    <>
      {id ? (
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/register" element={<Form />} />
          <Route path="*" element={<Navigate to="/register" replace />} />
        </Routes>
      )}
    </>
  );
};

const Form = () => {
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch();
  const handleChangeId = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    dispatch({ type: "Login", payload: inputValue });
  };

  return (
    <div>
      <input
        data-testid="id-input"
        type="text"
        name="id"
        value={inputValue}
        onChange={handleChangeId}
      />
      <button type="button" onClick={handleClick}>
        회원가입
      </button>
    </div>
  );
};

const Hello = () => {
  const id = useSelector((state) => state.id);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: "Logout" });
  };

  return (
    <>
      <div>안녕하세요 {id}님!</div>
      <button type="button" onClick={handleLogout}>
        로그아웃
      </button>
    </>
  );
};

export default App;
