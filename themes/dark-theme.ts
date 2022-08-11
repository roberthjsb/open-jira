import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            main: '#330033'
        },
        error: {
            main: red.A400
        }
    },
    components:{
        MuiAppBar:{
            defaultProps:{
                elevation:0
            },
            styleOverrides:{
                root:{
                    backgroundColor:'#d72d48',
                }
            }
        }
    }
});

