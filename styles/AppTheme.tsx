import {APP_FONT} from "../utils/constants"
import { createTheme } from '@mui/material/styles'

const AppTheme = createTheme({
    typography: {
        fontFamily: APP_FONT,
        h2: {
            fontWeight: "bold",
            '@media (orientation: portrait)': {
                fontSize: '4vh'
            },
        },
        h3: {
        },
        h4: {
            '@media (orientation: portrait)': {
                fontSize: '3vh'
            },
            '@media (orientation: landscape)': {
                fontSize: '4vh'
            }
        },
        h5: {
            '@media (orientation: portrait)': {
                fontSize: '2.5vh'
            },
            '@media (orientation: landscape)': {
                fontSize: '2.7vh'
            }
        },
        h6: {
            '@media (orientation: portrait)': {
                fontSize: '2vh'
            }
        },
        subtitle1: {
            '@media (orientation: portrait)': {
                fontSize: '1.7vh'
            },
            '@media (orientation: landscape)': {
                fontSize: '2vh'
            }
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "white",
                    backgroundColor: "var(--app-color)",
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
                    },
                    '@media (orientation: portrait)': {
                        fontSize: '1.3vh'
                    }
                }
            }
        }
    }
})


export default AppTheme