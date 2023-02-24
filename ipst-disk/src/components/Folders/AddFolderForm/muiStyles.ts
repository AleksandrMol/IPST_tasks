import { SxProps, Theme } from "@mui/material/styles";

type TStyles = {
    [N: string]: SxProps<Theme> | undefined
}

const stylesMui: TStyles = {
    textInput: {
        marginBottom: "15px",
        '& label.Mui-focused': {
            color: '#188054',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#188054',
          },
            '& .MuiOutlinedInput-root': {
                
                '&.Mui-focused fieldset': {
                borderColor: '#188054',
                },
            }
    },
    button: {
        background: "#188054",
        "&:hover":{
            background: "#23BB52",
        }
    }
}
export default stylesMui