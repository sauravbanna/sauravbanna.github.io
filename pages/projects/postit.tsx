import type { NextPage } from 'next'
import NavBar from "../../components/NavBar/NavBar"
import Typography from "@mui/material/Typography"
import AppTheme from "../../styles/AppTheme"
import { ThemeProvider } from '@mui/material/styles'
import styles from "../../styles/Home.module.css"
import Button from "@mui/material/Button"

/**
 * Page for the CPSC 210 course project
*/
const PostIt: NextPage = () => {
  return (
    <ThemeProvider theme={AppTheme}>
        <NavBar />
        <div
            className={styles.pageTitle}
            id="ProjectsPageHeader"
        >
            <Typography variant="h2">
                PostIt
            </Typography>
            <a href="https://github.com/sauravbanna/PostIt" target="_blank" rel="noreferrer">
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
                PostIt is a Java Swing forum app where you can make posts, join communities and more!
            </Typography>
            <Typography variant="h6">
                It's similar to other forums online, where you have a community for each topic, where users interested in that topic gather and post content.
            </Typography>
            <Typography variant="h6">
                You can visit specific communities, curate your home feed by joining communities, or visit a specific user and view their posts.
            </Typography>
            <Typography variant="h6">
                You can make your own posts in a community, or show your opinion by upvoting / downvoting any posts you see, or commenting on them
            </Typography>
            <Typography variant="h6">
                This was made as part of my CPSC 210 coursework at UBC.
            </Typography>
            &nbsp;
            &nbsp;
             <Typography variant="h4">
                Motivation
            </Typography>
            &nbsp;
            <Typography variant="h6">
                For this course, we had to make a Java Swing GUI app, and we were free to choose any app idea for our project. I've used forums like Reddit in the past, so I thought it would be interesting to create something like that in Java.
            </Typography>
            <Typography variant="h6">
                I had a bit of experience with the Java Swing UI, but there was also a lot of new stuff, so I wanted to create something with enough depth to get a good amount of experience with the library.
            </Typography>
            <Typography variant="h6">
                While planning the project, I realized that there's a lot of scope for an app like this. For example, different post types, different feeds (home feed, community feed, user profile feed), etc. So although this seemed daunting, it also seemed like an interesting problem to solve.
            </Typography>
            &nbsp;
            &nbsp;
            <Typography variant="h4">
                How to Use
            </Typography>
            &nbsp;
            <Typography variant="h6">
                The app can be run using the main function. This is best done by opening the repo in any IDE (IntelliJ, NetBeans, etc.) and running it through the IDE controls.
            </Typography>
            <Typography variant="h6">
                Once running, you can choose to either create a new forum or continue with an existing forum (if you have already used the app before).
            </Typography>
            <Typography variant="h6">
                You can register a new account and login to it to access the forum app. Now, you can create a post, create a community, explore any existing communities, subscribe to communities to see their posts on your feed, upvote / downvote posts, comment under posts and view other people's comments.
            </Typography>
            <Typography variant="h6">
                The app function similar to other social media apps and forums, except it is local to your machine. It currently supports text and image posts
            </Typography>
            &nbsp;
            &nbsp;
            <Typography variant="h4">
                Tech Stack
            </Typography>
            &nbsp;
            <Typography variant="h6">
                This project is entirely Java-based, and used Java Swing for the GUI. However, in the future, I would like to make a React based version using my front-end experience, as I find front-end development fun as well.
            </Typography>
            &nbsp;
            <Typography variant="h4">
                What I learnt
            </Typography>
            <Typography variant="h6">
                Through this project, I got a great in-depth lesson in Java Swing GUI development. Although I had some experience with the library through a high-school project, I used a bunch of new components during this project that I hadn't used before.
            </Typography>
            <Typography variant="h6">
                I also got experience with planning out a whole software project. I started off by thinking of user stories, then worked on the project incrementally, starting with the core functionality and expanding into extra features and nice-to-haves.
            </Typography>
            <Typography variant="h6">
                The project went through a few stages, starting off as a console-based text program, then moving to a console app with persistent storage, and then a full GUI based app. So I got to see the project evolve through these stages.
            </Typography>
            <Typography variant="h6">
                Since it was a course project, I also had to complete it within deadlines. So I has to also learn to prioritise certain user stories or features over other, and determine which ones were necessary to achieve the core functionality I wanted.
            </Typography>
        </div>
    </ThemeProvider>
  )
}

export default PostIt
