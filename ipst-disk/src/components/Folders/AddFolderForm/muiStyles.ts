import { SxProps, Theme } from "@mui/material/styles";

type TStyles = {
    [N: string]: SxProps<Theme> | undefined
}

const stylesMui: TStyles = {
    textInput: {
        marginBottom: "15px",
    }
}
export default stylesMui