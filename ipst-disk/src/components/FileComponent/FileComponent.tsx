import React from 'react';
import './filecomponent.css';
import InsertDriveFileTwoToneIcon from '@mui/icons-material/InsertDriveFileTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { deleteFileHandle } from './scripts';
import { Modal, Button } from '@mui/material';
import { useAppDispatch } from '../../app/hooks';
import styles from "./muiStyles";

interface IFileComponentProps {
  id: string;
  name: string;
  filepath: string;
  parentId: string;
}

export function FileComponent({id, name, filepath, parentId}: IFileComponentProps) {

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const dispatch = useAppDispatch();

  return (
    <div id = {id} className='cell'>
      <InsertDriveFileTwoToneIcon htmlColor='#188054'/>

      <span className='cell-name'>
        {name}
      </span>

      <div className="folder-edit-delete">
        <DeleteTwoToneIcon className='folder-icon-action' htmlColor='#ac281e' onClick = {(e) => {setModalIsOpen(true)}}/>
      </div>

      <a href={filepath} target = "_blank" id={id} className="forClick"  onClick = {(e) => {}}></a>

      <Modal
          open={modalIsOpen}
          onClose={() => {setModalIsOpen(false)}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className='modal'>
            <h2>
              Are You Shure?
            </h2>

            <p>
              Delete this file - "{name}"
            </p>
            
            <Button sx = {styles.button} variant="contained" onClick={() => {deleteFileHandle(id, parentId, dispatch)}}>
              Delete
            </Button>
          </div>
      </Modal>
    </div>
  );
}
