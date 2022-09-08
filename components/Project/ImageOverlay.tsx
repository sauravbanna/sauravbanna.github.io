import Typography from "@mui/material/Typography"
import styles from "../../styles/Home.module.css"

interface IImageOverlayProps {
    hover: boolean
}

const ImageOverlay = ({hover} : IImageOverlayProps) => {
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