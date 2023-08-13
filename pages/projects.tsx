import type { NextPage } from 'next'
import NavBar from "../components/NavBar/NavBar"
import Grid from "@mui/material/Grid"
import Project from "../components/Project/Project"
import {PROJECTS, IProjectData} from "../utils/constants"
import Typography from "@mui/material/Typography"
import AppTheme from "../styles/AppTheme"
import { ThemeProvider } from '@mui/material/styles'
import styles from "../styles/Home.module.css"


const Projects: NextPage = () => {
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
            &nbsp;
            <Grid container className={styles.projects}>
                {PROJECTS.map((ele : IProjectData) => {
                    return (
                        <Grid item key={`ProjectGrid_${ele.title}`}>
                            <Project
                                project={ele}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    </ThemeProvider>
  )
}

export default Projects
