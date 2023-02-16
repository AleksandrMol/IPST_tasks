import React from 'react';
import './folders.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { registerToken } from '../../features/Autorization/registerSlise';
import { 
  foldersData,
  fetchGetFolder
} from '../../features/Folders/getFolders';
import styles from "./muiStyles";

import { Box, Button, Grid, Modal } from '@mui/material';
import { Uploader } from './Uploader';
import { AddFolderForm } from './AddFolderForm';

export function Folders() {
  const regToken = useAppSelector(registerToken);
  const folders = useAppSelector(foldersData);

  const [addFileOpen, setAddFileOpen] = React.useState(false);
  const [addFolderOpen, setAddFolderOpen] = React.useState(false);


  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchGetFolder(regToken.token))
  }, []);

  return (
    <Box>
      <Button variant="outlined" onClick={() => {setAddFileOpen(true)}}>
        Add File
      </Button>

      <Button variant="outlined" onClick={() => {setAddFolderOpen(true)}}>
        Add folder
      </Button>
      {
        folders.data.children.length === 0 &&
        <h1>На данный момент ни папок, ни файлов не загружено</h1>
      }
      {
        folders.data.children.length !== 0 &&
        <Grid container spacing={2}>
          {
            folders.data.children.map((el) => {
              return <Grid key={el.id} item xs = {2}>{el.type === "folder"? el.name : el.file.name}</Grid>
            })
          }
        </Grid>
      }
      <Modal
        open={addFileOpen}
        onClose={() => {setAddFileOpen(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={styles.modal}
      >
        <Box sx = {styles.addFile}>
          <Uploader/>
        </Box>
      </Modal>

      <Modal
        open={addFolderOpen}
        onClose={() => {setAddFolderOpen(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={styles.modal}
      >
        <Box sx = {styles.addFile}>
          <AddFolderForm />
        </Box>
      </Modal>
    </Box>
  );
}
