import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import styles from "../styles/Home.module.css"
import Image from 'next/image'



/**
 * Displays the header of the page, with buttons to
 *    - scroll down to the contacts section
 *    - open resume in new tab
*/
const Header = () => {
    /**
     * Scrolls to the contacts section when clicked by getting the right element by ID
    */
    const scrollToContacts = () => {
        const contacts = document.getElementById("Contacts");

        if (contacts) {
            contacts.scrollIntoView();
        }
    }


    return (
        <div
            className={styles.header}
            id="header"
        >


                <div
                    style={
                        {
                            flexDirection: "column",
                            justifyContent: "center",
                            display: "flex"
                        }
                    }
                >
                    <Typography variant="h2">
                        Saurav Banna
                    </Typography>
                    &nbsp;
                    <div>
                        <Button disableRipple onClick={scrollToContacts}>
                            Contact
                        </Button>
                        <a href="/Saurav_Banna_Resume.pdf" target="_blank" rel="noreferrer">
                            <Button disableRipple>
                                Resume
                            </Button>
                        </a>
                    </div>
                </div>
        </div>
    );
}

export default Header