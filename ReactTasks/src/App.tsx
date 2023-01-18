import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { Form } from './Form';
import { SwitchInput } from './SwitchInput';


function App() {


  return (
    <div className="App">
      <CssBaseline />
      <h1>Первое задание</h1>
      <Form />
      <h1>Второе задание</h1>
      <SwitchInput />
    </div>
  );
}

export default App;
