import styles from "../../styles/Home.module.css"
import Typography from "@mui/material/Typography"

interface ISectionHeaderProps {
    title: string,
    children: any
}


const SectionHeader = ({title, children} : ISectionHeaderProps) => {
    return (
        <div
            className={styles.section}
            id={title}
        >
            <Typography variant="h4">
                {title}
            </Typography>
            &nbsp;
            {children}
        </div>
    );
}

export default SectionHeader