import { SxProps, Theme } from "@mui/material/styles";

type TUploader = {
    [N: string]: SxProps<Theme> | undefined
}

const uploaderMui: TUploader = {
    modal: {
        
    },
    
    addFile: {
        boxSizing: "border-box",

        position: "fixed",
        top: "50%",
        left: "50%",

        width: 500,
        height: 400,
        padding: "20px 30px",

        border: "2px solid #333",
        borderRadius: 15,

        transform: 'translate(-50%, -50%)',
    }
}
export default uploaderMui