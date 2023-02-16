import { SxProps, Theme } from "@mui/material/styles";

type TApp = {
    [N: string]: SxProps<Theme> | undefined
}

const appMui: TApp = {
    app: {
        boxSizing: "border-box",

        width: "100%",
        minHeight: "100vh",
    }
}
export default appMui