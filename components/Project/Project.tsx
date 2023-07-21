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

    /*
    *  Onclick handler to open a project's link
    *  Opens in the same tab or a new tab depending on arg
    *
    *  newtab: if True, opens in a new tab, else opens in same tab
    */
    const openProjectRepo = (newtab : boolean) => {
        const link = document.createElement('a');
        link.href = project.link;

        // opens in new tab if specified
        if (newtab) {
            link.target = "_blank";
        }

        link.rel = "noreferrer";

        link.click();
    }

    return (
        <Paper
            className={styles.project}
            onClick={(e) => openProjectRepo(project.newtab)}
        >
            <Stack
                sx={
                    {
                        minHeight: "100%"
                    }
                }
            >
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