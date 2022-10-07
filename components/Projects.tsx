import SectionHeader from "./SectionHeader/SectionHeader"
import styles from "../styles/Home.module.css"
import Grid from "@mui/material/Grid"
import Project from "./Project/Project"
import {PROJECTS, IProjectData} from "../utils/constants"

const Projects = () => {
    return (
        <SectionHeader title="Projects">
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
        </SectionHeader>
    );
}

export default Projects