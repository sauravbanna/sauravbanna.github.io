import {IProjectData} from "../../utils/constants"
import styles from "../../styles/Home.module.css"
import ImageOverlay from "./ImageOverlay"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import {useState, useEffect} from 'react'

interface IProjectProps {
    project: IProjectData
}

const Project = ({project} : IProjectProps) => {
    const [hover, setHover] = useState<boolean>(false);
    const [hoverStyles, setHoverStyles] = useState<any>(false);

    useEffect(() => {
        setHoverStyles(false);
    }, [hover])

    return (
        <Paper
            className={styles.project}
        >
            <Stack>
                <div
                    id="projectImage"
                >
                    <ImageOverlay />
                    <img
                        src={project.image}
                    />
                </div>
                &nbsp;
                <Typography variant="h5" sx={{paddingBottom: "0.2em"}}>
                    {project.title}
                </Typography>
                <Typography variant="subtitle1">
                    {project.about}
                </Typography>
            </Stack>
        </Paper>
    );
}

export default Project