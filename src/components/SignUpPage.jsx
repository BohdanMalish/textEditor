import React, { useState } from "react";
import "./LoginPage.css";

const SignUpPage = () => {
  const [repeatPassword, setRepeatPassword] = useState("");
  const [password, setPassword] = useState("");
  const register=(e)=>{
    e.preventDefault();
    const obj={
        'name':e.target.name.value,
        'lastName':e.target.lastName.value,
        'email':e.target.email.value,
        'password':e.target.password.value,

    }
    console.log(obj);
  }
  return (
    <div className={"SignUpPageWrapper"}>
      <div className={"FormWrapper"}>
        <form onSubmit={(e) => {
                register(e);
            
              }}>
          <label htmlFor="inputName">Введіть ім'я</label>
          <div id="inputName" className={"InputWrapper"}>
            <input name='name' type="text"></input>
          </div>
          <label htmlFor="InputLastName">Введіть прізвище</label>
          <div id="InputLastName" className={"InputWrapper"}>
            <input name='lastName' type="text"></input>
          </div>
          <label htmlFor="Email">Введіть пошту</label>
          <div id="Email" className={"InputWrapper"}>
            <input
            name='email'
              type="email"
            ></input>
          </div>
          <label htmlFor="Password">Введіть пароль</label>
          <div id="Password" className={"InputWrapper"}>
            <input
            name='password'
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></input>
          </div>
          <label htmlFor="PasswordRepeat">Повторіть пароль</label>
          <div id="PasswordRepeat" className={"InputWrapper"}>
            <input
              onChange={(e) => setRepeatPassword(e.target.value)}
              type="password"
            ></input>
          </div>
          <div>
          {password===repeatPassword||password===''||repeatPassword===''?null:(<div className={'PasswordRepeatCheck'}>Password must be matched</div>)}
            <button
              type='submit'
              disabled={password!==repeatPassword}
              className={"ButtonSend"}
            >
              Увійти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
