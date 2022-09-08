import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import styles from "../styles/Home.module.css"
import Image from 'next/image'




const Header = () => {
    const scrollToContacts = () => {
        const contacts = document.getElementById("contacts");

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
                id="header_image"
            >
                <Image
                    src="/PROFILE_PIC.png"
                    layout="responsive"
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    alt="Picture of me :)"
                />
            </div>

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
                        <a href="/Resume_Saurav_Banna.pdf" target="_blank" rel="noreferrer">
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