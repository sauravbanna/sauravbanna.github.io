import type { NextPage } from 'next'
import NavBar from "../components/NavBar/NavBar"
import Typography from "@mui/material/Typography"
import AppTheme from "../styles/AppTheme"
import { ThemeProvider } from '@mui/material/styles'
import styles from "../styles/Home.module.css"


const Home: NextPage = () => {
  return (
    <ThemeProvider theme={AppTheme}>
        <NavBar />
        <div
            className={styles.pageTitle}
            id="ProjectsPageHeader"
        >
            <Typography variant="h2">
                Projects
            </Typography>
        </div>
        <div
            className={styles.pageContent}
        >
            <Typography variant="h6">
                Here are some of the projects I've worked on over the past few years!
            </Typography>
        </div>
    </ThemeProvider>
  )
}

export default Home
