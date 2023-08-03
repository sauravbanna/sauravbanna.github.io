import SectionHeader from "./SectionHeader/SectionHeader"
import Typography from "@mui/material/Typography"
import {ABOUT_SECTION} from "../utils/constants"

/**
 * Displays the about section using a Section Header and the about section content
*/
const About = () => {
    return (
        <SectionHeader title="About">
            <Typography variant="h6">
                {ABOUT_SECTION}
            </Typography>
        </SectionHeader>
    );
}

export default About