export type TPostParams = {
    link: string,
    fields: {
        [N: string]: string,
    }
}


export type TypesedObjDeep<T> = {
    [N in keyof /*перебирает ключи из объектов*/ T]: T[N] extends object ? TypesedObjDeep<T[N]> : T[N]
}

interface IFolder {
    id: string;
    name: string;
    type: "folder";
}

interface IFile {
    id: string;
    file: {
        name: string;
        filepath: string;
    };
    type: "file";
    
}

export interface IFoldersState {
    data: {
        id: string,
        name: string,
        children: Array<IFolder | IFile>
    }
}