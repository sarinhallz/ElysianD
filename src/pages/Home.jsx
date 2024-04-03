import { Navbar } from "../components/Menu/navbar.jsx"
import { Intro } from "../components/Introduction/intro.jsx";
import { Resources } from "../components/Recursos/resources.jsx";
import { Rodape } from "../components/footer/footer.jsx";

export function Home(){
    return(
        <main className="content">
            <Navbar />
            <Intro />
            <Resources />
            <Rodape />
        </main>
    )
}