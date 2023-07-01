import SectionHeader from "./SectionHeader/SectionHeader"
import Typography from "@mui/material/Typography"
import {DESIGN_TEAM_SECTION} from "../utils/constants"

const DesignTeam = () => {
    return (
        <SectionHeader title="Design Team">
            <Typography variant="h6">
                {DESIGN_TEAM_SECTION}
            </Typography>
        </SectionHeader>
    );
}

export default DesignTeam