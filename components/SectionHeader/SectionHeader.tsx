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
        >
            <Typography variant="h4" sx={{paddingBottom: "0.5em"}}>
                {title}
            </Typography>
            &nbsp;
            {children}
        </div>
    );
}

export default SectionHeader