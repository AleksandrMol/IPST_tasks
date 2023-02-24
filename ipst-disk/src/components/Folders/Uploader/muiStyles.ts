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
    },
    banner: {
        marginTop: "15px",
        background: "linear-gradient(85.21deg, #188054 2.78%, #23BB52 97.1%);"
    },
    container:{
        marginBottom: "15px",
    },
    button: {
        background: "#188054",
        "&:hover":{
            background: "#23BB52",
        }
    },
}
export default uploaderMui