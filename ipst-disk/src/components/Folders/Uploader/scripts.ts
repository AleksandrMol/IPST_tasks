import axios from "axios";
import { fetchGetFolder } from "../../../features/Folders/getFolders";
import { TDispatch } from "../scripts";
import { IHandleFiolesChangeProps, TState } from "./types";

export const handleFilesChange = ({...props}: IHandleFiolesChangeProps ) => {
    console.log("handleFilesChange");
    let stateArr:TState = props.files.map((el) => {
        return {
            folderId: props.path,
            file: el,
        }
    })
    props.setFilesToUpload(stateArr);
};

export const uploadFiles = (files: TState, dispatch: TDispatch) => {
    // Create a form and post it to server
    let token = sessionStorage.getItem("token") as string;

    for (let i = 0; i < files.length; i++) {
        let formData = new FormData();

        formData.append("file", files[i].file);
        formData.append("folderId", files[i].folderId);
        
        axios.post("http://91.193.183.139:7000/drive/files", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                }
            })
            .then((res) => {
                dispatch(fetchGetFolder({token, folderId: files[0].folderId}));
            })
            .catch((err) => {
                console.log(err);
            })
    }

    
    console.log("Uploaded");

};