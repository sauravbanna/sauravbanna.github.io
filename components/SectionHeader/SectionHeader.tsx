import styles from "../../styles/Home.module.css"
import Typography from "@mui/material/Typography"

/**
 * Interface for the section header props
*/
interface ISectionHeaderProps {
    /**
     * the title of the section
    */
    title: string,
    /**
     * the contents of the section
    */
    children: any
}

/**
 * Widget to display content in a section with a header
 * Props:
 *    title -> the title of the section
 *    children -> all child widgets belonging to section
*/
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