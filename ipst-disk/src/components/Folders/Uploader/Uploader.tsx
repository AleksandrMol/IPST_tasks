import React from 'react';
import styles from "./muiStyles";
import FileUpload from "react-mui-fileuploader";
import { ExtendedFileProps } from 'react-mui-fileuploader/dist/types/index.types';
import { Button } from '@mui/material';
import { handleFilesChange, uploadFiles } from './scripts';
import { useAppSelector } from '../../../app/hooks';
import { registerToken } from '../../../features/Autorization/registerSlise';



export function Uploader() {
  const [filesToUpload, setFilesToUpload] = React.useState<ExtendedFileProps[]>([]);

  const regToken = useAppSelector(registerToken);


  return (
    <>
      <FileUpload
        multiFile={true}
        header="Drag with mouse"
        onFilesChange={(files) => {handleFilesChange({files, setFilesToUpload})}}
        onContextReady={(context) => {}}
      />
      <Button onClick={() => {uploadFiles(filesToUpload, regToken.token)}} variant="contained" id="uploadButton">
        Upload
      </Button>
    </>
  );
}
