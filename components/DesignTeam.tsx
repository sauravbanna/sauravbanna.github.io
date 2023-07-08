import SectionHeader from "./SectionHeader/SectionHeader"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import {DESIGN_TEAM_SECTION} from "../utils/constants"
import styles from "../styles/Home.module.css"


const DesignTeam = () => {
    return (
        <SectionHeader title="Design Team">
            <Typography variant="h6">
                {DESIGN_TEAM_SECTION}
                 <Grid container className={styles.projects}>
                    {[].map((ele : IProjectData) => {
                        return (
                            <Grid item key={`ProjectGrid_${ele.title}`}>
                                <Project
                                    project={ele}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Typography>
        </SectionHeader>
    );
}

export default DesignTeam