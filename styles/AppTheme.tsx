import {APP_FONT} from "../utils/constants"
import { createTheme } from '@mui/material/styles'

const AppTheme = createTheme({
    typography:{
        fontFamily: APP_FONT,
        h2: {
            fontWeight: "bold"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "white",
                    backgroundColor: "rgb(79, 110, 128)",
                    borderRadius: "0.5em",
                    marginLeft: "1em",
                    marginRight: "1em",
                    boxSizing: "border-box",
                    padding: "0.6em",
                    paddingLeft: "1em",
                    paddingRight: "1em",
                    '&:hover': {
                        boxShadow: "0.2em 0.2em rgba(0, 0, 0, 0.3)"
                    },
                    '&:active': {
                        boxShadow: "inset 0.2em 0.2em rgba(0, 0, 0, 0.3)"
                    }
                }
            }
        }
    }
})


export default AppTheme