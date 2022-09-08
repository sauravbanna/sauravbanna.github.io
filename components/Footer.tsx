import {HEADER_COLOR} from '../utils/constants'
import Typography from "@mui/material/Typography"
import styles from "../styles/Home.module.css"

const Footer = () => {
    return (
        <div
            className={styles.footer}
        >
            <Typography variant="subtitle1">
                Made with TypeScript, Next.js, and Github Pages
            </Typography>
            <Typography>
                Back to Top
            </Typography>
        </div>
    );
}

export default Footer