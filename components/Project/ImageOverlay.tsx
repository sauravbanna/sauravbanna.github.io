import Typography from "@mui/material/Typography"
import styles from "../../styles/Home.module.css"

/**
 * Displays a gray overlay over an image indicating that it can be clicked
 * Displays text with the overlay to show where it links to
*/
const ImageOverlay = () => {
    return (
        <div
            className={styles.imageOverlay}
        >
            <Typography variant="h6">
                Github Repo
            </Typography>
        </div>
    );
}

export default ImageOverlay