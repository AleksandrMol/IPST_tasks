import { ExtendedFileProps } from "react-mui-fileuploader/dist/types/index.types";

export type TState = {
    folderId: string,
    file: Blob;
}[];

export interface IHandleFiolesChangeProps {
    files:  Blob[],
    setFilesToUpload: React.Dispatch<React.SetStateAction<TState>>,
    path: string,
}