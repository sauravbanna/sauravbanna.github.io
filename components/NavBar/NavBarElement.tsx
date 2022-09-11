import styles from "../../styles/Home.module.css"
import Typography from "@mui/material/Typography"
import {INavBarData} from "../../utils/constants"

interface INavBarElementProps {
    element: INavBarData
}

const NavBarElement = ({element} : INavBarElementProps) => {
    const scrollToId = () => {

        const elementToScroll = document.getElementById(element.scrollId);

        if (elementToScroll) {
            elementToScroll.scrollIntoView();
        }
    }

    return (
        <div
            className={styles.navBarElement}
            onClick={scrollToId}
        >
            <Typography variant="h6">
                {element.name}
            </Typography>
        </div>
    );
}

export default NavBarElement