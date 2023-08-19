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
                PostIt is a Java Swing forum app where you can make posts, join communities and more!
            </Typography>
            <Typography variant="h6">
                This was made as part of my CPSC 210 coursework at UBC.
            </Typography>
            &nbsp;
            &nbsp;
             <Typography variant="h4">
                Motivation
            </Typography>
            &nbsp;
            <Typography variant="h6">
                For this course, we had to make a Java Swing GUI app, and we were free to choose any app idea for our project. I've used forums like Reddit in the past, so I thought it would be interesting to create something like that in Java.
            </Typography>
            <Typography variant="h6">
                I had a bit of experience with the Java Swing UI, but there was also a lot of new stuff, so I wanted to create something with enough depth to get a good amount of experience with the library.
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
