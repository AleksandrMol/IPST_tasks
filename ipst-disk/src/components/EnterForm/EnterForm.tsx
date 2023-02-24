import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { submitHandle } from './scripts';
import { useNavigate } from "react-router-dom";
import './enterform.css';
import { increment } from '../../features/Path/pathSlice';
import { IconButton, Input, InputAdornment, TextField } from '@mui/material';
import { EyeClose } from '../../svg/EyeClose';
import { EyeOpen } from '../../svg/EyeOpen';

export function EnterForm() {
  const [typeOfForm, setTypeOfForm] = React.useState<"log" | "reg">("log");
  const [showPassword, setShowPassword] = React.useState(false);

  const dispatch = useAppDispatch();
  
  const mainLink = "http://91.193.183.139:7000";

  const navigate = useNavigate();
  

  const redirect = (token: string | null) => {

    if (token !== "error" && token !== "" && token !== null) {
      dispatch(increment("folders"));
      navigate("/folders");
    }

    (token !== "error" && token !== "" && token !== null)? navigate("/folders") : console.log("");
  }


  return (
    <section className='section-form-container'>

      <h1 className='section-form-header'>
        IT'S DISK FOR IPST
      </h1>

      <div className='form-switch'>
        <div className= {`switch-point ${typeOfForm === "log"? "active" : ""}`} onClick={() => {setTypeOfForm("log")}}> 
          Login
        </div>

        <div className= {`switch-point ${typeOfForm === "reg"? "active" : ""}`} onClick={() => {setTypeOfForm("reg")}}>
          Registration
        </div>
      </div>

        <form className='enter-form' onSubmit={(e) => {submitHandle(e, mainLink + (typeOfForm === "log"? "/auth/login" : "/auth/register")).then(() => {redirect(sessionStorage.getItem("token"))})}}>
          <div className="input-block">
            
            <TextField fullWidth label="login" required className="enter-input" name='login' id='login'/>
          </div>

          <div className="input-block">
            <label className='enter-label' htmlFor="password">
              password
            </label>
            <Input
              fullWidth 
              required 
              type={showPassword ? 'text' : 'password'} 
              className="enter-input" 
              name='password' 
              id='password' 
              placeholder='password'
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {setShowPassword(!showPassword)}}
                    onMouseDown={() => {console.log()}}
                  >
                    {showPassword ? <EyeOpen /> : <EyeClose />}
                  </IconButton>
                </InputAdornment>
              }
             />
          </div>

          <button className='form-button'>
            {
              typeOfForm === "log"? "Login" : "Register"
            } 
          </button>
        </form>
    </section>
  );
}
