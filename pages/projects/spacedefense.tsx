import type { NextPage } from 'next'
import NavBar from "../../components/NavBar/NavBar"
import Typography from "@mui/material/Typography"
import AppTheme from "../../styles/AppTheme"
import { ThemeProvider } from '@mui/material/styles'
import styles from "../../styles/Home.module.css"
import Button from "@mui/material/Button"

/**
 * Page for the Space Defense mobile game project
*/
const SpaceDefense: NextPage = () => {
  return (
    <ThemeProvider theme={AppTheme}>
        <NavBar />
        <div
            className={styles.pageTitle}
            id="ProjectsPageHeader"
        >
            <Typography variant="h2">
                Space Defense
            </Typography>
            <a href="https://github.com/sauravbanna/SpaceDefense" target="_blank" rel="noreferrer">
                <Button disableRipple>
                    Github Link
                </Button>
            </a>
        </div>
        <div
            className={styles.pageContent}
        >
            <Typography variant="h4">
                About
            </Typography>
            &nbsp;
            <Typography variant="h6">
                Space Defense is an Android game inspired by the arcade classic Space Invaders.
            </Typography>
            <Typography variant="h6">
                You play as a spaceship fighting of hordes of alien invaders. Move the ship and shoot at all the enemies as the game gets faster and faster. How long can you last?
            </Typography>
            &nbsp;
            &nbsp;
             <Typography variant="h4">
                Motivation
            </Typography>
            &nbsp;
            <Typography variant="h6">
                Before making this game, I had experience with making computer apps and browser apps, but I'd never made anything for mobile. I'd played a lot of mobile games before, so I thought it would be a good learning experience to try and make a mobile game on my own.
            </Typography>
            <Typography variant="h6">
                I had an Android device already, and I had experience with Java development before. So this seemed like a good next step in my learning journey.
            </Typography>
            <Typography variant="h6">
                Android development is free and easy to get into, especially as a beginner, so it was easy get started with my app.
            </Typography>
            <Typography variant="h6">
                Plus, I'd always had an interest in game development, having made a Java Swing game in high-school. In general, I love making software that people find fun and exciting to use, and games are the perfect example of those.
            </Typography>
            &nbsp;
            &nbsp;
            <Typography variant="h4">
                How to Use
            </Typography>
            &nbsp;
            <Typography variant="h6">
                Follow the link above to go to the Github repo for this project, which contains the Google Play Store link for this game.
            </Typography>
            <Typography variant="h6">
                Download the game and run it. Click the play button to play the game.
            </Typography>
            <Typography variant="h6">
                Move the spaceship at the bottom by dragging it left and right. Fire the gun by tapping once
            </Typography>
            <Typography variant="h6">
                There's no limit on how many bullets the spaceship can fire, so keep tapping to get rid of the aliens.
            </Typography>
            <Typography variant="h6">
                The game ends if an alien collides with the spaceship, or if an alien makes it past the spaceship and breaks through the defense.
            </Typography>
            <Typography variant="h6">
                The more aliens you kill, the more points you get. The game gets faster as it goes on, so make sure to stay alert and keep firing!
            </Typography>
            &nbsp;
            &nbsp;
            <Typography variant="h4">
                Tech Stack
            </Typography>
            &nbsp;
            <Typography variant="h6">
                This game was developed using Java, using the Android Studio SDK. I used the in-built GUI tools to develop some of the GUI placements.
            </Typography>
            &nbsp;
            <Typography variant="h4">
                What I learnt
            </Typography>
            <Typography variant="h6">
                ...
            </Typography>
        </div>
    </ThemeProvider>
  )
}

export default SpaceDefense
