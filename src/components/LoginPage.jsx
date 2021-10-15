import React,{useState} from 'react';
import './LoginPage.css';

const SignInPage = () => {
  const [login,setLogin]=useState('');
  const [password,setPassword]=useState('');
  const logIN=(e)=>{
    e.preventDefault();
    const obj={
        'password':password,
        'login':login,
    }
    console.log(obj);
  }
  return(
  <div className={'LoginPageWrapper'}>
      <div className={'FormWrapper'}>
         <form onSubmit={(e)=>{logIN(e)}}>
            <div className={'InputWrapper'}><input onChange={(e)=>setLogin(e.target.value)} type="email"></input></div>
            <div className={'InputWrapper'}><input onChange={(e)=>setPassword(e.target.value)} type="password"></input></div>
            <div><button type='submit' className={'ButtonSend'} >Увійти</button></div>
         </form>
      </div>
  
  </div>
    );
}

export default SignInPage;
