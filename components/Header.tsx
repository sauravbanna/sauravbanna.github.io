import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import styles from "../styles/Home.module.css"
import {HEADER_COLOR} from '../utils/constants'




const Header = () => {
    const scrollToContacts = () => {
        const contacts = document.getElementById("contacts");

        console.log(contacts);

        contacts.scrollIntoView();
    }

    return (
        <div
            className={styles.header}
        >
          <Grid container spacing={6}>
            <Grid item xs={3}
                sx={
                    {
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        maxHeight: "100%"
                    }
                }
            >
                <img
                    src="/PROFILE_PIC.png"

                />
            </Grid>
            <Grid item xs={9}
                sx={
                    {
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center"
                    }
                }
            >
                <div
                    style={
                        {
                            flexDirection: "column"
                        }
                    }
                >
                    <Typography variant="h2">
                        Saurav Banna
                    </Typography>
                    &nbsp;
                    <div>
                        <Button onClick={scrollToContacts}>
                            Contact
                        </Button>
                        <Button>
                            Resume
                        </Button>
                    </div>
                </div>

            </Grid>
          </Grid>
        </div>
    );
}

export default Header