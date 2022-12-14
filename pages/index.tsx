import type { NextPage } from 'next'
import NavBar from "../components/NavBar/NavBar"
import Header from "../components/Header"
import About from "../components/About"
import Projects from "../components/Projects"
import Achievements from "../components/Achievements"
import Contacts from "../components/Contacts"
import Footer from "../components/Footer"
import AppTheme from "../styles/AppTheme"
import { ThemeProvider } from '@mui/material/styles'



const Home: NextPage = () => {
  return (
    <ThemeProvider theme={AppTheme}>
        <NavBar />
        <Header />
        <About />
        <Projects />
        <Achievements />
        <Contacts />
        <Footer />
    </ThemeProvider>
  )
}

export default Home
