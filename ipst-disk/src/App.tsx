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

const router = createBrowserRouter([
  {
    path: "/",
    element: <EnterForm />,
  },
  {
    path: "/folders",
    element: <Folders />,
  },
]);

function App() {
  return (
    <Box sx={styles.app}>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
