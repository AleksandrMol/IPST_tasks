import { SxProps, Theme } from "@mui/material/styles";

type TFolders = {
    [N: string]: SxProps<Theme> | undefined
}

const foldersMui: TFolders = {
    modal: {
        
    },
    
    addFile: {
        boxSizing: "border-box",

        position: "fixed",
        top: "50%",
        left: "50%",

        width: 500,
        minHeight: 400,
        padding: "20px 30px",

        // border: "2px solid #333",
        borderRadius: 3,
        backgroundColor: "#fff",
        transform: 'translate(-50%, -50%)',
    }
}
export default foldersMui