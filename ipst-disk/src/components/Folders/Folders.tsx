import React from 'react';
import './folders.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { 
  foldersData,
} from '../../features/Folders/getFolders';
import styles from "./muiStyles";

import { Uploader } from './Uploader';
import { AddFolderForm } from './AddFolderForm';
import { pathRouter } from '../../features/Path/pathSlice';
import { useNavigate } from 'react-router-dom';
import { dispathPathDecrement, loadFolder } from './scripts';
import { Box, Button, Modal } from '@mui/material';
import CreateNewFolderTwoToneIcon from '@mui/icons-material/CreateNewFolderTwoTone';
import NoteAddTwoToneIcon from '@mui/icons-material/NoteAddTwoTone';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import { Cells } from './Cells';

interface IFolderProps {
  path: string;
}

export function Folders({ ...props }: IFolderProps) {
  const folders = useAppSelector(foldersData);
  const pathState = useAppSelector(pathRouter);

  const [addFileOpen, setAddFileOpen] = React.useState(false);
  const [addFolderOpen, setAddFolderOpen] = React.useState(false);

  console.log(props.path)

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    loadFolder(props.path, dispatch);
  }, [props.path])

  return (
    <>
      <div className='folders-container'>
        <div className='button-container'>
          <button className='add-button' onClick={() => {setAddFileOpen(true)}}>
            <NoteAddTwoToneIcon htmlColor='#188054'/>
          </button>

          <button className='add-button' onClick={() => {setAddFolderOpen(true)}}>
            <CreateNewFolderTwoToneIcon htmlColor='#188054'/>
          </button>
        </div>


        <h1 className='folders-header'>
          <div className="back-icon">
            { props.path !== "folders" &&
              <ArrowBackTwoToneIcon onClick = {() => {dispathPathDecrement(dispatch, navigate, pathState.value)}}/>
            }
          </div>
          {folders.data.name}
        </h1>
        {
          folders.data.children.length === 0 &&
          <h1>На данный момент ни папок, ни файлов не загружено</h1>
        }

        {
          folders.data.children.length !== 0 &&
          <Cells folders={folders}/>
        }

        <Modal
          open={addFileOpen}
          onClose={() => {setAddFileOpen(false)}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={styles.modal}
        >
          <Box sx = {styles.addFile}>
            <Uploader folderId = {folders.data.id}/>
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
            <AddFolderForm folderId = {folders.data.id}/>
          </Box>
        </Modal>
      </div>
    </>
  );
}