import axios from "axios";
import { ExtendedFileProps } from "react-mui-fileuploader/dist/types/index.types";

interface IHandleFiolesChangeProps {
    files:  ExtendedFileProps[],
    setFilesToUpload: React.Dispatch<React.SetStateAction<ExtendedFileProps[]>>,
}

export const handleFilesChange = ({...props}: IHandleFiolesChangeProps ) => {
    console.log("handleFilesChange");
    console.log(props.files);
    
    props.setFilesToUpload([...props.files]);
};

export const uploadFiles = (files: ExtendedFileProps[], token: string) => {
    // Create a form and post it to server

    for (let i = 0; i < files.length; i++) {
        let formData = new FormData();
        formData.append("file", files[i]);

        axios.post("http://91.193.183.139:7000/drive/files", {
                folderId: "root",
                file: formData,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                }
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // files.forEach((file) => {
    //     formData.append(file.name, file);
    // });
    
    // console.log(formData.getAll("files"));

    // for (let i = 0; i < files.length; i++) {
        
    //     axios.post("http://91.193.183.139:7000/drive/files", {
    //             folderId: "root",
    //             file: formData.get(files[i].name),
    //         }, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         })
    //         .then((res) => {
    //             console.log(res);
    //         })
    // }
    console.log("UPLOAD");

    
   
};