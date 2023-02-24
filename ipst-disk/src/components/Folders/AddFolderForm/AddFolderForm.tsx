import { Button, TextField } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import styles from "./muiStyles";
import "./addfolderform.css";
import { submitHandle } from './scripts';

interface IAddFolderProps {
  folderId: string
}

export function AddFolderForm({folderId}: IAddFolderProps) {
  const dispatch = useAppDispatch();

  const mainLink = "http://91.193.183.139:7000";

  return (
    <>
      <h2 className='modal-header'>
        Add Folder
      </h2>

      <form id = "addFolderForm" onSubmit={(e) => {submitHandle(e, mainLink + "/drive/folder", `${folderId}`, dispatch)}}>
        <TextField sx={styles.textInput} fullWidth label="Name of folder" id="name" name='name' />

        <Button sx = {styles.button} type="submit" variant="contained">
          Add
        </Button>
      </form>
    </>
  );
}
