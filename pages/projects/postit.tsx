import type { NextPage } from 'next'
import NavBar from "../../components/NavBar/NavBar"
import Typography from "@mui/material/Typography"
import AppTheme from "../../styles/AppTheme"
import { ThemeProvider } from '@mui/material/styles'
import styles from "../../styles/Home.module.css"
import Button from "@mui/material/Button"

/**
 * Page for the CPSC 210 course project
*/
const PostIt: NextPage = () => {
  return (
    <ThemeProvider theme={AppTheme}>
        <NavBar />
        <div
            className={styles.pageTitle}
            id="ProjectsPageHeader"
        >
            <Typography variant="h2">
                PostIt
            </Typography>
            <a href="https://github.com/sauravbanna/PostIt" target="_blank" rel="noreferrer">
                <Button disableRipple>
                    Github Link
                </Button>
            </a>
        </div>
        <div
            className={styles.pageContent}
        >
            <Typography variant="h4">
                About
            </Typography>
            &nbsp;
            <Typography variant="h6">
                ...
            </Typography>
            &nbsp;
            &nbsp;
             <Typography variant="h4">
                Motivation
            </Typography>
            &nbsp;
            <Typography variant="h6">
                ...
            </Typography>
            &nbsp;
            &nbsp;
            <Typography variant="h4">
                How to Use
            </Typography>
            &nbsp;
            <Typography variant="h6">
                ...
            </Typography>
            &nbsp;
            &nbsp;
            <Typography variant="h4">
                Tech Stack
            </Typography>
            &nbsp;
            <Typography variant="h6">
                ...
            </Typography>
            <ul>
                <li>
                    <Typography variant="h6">
                        ...
                    </Typography>
                </li>
            </ul>
        </div>
    </ThemeProvider>
  )
}

export default PostIt
