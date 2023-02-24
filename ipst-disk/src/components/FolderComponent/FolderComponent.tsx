import React from 'react';
import './foldercomponent.css';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useAppDispatch } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { deleteFolderHandle, dispathPathIncrement, editFolderHandle } from './sctipts';
import { Button, Modal, TextField } from '@mui/material';

interface IFolferProps {
  id: string;
  name: string;
  parentId: string,
}

export function FolderComponent({id, name, parentId}: IFolferProps) {

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  
  return (
    <div  className = "cell">
      
      <FolderOpenTwoToneIcon className='folder-icon' htmlColor='#188054'/>

      <span className='cell-name'>
        {name}
      </span>

      <div className="folder-edit-delete">
        <EditTwoToneIcon className='folder-icon-action' htmlColor='#2e67bd' onClick = {(e) => {setModalIsOpen(true)}}/>
        <DeleteTwoToneIcon className='folder-icon-action' htmlColor='#ac281e' onClick = {(e) => {deleteFolderHandle(id)}}/>
      </div>

      <div id={id} className="forClick"  onClick = {(e) => {dispathPathIncrement(id, dispatch, navigate)}}></div>

      <Modal
          open={modalIsOpen}
          onClose={() => {setModalIsOpen(false)}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className='modal'>
            <h2>Add Folder</h2>

            <form id = "addFolderForm" onSubmit={(e) => {editFolderHandle(e, id, parentId)}}>
              <TextField fullWidth label="Name of folder" id="name" name='name' />

              <Button type="submit" variant="contained">
                Add
              </Button>
            </form>
          </div>
      </Modal>
    </div>

    
  );
}
