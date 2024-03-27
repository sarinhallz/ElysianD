import { Navbar } from "../components/Menu/navbar.jsx"
import { Intro } from "../components/Introduction/intro.jsx";

export function Home(){
    return(
        <main className="content">
            <Navbar />
            <Intro />
        </main>
    )
}