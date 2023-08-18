import type { NextPage } from 'next'
import NavBar from "../../components/NavBar/NavBar"
import Typography from "@mui/material/Typography"
import AppTheme from "../../styles/AppTheme"
import { ThemeProvider } from '@mui/material/styles'
import styles from "../../styles/Home.module.css"

/**
 * Page for the Music Maker React project
*/
const MusicMaker: NextPage = () => {
  return (
    <ThemeProvider theme={AppTheme}>
        <NavBar />
        <div
            className={styles.pageTitle}
            id="ProjectsPageHeader"
        >
            <Typography variant="h2">
                Music Maker
            </Typography>
        </div>
        <div
            className={styles.pageContent}
        >
            <Typography variant="h4">
                About
            </Typography>
            &nbsp;
            <Typography variant="h6">
                MusicMaker is an interactive music making and social media webapp!
            </Typography>
            &nbsp;
            <Typography variant="h6">
                 Make music using 5 different instruments on an interactive browser keyboard by drawing in notes. Add, remove, or move notes around, and then hit play to hear your creation. Export your work as a JSON file or as an mp3 (in progress).
            </Typography>
            &nbsp;
            <Typography variant="h6">
                 You can also share your creation with the world! When you're ready, give your track a name and some cover art, and then sign up to upload it to your profile. You can check out other people's work, like, comment, and make playlists of your favorite songs.
            </Typography>
            &nbsp;
            &nbsp;
             <Typography variant="h4">
                Motivation
            </Typography>
            &nbsp;
            <Typography variant="h6">
                I've always been interested in making music, especially electronic music. During the summer after my freshman year, I wanted to learn front-end development, and so I thought it would be fun to merge both of these interests into one project.
            </Typography>
            <Typography variant="h6">
                I also wanted to make something fun and interactive that people can easily use themselves. I had previously made a game in Java in high-school, and watching people play and enjoy my work was a great feeling.
            </Typography>
            &nbsp;
            &nbsp;
            <Typography variant="h4">
                How to Use
            </Typography>
            &nbsp;
            <Typography variant="h6">
                Start by going to the link above and clicking the Create button.
            </Typography>
            <Typography variant="h6">
                Using your mouse, draw notes onto the on-screen keyboard. You'll hear the notes as you draw them.
            </Typography>
            <Typography variant="h6">
                Resize notes by dragging their ends (you should see an indicator when you hover your mouse over a note). Move notes aroun by clicking and dragging with your mouse. Delete a note by double clicking it.
            </Typography>
            <Typography variant="h6">
                To hear the whole song, hit the play button.
            </Typography>
        </div>
    </ThemeProvider>
  )
}

export default MusicMaker
