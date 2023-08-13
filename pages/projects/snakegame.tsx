import type { NextPage } from 'next'
import NavBar from "../../components/NavBar/NavBar"
import Typography from "@mui/material/Typography"
import AppTheme from "../../styles/AppTheme"
import { ThemeProvider } from '@mui/material/styles'
import styles from "../../styles/Home.module.css"


const SnakeGame: NextPage = () => {
  return (
    <ThemeProvider theme={AppTheme}>
        <NavBar />
        <div
            className={styles.pageTitle}
            id="ProjectsPageHeader"
        >
            <Typography variant="h2">
                Java Snake Game
            </Typography>
        </div>
        <div
            className={styles.pageContent}
        >
            <Typography variant="h6">
                placeholder...
            </Typography>
        </div>
    </ThemeProvider>
  )
}

export default SnakeGame
