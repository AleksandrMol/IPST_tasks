import { Button, TextField } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { registerToken } from '../../../features/Autorization/registerSlise';
import styles from "./muiStyles";
import { submitHandle } from './scripts';

export function AddFolderForm() {
  const regToken = useAppSelector(registerToken);

  const mainLink = "http://91.193.183.139:7000";

  return (
    <>
      <h2>Add Folder</h2>

      <form id = "addFolderForm" onSubmit={(e) => {submitHandle(e, mainLink + "/drive/folder", "root", regToken.token)}}>
        <TextField sx={styles.textInput} fullWidth label="Name of folder" id="name" name='name' />

        <Button type="submit" variant="contained">
          Add
        </Button>
      </form>
    </>
  );
}
