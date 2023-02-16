import { AnyAction, Dispatch, EntityState, ThunkDispatch } from "@reduxjs/toolkit";
import {
    fetchRegister,
} from '../../features/Autorization/registerSlise';
import { AxiosStatic } from "axios";

export class PostParameters { 
    link: string
    fields: {
        [N: string]: string;
    };
    constructor(arr: NodeListOf<HTMLInputElement>, link: string) {
        let inputNames: Array<string> = Array.prototype.slice.call(arr).map((el) => { 
            return el.name 
        });
        this.link = link;
        this.fields = {}
        for (let i = 0; i < inputNames.length; i++) { 
            let name: string = inputNames[i];
            this.fields[name] = arr[i].value;
        }
    }
};

type TDispatch = ThunkDispatch<{
    token: EntityState<unknown> & {
        token: string;
    };
}, AxiosStatic, AnyAction> & Dispatch<AnyAction>;

export async function submitHandle(
    e :React.FormEvent<HTMLFormElement>,
    dispatch: TDispatch,
    link: string
    ) {
    e.preventDefault();
    let form = document.querySelector("form") as HTMLFormElement;
    let inputs = form.querySelectorAll("input");
    let params = new PostParameters(inputs, link);

    await dispatch(fetchRegister(params));
    console.log("scripts loaded")
};

