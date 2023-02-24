import React from 'react';
import styles from "./muiStyles";
import FileUpload from "react-mui-fileuploader";
import { Button } from '@mui/material';
import { handleFilesChange, uploadFiles } from './scripts';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { TState } from './types';

interface IUploaderProps {
  folderId: string,
}

export function Uploader({folderId}: IUploaderProps) {
  const [filesToUpload, setFilesToUpload] = React.useState<TState>([]);

  const dispatch = useAppDispatch();



  return (
    <>
      <FileUpload
        multiFile={true}
        header="Drag with mouse"
        onFilesChange={(files) => {handleFilesChange({files, setFilesToUpload, path : `${folderId}`})}}
        onContextReady={(context) => {}}
        containerProps = {{sx: styles.container}}
        BannerProps={{
          sx: styles.banner
        }}
    
      />
      <Button sx = {styles.button} onClick={() => {uploadFiles(filesToUpload, dispatch)}} variant="contained" id="uploadButton">
        Upload
      </Button>
    </>
  );
}
