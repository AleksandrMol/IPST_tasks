import { SxProps, Theme } from "@mui/material/styles";

type TApp = {
    [N: string]: SxProps<Theme> | undefined
}

const appMui: TApp = {
    app: {
        boxSizing: "border-box",

        maxWidth: "1800px",
        minHeight: "100vh",
        marginRight: "auto",
        marginLeft: "auto",
    }
}
export default appMui