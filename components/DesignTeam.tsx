import SectionHeader from "./SectionHeader/SectionHeader"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import {DESIGN_TEAM_SECTION} from "../utils/constants"
import styles from "../styles/Home.module.css"
import Project from "./Project/Project"
import {DESIGN_TEAM_PROJECTS, IProjectData} from "../utils/constants"

const DesignTeam = () => {
    return (
        <SectionHeader title="Design Team">
            // TODO: add hyperlink for ubc thunderbots
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