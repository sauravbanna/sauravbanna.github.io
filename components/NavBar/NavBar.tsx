import styles from "../../styles/Home.module.css"
import NavBarElement from './NavBarElement'
import Stack from "@mui/material/Stack"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {INavBarData, NAVBAR} from "../../utils/constants"

const NavBar = () => {
    return (
        <Stack
            direction="row"
            className={styles.navBar}
        >
            {NAVBAR.map((ele : INavBarData, i: number) => {
                return (
                    <NavBarElement element={ele} key={`NavBarEle_${i}`}/>
                );
            })}


        </Stack>
    );
}

export default NavBar