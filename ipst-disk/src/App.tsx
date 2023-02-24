import { Box } from '@mui/material';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import styles from "./mitStyles";
import { EnterForm } from './components/EnterForm';
import { Folders } from './components/Folders';
import { pathRouter } from './features/Path/pathSlice';
import { useAppSelector, useAppDispatch } from './app/hooks';


function App() {
  const path = useAppSelector(pathRouter);
  console.log("App path = " + `${path.value.join("/")}`)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <EnterForm />,
    },
    {
      path: path.value.join("/") === "/"? "/folders" : `${path.value.join("/")}`,
      element: <Folders path = {path.value[path.value.length -1]}/>,
    },
  ]);

  return (
    <Box sx={styles.app}>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
