import React from 'react';
import './form.css';

export function Form() {

  class StateClass {
    name: string
    value: string

    constructor(name: string, value: string){
      this.name = name;
      this.value = value;
    }
  }

  const [formState, setFormState] = React.useState([
      new StateClass("login", ""),
      new StateClass("password", ""),
  ]);

  const setFnc = (e: HTMLInputElement) => {
    let newState: StateClass[] = [];

    for (let i = 0; i < formState.length; i++) {
      if(formState[i].name === e.id) {
        newState.push(new StateClass(e.id, e.value));
      }
      else{
        newState.push(new StateClass(formState[i].name, formState[i].value));
      }
    }
    setFormState(newState);
  }
 
  return (
    <>
      <form className='form' action="#">
        <div key="login">
          <label htmlFor="login">
            {formState[0].value? formState[0].value : "Login"}
          </label>
          <input className='form-input'  type="text" name="login" id="login" onChange={(e) => {setFnc(e.target)}}/>
        </div>

        <div key="pass">
          <label htmlFor="password">
          {formState[1].value? formState[1].value : "Password"}
          </label>
          <input className='form-input'  type="password" name="password" id="password" onChange={(e) => {setFnc(e.target)}}/>
        </div>
      </form>
    </>
  );
}
