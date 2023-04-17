import React, { useState } from "react";
import Book from "./../../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";

const FirstLogin = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");
  const [eye, setEye] = useState(false);
  const [errors, setErrors] = useState(false);
  const [data, setData] = useState(false);
//   const submitThis = () => {
//     const info = { email: email, passw: passw };
//     setDataInput([info]);
//   };

  const Users = [
    {
        name: "Syrgabek",
        poss: "1234"
    },
    {
        name: "Aiba",
        poss: "1234"
    }
  ]

  const getUsers = () =>{
    if (email !== Users.name){
        setErrors(true)
    }
    else if (passw !==  Users.poss){
        setErrors(true)
    }
  }

  const getPage = (
    <form  action="" onSubmit={() => {
        // submitThis()
        getUsers()
    }} className="firstLogin--block__login">
    
      <h2>Войти в аккаунт</h2>
      <input
      style={{
        border: errors ? "1px solid red" : ""
      }}
        className="IWillForgetYou"
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        <input
        style={{
            border: errors ? "1px solid red" : ""
        }}
          className="forgetMe"
          type={!eye ? "password" : "rf"}
          name="passw"
          id="passw"
          value={passw}
          placeholder="Password"
          onChange={(e) => setPassw(e.target.value)}
        />
        {eye ? (
          <BsEyeSlash
            className="firstLogin--block__login--icon"
            onClick={() => setEye(false)}
          />
        ) : (
          <BsEye
            className="firstLogin--block__login--icon"
            onClick={() => setEye(true)}
          />
        )}
      </div>
      <button>Войти</button>
      <h3>Забыли пароль?</h3>
    </form>
  )

  return (
    <div id="firstLogin">
      <div className="container">
        <div className="firstLogin">
          <div className="firstLogin--block">
            <img src={Book} alt="" />
            <h1>SELF DEVELOPING SCHOOL</h1>
            {!data && getPage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstLogin;
