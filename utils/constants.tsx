import {SvgIconComponent} from "@mui/icons-material"
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const APP_FONT = "'Roboto Slab', serif"

export const ABOUT_SECTION = "Hi! I'm Saurav. I'm a university sophomore aiming to create unique technological solutions to real-world problems, in areas such as software development and game design. I'm focused, driven, and passionate about working in a team. I'm looking to leverage my computer science skills and business knowledge in order to break into the startup field."

export const DESIGN_TEAM_SECTION = "I'm part of UBC Thunderbots, a UBC Engineering design team focused on making autonomous soccer playing robots to compete in Robocup 2023. I'm part of the Software subteam, which meets every Saturday to work on improving everything from the AI of the robots to the UI used to control them during testing. Here's some projects I worked on over the last year at UBC Thunderbots: "

export interface IProjectData {
    title: string,
    about: string,
    image: string,
    link: string
}

export const PROJECTS : Array<IProjectData> = [
    {
        title: "Music Maker",
        about: "A website to create and share your music to the world",
        image: "/MUSIC_MAKER.png",
        link: "https://github.com/sauravbanna/musicmaker"
    },
    {
        title: "PostIt",
        about: "A Java forum where you can make and share posts to communities",
        image: "/POSTIT.png",
        link: "https://github.com/sauravbanna/PostIt"
    },
    {
        title: "Space Defense",
        about: "An Android App inspired by Space Invaders",
        image: "/SPACE_DEFENSE.png",
        link: "https://github.com/sauravbanna/SpaceDefense"
    },
    {
        title: "Snake Game",
        about: "A Java adaptation of the classic game Snake",
        image: "/SNAKE_GAME.png",
        link: "https://github.com/sauravbanna/snake-game"
    },
]

interface IDate {
    month: "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "July" | "Aug" | "Sept" | "Oct" | "Nov" | "Dec",
    year: string
}

export interface IAchievementData {
    title: string,
    about: string,
    location: string,
    date: IDate
}

export const ACHIEVEMENTS : Array<IAchievementData> = [
    {
        title: "Winner: Best Use of Data",
        about: "Worked in a group of 4 to create EasyToMako, an app that scans your fridge, detects ingredients, and find the best recipe from a database of over 500,000 recipes",
        location: "WaffleHacks 2022",
        date: {
            month: "Jun",
            year: "2022"
        }
    },
    {
        title: "Governor General Award",
        about: "Achieved the highest final average for Grade 12 in my high school",
        location: "Bronte College, Mississauga",
        date: {
            month: "Jun",
            year: "2021"
        }
    },
    {
        title: "Ontario Scholar Award",
        about: "Achieved a Grade 12 average of more than 80%  ",
        location: "Bronte College, Mississauga",
        date: {
            month: "Jun",
            year: "2021"
        }
    },
    {
        title: "Euclid Mathematics Contest - High School Winner",
        about: "Achieved the highest score for the Euclid Mathematics Contest 2021 in my high school",
        location: "Bronte College, Mississauga",
        date: {
            month: "Jun",
            year: "2021"
        }
    },
]

export interface IContactData {
    icon: any,
    link: string
}

export const CONTACTS : Array<IContactData> = [
    {
        icon: <EmailIcon fontSize="large" />,
        link: "mailto:sauravbanna@gmail.com"
    },
    {
        icon: <LinkedInIcon fontSize="large"/>,
        link: "https://www.linkedin.com/in/sauravbanna/"
    },
    {
        icon: <GitHubIcon fontSize="large"/>,
        link: "https://github.com/sauravbanna"
    },
    {
        icon: <InstagramIcon fontSize="large"/>,
        link: "https://instagram.com/bulbasaurav"
    }
]

export interface INavBarData {
    name: string | any,
    scrollId: string,
}

export const NAVBAR : Array<INavBarData> = [
    {
        name: "About",
        scrollId: "About"
    },
    {
        name: "Design Team",
        scrollId: "DesignTeam"
    },
    {
        name: "Projects",
        scrollId: "Projects"
    },
    {
        name: "Achievements",
        scrollId: "Achievements"
    },
    {
        name: "Contact",
        scrollId: "Contacts"
    }

]