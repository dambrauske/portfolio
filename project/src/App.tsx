import './App.css'
import Navbar from "./components/Navbar.tsx";
import HomeSection from "./pages/HomeSection.tsx";
import ProjectsSection from "./pages/ProjectsSection.tsx";
import SkillsSection from "./pages/SkillsSection.tsx";
import AboutSection from "./pages/AboutSection.tsx";
import ContactSection from "./pages/ContactSection.tsx";

function App() {

    return (
        <div>
            <Navbar/>
            <HomeSection/>
            <AboutSection/>
            <ProjectsSection/>
            <SkillsSection/>
            <ContactSection/>
        </div>
    )
}

export default App
