import {IAchievementData} from "../../utils/constants"
import styles from "../../styles/Home.module.css"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

interface IAchievementProps {
    achievementData: IAchievementData
}

const Achievement = ({achievementData} : IAchievementProps) => {
    return (
        <Paper
            className={styles.achievement}
        >
            <Grid container spacing={1}>
                <Grid item xs={10}>
                    <Typography variant="h5">
                        {achievementData.title}
                    </Typography>
                </Grid>
                <Grid item xs={2} sx={{justifyContent: "flex-end", display: "flex"}}>
                    <Typography variant="subtitle1">
                        {`${achievementData.date.month} ${achievementData.date.year}`}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">
                        {achievementData.location}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">
                        {achievementData.about}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Achievement