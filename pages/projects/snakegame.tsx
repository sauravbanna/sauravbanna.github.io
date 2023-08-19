import type { NextPage } from 'next'
import NavBar from "../../components/NavBar/NavBar"
import Typography from "@mui/material/Typography"
import AppTheme from "../../styles/AppTheme"
import { ThemeProvider } from '@mui/material/styles'
import styles from "../../styles/Home.module.css"

/**
 * Page for the Java Snake Game project
*/
const SnakeGame: NextPage = () => {
  return (
    <ThemeProvider theme={AppTheme}>
        <NavBar />
        <div
            className={styles.pageTitle}
            id="ProjectsPageHeader"
        >
            <Typography variant="h2">
                Java Snake Game
            </Typography>
            <a href="https://github.com/sauravbanna/snake-game" target="_blank" rel="noreferrer">
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
                This is a Java rendition of the popular game Snake, made for my high-school Computer Science class. It uses the Java Swing GUI library to render the game.
            </Typography>
            <Typography variant="h6">
                The controls are the same as the original game. You play as a snake who is trying to eat the randomly appearing red apples on screen. The more apples oyu eat, the longer you get.
            </Typography>
            <Typography variant="h6">
                The aim is the get the highest score possible by being the longest snake.
            </Typography>
            &nbsp;
            &nbsp;
             <Typography variant="h4">
                Motivation
            </Typography>
            &nbsp;
            <Typography variant="h6">
                I've always been interested in game development, as an avid gamer myself. I like the idea of creating something that people can enjoy and have fun with, or that they find challenging and want to beat.
            </Typography>
            <Typography variant="h6">
                There weren't many restrictions on the type of project we could make for this course, so I decided to go big and make a full fledged game.
            </Typography>
            <Typography variant="h6">
                Since I didn't have any experience with the Java Swing library, and did not have much experience with Java, I knew it would be hard to make a project like this. But I also knew that it would be a good learning experience, especially since I found the idea really motivating.
            </Typography>
            <Typography variant="h6">
                I knew I'd strive to make the game as good as I can, and I knew testing would be fun as well since I could play my own game and see my progress.
            </Typography>
            &nbsp;
            &nbsp;
            <Typography variant="h4">
                How to Use
            </Typography>
            &nbsp;
            <Typography variant="h6">
                Open up the repo in NetBeans or any other IDE and hit the Run button
            </Typography>
            <Typography variant="h6">
                Once the game loads, use the arrow keys to move the snake. An apple should show up on screen, and your aim is the guide the snake head towards the apple.
            </Typography>
            <Typography variant="h6">
                The apple will slowly get smaller, and if not eaten within a few seconds, will disappear completely. Once that happens, the game is over.
            </Typography>
            <Typography variant="h6">
                If the snake hits a wall or collides into itself, the game ends too. So be careful as the snake gets longer, as it gets easier to lose control of it.
            </Typography>
            &nbsp;
            &nbsp;
            <Typography variant="h4">
                Tech Stack
            </Typography>
            &nbsp;
            <Typography variant="h6">
                This entire project was made using the Java Swing GUI library. I used the NetBeans GUI editor to make some of the GUI, but most of it had to be coded manually, especially the pixels of the game screen.
            </Typography>
        </div>
    </ThemeProvider>
  )
}

export default SnakeGame
