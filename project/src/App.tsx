import './App.css'
import Navbar from "./components/Navbar.tsx";
import HomeSection from "./pages/HomeSection.tsx";
import ProjectsSection from "./pages/ProjectsSection.tsx";
import SkillsSection from "./pages/SkillsSection.tsx";
import AboutSection from "./pages/AboutSection.tsx";
import ContactSection from "./pages/ContactSection.tsx";

function App() {

    return (
        <div className="bg-zinc-900">
            <Navbar/>
            <HomeSection/>
            <AboutSection/>
            <ProjectsSection/>
            <SkillsSection/>
            <ContactSection/>
            <footer className="bg-zinc-900 text-zinc-600 text-sm text-center p-2">© 2023 Ugnė Dambrauskė</footer>
        </div>
    )
}

export default App
