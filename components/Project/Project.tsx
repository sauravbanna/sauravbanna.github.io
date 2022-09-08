import {IProjectData} from "../../utils/constants"
import styles from "../../styles/Home.module.css"
import ImageOverlay from "./ImageOverlay"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import {useState, useEffect} from 'react'
import Image from 'next/image'

interface IProjectProps {
    project: IProjectData
}

const Project = ({project} : IProjectProps) => {

    return (
        <Paper
            className={styles.project}
        >
            <Stack>
                <div
                    id="projectImage"
                >
                    <ImageOverlay />
                    <Image
                        src={project.image}
                        layout="fill"
                        alt={`Screenshot of ${project.title}`}
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