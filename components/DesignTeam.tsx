import SectionHeader from "./SectionHeader/SectionHeader"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import {DESIGN_TEAM_SECTION} from "../utils/constants"
import styles from "../styles/Home.module.css"
import Project from "./Project/Project"
import {DESIGN_TEAM_PROJECTS, IProjectData} from "../utils/constants"

/**
 * Displays the design team section using a SectionHeader
 * Displays a grid of projects worked on, with links to their GitHub PRs
*/
const DesignTeam = () => {
    // TODO: add hyperlink for ubc thunderbots
    return (
        <SectionHeader title="Design Team">
            <Typography variant="h6">
                {DESIGN_TEAM_SECTION}
            </Typography>
            &nbsp;
            <Grid container className={styles.projects}>
                {DESIGN_TEAM_PROJECTS.map((ele : IProjectData) => {
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

export default DesignTeam