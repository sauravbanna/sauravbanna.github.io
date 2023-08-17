import styles from "../../styles/Home.module.css"
import Typography from "@mui/material/Typography"
import {INavBarData} from "../../utils/constants"

/**
 * Props for a navigation bar element
*/
interface INavBarElementProps {
    /**
     * Data for a single navigation bar entry
    */
    element: INavBarData
}

/**
 * Displays a single navigation bar entry
 * When clicked, scrolls to the corresponding section
*/
const NavBarElement = ({element} : INavBarElementProps) => {

    /**
     * Scrolls to a specific element based on the ID given
    */
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