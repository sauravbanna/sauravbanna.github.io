import type { NextPage } from 'next'
import NavBar from "../../components/NavBar/NavBar"
import Typography from "@mui/material/Typography"
import AppTheme from "../../styles/AppTheme"
import { ThemeProvider } from '@mui/material/styles'
import styles from "../../styles/Home.module.css"
import Button from "@mui/material/Button"

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
            <Typography variant="h4">
                What I Learnt
            </Typography>
            <Typography variant="h6">
                This project was a lot of work, but also a lot of fun.
            </Typography>
            <Typography variant="h6">
                It was my first time working on a software project of this size, and my first real project using Java. So at first, it seemed super daunting and not something I was used to at all.
            </Typography>
            <Typography variant="h6">
                However, I did a lot of research into the Java Swing library and Googled my way out of any roadblocks I ran into, and I finished it within the project deadline and got a 97 for the course.
            </Typography>
            <Typography variant="h6">
                The main things I learnt during this project was not Java, or the Swing library, or anything else purely technical.
            </Typography>
            <Typography variant="h6">
                Instead, it was things like properly commenting my code, figuring out how to solve my problems independently, and reading documentation efficiently to figure out how to use a certain feature.
            </Typography>
            <Typography variant="h6">
                I learnt to independently learn a completely new library well enouggh to use it in a project, which is a skill that has definitely helped me a lot in my career since.
            <Typography>
        </div>
    </ThemeProvider>
  )
}

export default SnakeGame
