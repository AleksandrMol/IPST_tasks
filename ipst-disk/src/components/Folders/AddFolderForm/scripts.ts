import axios from "axios"
import { fetchGetFolder } from "../../../features/Folders/getFolders";
import { TPostParams } from "../../../features/types";
import { TDispatch } from "../scripts";

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

const postFolder = async (params: TPostParams) => {
    let token = sessionStorage.getItem("token") as string;

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

export const submitHandle = (e: React.FormEvent<HTMLFormElement>, link: string, id: string, dispatch: TDispatch) => {
    e.preventDefault();

    let input = document.getElementById("name") as HTMLInputElement;
    let params = new AddFolderParams(link, input.value , id);
    let token = sessionStorage.getItem("token") as string;

    postFolder(params);

    dispatch(fetchGetFolder({token, folderId: id}));
}

