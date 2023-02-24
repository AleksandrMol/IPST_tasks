import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { increment } from "../../features/Path/pathSlice";
import { TDispatch } from "../Folders/scripts";

export const dispathPathIncrement = (id: string, dispatch: TDispatch , navigate: NavigateFunction) => {

    dispatch(increment(id));
    
    navigate(`${document.location.pathname}/${id}`);
}

export const deleteFolderHandle = (id: string) => {
    let token = sessionStorage.getItem("token") as string;

    axios.delete(`http://91.193.183.139:7000/drive/folder/${id}`, {
        headers: {
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

export const editFolderHandle = (e: React.FormEvent<HTMLFormElement>, id: string, parentId: string) => {
    e.preventDefault();
    let token = sessionStorage.getItem("token") as string;
    const input = document.getElementById("name") as HTMLInputElement;
    
    console.log(id);
    console.log(token);

    axios.patch(`http://91.193.183.139:7000/drive/folder/${id}`,{
        parentId: parentId,
        name: input.value,
    }, {
        headers: {
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