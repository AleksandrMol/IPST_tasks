import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { fetchGetFolder } from "../../features/Folders/getFolders";
import { increment } from "../../features/Path/pathSlice";
import { TDispatch } from "../Folders/scripts";

export const dispathPathIncrement = (id: string, dispatch: TDispatch , navigate: NavigateFunction) => {

    dispatch(increment(id));
    
    navigate(`${document.location.pathname}/${id}`);
}

export const deleteFileHandle = (id: string, parentId: string, dispatch: TDispatch) => {
    let token = sessionStorage.getItem("token") as string;

    axios.delete(`http://91.193.183.139:7000/drive/files/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    .then((res) => {
        dispatch(fetchGetFolder({token, folderId: parentId}));
    })
    .catch((err) => {
        console.log(err);
    })
}
