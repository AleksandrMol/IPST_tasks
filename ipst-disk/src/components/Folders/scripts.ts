import { AnyAction, Dispatch, EntityState, ThunkDispatch } from "@reduxjs/toolkit";
import { AxiosStatic } from "axios";
import { NavigateFunction } from "react-router-dom";
import { fetchGetFolder } from "../../features/Folders/getFolders";
import { decrement, increment } from "../../features/Path/pathSlice";

export type TDispatch = ThunkDispatch<{
    token: EntityState<unknown> & {
        token: string;
    };
}, AxiosStatic, AnyAction> & Dispatch<AnyAction>;



export const loadFolder = (path: string, dispatch: TDispatch) => {
    let token = sessionStorage.getItem("token") as string
    let folderId = path;

    dispatch(fetchGetFolder({token, folderId}));
}

export const dispathPathIncrement = (id: string, dispatch: TDispatch , navigate: NavigateFunction) => {
    // const element =;

    dispatch(increment(id));
    
    navigate(`${document.location.pathname}/${id}`);
}

export const dispathPathDecrement = (dispatch: TDispatch, navigate: NavigateFunction, pathState: string[]) => {
    dispatch(decrement());
    
    let pathArr = pathState.slice();

    pathArr.pop();
    console.log(pathArr.join("/"));

    navigate(pathArr.join("/"))
}

