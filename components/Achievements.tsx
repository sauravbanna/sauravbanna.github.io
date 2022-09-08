import SectionHeader from "./SectionHeader/SectionHeader"
import Achievement from "./Achievement/Achievement"
import Stack from "@mui/material/Stack"
import {ACHIEVEMENTS, IAchievementData} from "../utils/constants"

const Achievements = () => {
    return (
        <SectionHeader title="Achievements">
            <Stack spacing={2}>
                {ACHIEVEMENTS.map((ele : IAchievementData) => {
                    return (
                        <Achievement achievementData={ele}/>
                    );
                })}
            </Stack>
        </SectionHeader>
    );
}

export default Achievements