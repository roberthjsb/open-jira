import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const lightTheme=createTheme({
    palette:{
      mode:'light',
      background:{
        default:grey[300]
      },
      primary:{
        main: '#000089'
      },
      secondary:{
        main:'#4444ee'
      },
      error:{
        main:red.A400
      }
    },
    components:{
      MuiAppBar:{
          defaultProps:{
              elevation:0,
          },
      }
  }
  });