import React, { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { setUser } = useContext(UserContext);
  const { setPassword } = useContext(UserContext);

  const userInputHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordInputHandler = (e) => {
    setPasswordInput(e.target.value);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    setUser(userName);
    setPassword(passwordInput);
  };

  return (
    <div className="flex flex-wrap justify-center">
      <h2 className="w-full p-4">Login</h2>
      <div className="flex gap-4">
        <input
          type="text"
          className="rounded-lg text-gray-600 p-2"
          value={userName}
          onChange={userInputHandler}
        />
        <input
          type="text"
          className="rounded-lg text-gray-600 p-2"
          value={passwordInput}
          onChange={passwordInputHandler}
        />
        <button
          className="bg-gray-500 rounded-lg w-24 h-10 hover:bg-gray-600"
          onClick={onClickHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
