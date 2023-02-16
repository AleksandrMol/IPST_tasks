import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  registerToken,
} from '../../features/Autorization/registerSlise';
import { 
  foldersData,
  fetchGetFolder
} from '../../features/Folders/getFolders';
import { submitHandle } from './scripts';
import { useNavigate } from "react-router-dom";
import './enterform.css';

export function EnterForm() {
  const [typeOfForm, setTypeOfForm] = React.useState<"log" | "reg">("log");
  const regToken = useAppSelector(registerToken);
  const folders = useAppSelector(foldersData);

  const dispatch = useAppDispatch();
  
  const mainLink = "http://91.193.183.139:7000";

  const navigate = useNavigate();
  
  console.log("token in component " + regToken.token);

  const redirect = (token: string) => {
    console.log("token in redirect " + token);

    (token !== "error" && token !== "")? navigate("/folders") : console.log("");
  }

  return (
    <>
      <div className=''>
        <div className='' onClick={() => {setTypeOfForm("log")}}> 
          Login
        </div>
        <div className='' onClick={() => {setTypeOfForm("reg")}}>
          Registration
        </div>
      </div>

        <form onSubmit={(e) => {submitHandle(e, dispatch, mainLink + (typeOfForm === "log"? "/auth/login" : "/auth/register")).then(() => {redirect(regToken.token)})}}>
          <div className="input-block">
            <label className='enter-label' htmlFor="login">
              login
            </label>
            <input required type="text" className="enter-input" name='login' id='login' placeholder='login'/>
          </div>

          <div className="input-block">
            <label className='enter-label' htmlFor="password">
              password
            </label>
            <input required type="text" className="enter-input" name='password' id='password' placeholder='password'/>
          </div>

          <button>
            {
              typeOfForm === "log"? "Login" : "Register"
            } 
          </button>
{/* 
          <div onClick={() => {dispatch(fetchGetFolder(regToken.token))}}>
            Данные
          </div> */}
        </form>
    </>
  );
}
