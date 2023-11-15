import './App.css'
import Navbar from "./components/Navbar.tsx";
import HomeSection from "./pages/HomeSection.tsx";
import ProjectsSection from "./pages/ProjectsSection.tsx";
import SkillsSection from "./pages/SkillsSection.tsx";
import AboutSection from "./pages/AboutSection.tsx";

function App() {

    return (
        <div>
            <Navbar/>
            <HomeSection/>
            <AboutSection/>
            <ProjectsSection/>
            <SkillsSection/>
        </div>
    )
}

export default App
