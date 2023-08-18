import type { NextPage } from 'next'
import NavBar from "../../components/NavBar/NavBar"
import Typography from "@mui/material/Typography"
import AppTheme from "../../styles/AppTheme"
import { ThemeProvider } from '@mui/material/styles'
import styles from "../../styles/Home.module.css"
import Button from "@mui/material/Button"

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
            <a href="https://github.com/sauravbanna/musicmaker" target="_blank" rel="noreferrer">
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
            <Typography variant="h6">
                You can also follow your favorite artists and see their work on your home page, so you stay up to date with their new creations.
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
            <Typography variant="h6">
                I like the challenges and enjoyment that comes from making something that not only has to be functional, but also has to look good and be intuitive to use.
            </Typography>
            &nbsp;
            &nbsp;
            <Typography variant="h4">
                How to Use
            </Typography>
            &nbsp;
            <Typography variant="h5" style={{fontWeight: 600}}>
                Creating a song
            </Typography>
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
            &nbsp;
            <Typography variant="h5" style={{fontWeight: 600}}>
                Uploading a song
            </Typography>
             <Typography variant="h6">
                First, make sure you've made an account and are logged into the app.
            </Typography>
            <Typography variant="h6">
                Once you've made a song, hit the upload button to upload it to the world. Give your song a name, cover art, and a description.
            </Typography>
            <Typography variant="h6">
                When you're ready, upload the song. It'll show up on your profile, and other people can see it there, or on their home feeds if they follow you.
            </Typography>
            &nbsp;
            &nbsp;
            <Typography variant="h4">
                Tech Stack
            </Typography>
            &nbsp;
            <Typography variant="h6">
                The languages / frameworks / tools used in this project are:
            </Typography>
            <ul>
                <li>
                    <Typography variant="h6">
                        ReactJS for the front-end
                    </Typography>
                </li>
                <li>
                    <Typography variant="h6">
                        JavaScript and Firebase for the back-end
                    </Typography>
                </li>
                <li>
                    <Typography variant="h6">
                        Firebase for the database
                    </Typography>
                </li>
                <li>
                    <Typography variant="h6">
                        Redux for app state
                    </Typography>
                </li>
            </ul>
            &nbsp;
            <Typography variant="h4">
                What I learnt
            </Typography>
            &nbsp;
            <Typography variant="h6">
                Through this project, I got a lot more experience in web development. I learnt a lot about React components, using hooks, managing app state, and how to properly communicate with a backend database.
            </Typography>
            <Typography variant="h6">
                I learnt how to make reusable components to reduce repetition and use interfaces to make prop types clear
            </Typography>
            <Typography variant="h6">
                I also learnt how to use colors, error messages, font sizes, and other design choices to make a clear and intuitive user interface that anyone can pick up and use quickly.
            </Typography>
        </div>
    </ThemeProvider>
  )
}

export default MusicMaker
