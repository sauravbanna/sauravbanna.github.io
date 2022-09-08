import {SvgIconComponent} from "@mui/icons-material"
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const APP_FONT = "'Roboto Slab', serif"

export const ABOUT_SECTION = "Hi! I'm Saurav. I'm a sophomore aiming to create unique technological solutions to real-world problems, in areas such as software development and game design. I'm focused, driven, and passionate about working in a team. I'm looking to leverage my computer science skills and business knowledge in order to break into the startup field."

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
        about: "fffffffff",
        location: "WaffleHacks 2022",
        date: {
            month: "Jun",
            year: "2022"
        }
    },
    {
        title: "Governor General Award",
        about: "",
        location: "Bronte College, Mississauga",
        date: {
            month: "June",
            year: "2021"
        }
    },
    {
        title: "Ontario Scholar Award",
        about: "",
        location: "Bronte College, Mississauga",
        date: {
            month: "June",
            year: "2021"
        }
    },
    {
        title: "Euclid Mathematics Contest - High School Winner",
        about: "",
        location: "Bronte College, Mississauga",
        date: {
            month: "June",
            year: "2021"
        }
    },
]

export interface IContactData {
    icon: SvgIconComponent,
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