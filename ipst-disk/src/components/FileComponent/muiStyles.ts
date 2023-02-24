import { SxProps, Theme } from "@mui/material/styles";

type TFolders = {
    [N: string]: SxProps<Theme> | undefined
}

const foldersMui: TFolders = {
    button: {
        background: "#C92D2D",
        "&:hover":{
            background: "#E14343",
        }
    }
}
export default foldersMui