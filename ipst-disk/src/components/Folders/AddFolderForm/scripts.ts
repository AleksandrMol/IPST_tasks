import axios from "axios"
import { TPostParams } from "../../../features/types";

class AddFolderParams { 
    link: string
    fields: {
        [N:string] : string       
    };
    constructor(link: string, name:string, id: string) {
        this.link = link;
        this.fields = {};
        this.fields.name = name;
        this.fields.parentId = id;
    }
};

const postFolder = async (params: TPostParams, token: string) => {
    await axios.post(params.link, params.fields, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then(() => {
        console.log("res");
    })
    .catch(() => {
        console.log("err")
    })
}

export const submitHandle = (e: React.FormEvent<HTMLFormElement>, link: string, id: string, token: string) => {
    e.preventDefault();

    let input = document.getElementById("name") as HTMLInputElement;
    let params = new AddFolderParams(link, input.value , id);

    postFolder(params, token);
}

