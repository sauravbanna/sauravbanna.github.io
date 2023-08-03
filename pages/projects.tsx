import type { NextPage } from 'next'
import NavBar from "../components/NavBar/NavBar"
import Typography from "@mui/material/Typography"
import AppTheme from "../styles/AppTheme"
import { ThemeProvider } from '@mui/material/styles'



const Home: NextPage = () => {
  return (
    <ThemeProvider theme={AppTheme}>
        <NavBar />
        <div>
            <Typography variant="h1">
                Projects
            </Typography>
        </div>
        <div>
            placeholder
        </div>
    </ThemeProvider>
  )
}

export default Home
