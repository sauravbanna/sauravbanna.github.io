import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import styles from "../styles/Home.module.css"

const Footer = () => {

    const scrollToTop = () => {
        scroll(0, 0);
    }

    return (
        <div
            className={styles.footer}
        >
            <Typography variant="subtitle1" align="center">
                Made with TypeScript, Next.js, and Github Pages
            </Typography>
            <Button onClick={scrollToTop}>
                <Typography>
                    Back to Top
                </Typography>
            </Button>
        </div>
    );
}

export default Footer