import SectionHeader from "./SectionHeader/SectionHeader"
import Grid from "@mui/material/Grid"
import Project from "./Project/Project"
import {PROJECTS, IProjectData} from "../utils/constants"

const Projects = () => {
    return (
        <SectionHeader title="Projects">
            <Grid container spacing={6}>
                {PROJECTS.map((ele : IProjectData) => {
                    return (
                        <Grid item xs={4}
                            sx={
                                {
                                    display: "flex",
                                    justifyContent: "center"
                                }
                            }
                            key={`Grid_${ele.title}`}
                        >
                            <Project project={ele}/>
                        </Grid>
                    );
                })}
            </Grid>
        </SectionHeader>
    );
}

export default Projects