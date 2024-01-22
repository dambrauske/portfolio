import ProjectCard from "../components/ProjectCard.tsx";
import socialPosts from "../assets/social-app-posts.png"
import socialPost from "../assets/social-app-single-post.png"
import socialMessages from "../assets/social-app-messages.png"
import battleFight from "../assets/battle-game-fight.png"
import battleHome from "../assets/shopping-page-single-item.png"
import shoppingHome from "../assets/shopping-page-home.png"
import shoppingCart from "../assets/shopping-page-cart.png"
import shoppingItem from "../assets/shopping-page-single-item.png"
import monopolyBoard from "../assets/monopoly-board.png"
import monopolyStart from "../assets/monopoly-start.png"
import cssHtml from "../assets/css-html.png"

export interface Project {
    title: string,
    images: string[],
    description: string,
    technologies: string[],
    frontLink: string,
    backLink: string | null,
}
const ProjectsSection = () => {

    const projects: Project[] = [
        {
            images: [socialPosts, socialPost, socialMessages],
            title: "Social app",
            description: "A social application that enables users to register, create posts, and engage with other registered users by commenting, liking posts, or sending each other messages.",
            technologies: ["React", "Typescript", "Tailwind", "Redux", "Node", "Express", "Socket.io", "MongoDB"],
            frontLink: "https://github.com/dambrauske/social-media-app-react",
            backLink: "https://github.com/dambrauske/social-media-app-node",
        },
        {
            images: [battleFight, battleHome],
            title: "Battle game",
            description: "A multi-user game, enabling users to login and request to play with other online users. Players are able to generate items for a specified price and equip them for battle.",
            technologies: ["React", "JavaScript", "Tailwind", "Redux", "Node", "Express", "Socket.io", "MongoDB"],
            frontLink: "https://github.com/dambrauske/attack-game-front",
            backLink: "https://github.com/dambrauske/attack-game-back",
        },
        {
            images: [shoppingHome, shoppingCart, shoppingItem],
            title: "E-commerce page",
            description: "E-commerce page, which allows users to filter products by categories, add items to a shopping cart and remove them.",
            technologies: ["React", "JavaScript", "Tailwind", "Redux"],
            frontLink: "https://github.com/dambrauske/js-shopping-page",
            backLink: null,
        },
        {
            images: [monopolyBoard, monopolyStart],
            title: "Monopoly-like game",
            description: "A Monopoly-like game where users select a game piece, roll dice, and navigate through the board. Players have the opportunity to purchase streets and later sell them for half the original price.",
            technologies: ["React", "JavaScript", "Tailwind", "Redux"],
            frontLink: "https://github.com/dambrauske/react-assignment",
            backLink: null,
        },
        {
            images: [cssHtml],
            title: "Website clone",
            description: "A website clone made for HTML and CSS assignment at Code Academy. SCSS is used for styling",
            technologies: ["HTML", "SCSS"],
            frontLink: "https://github.com/dambrauske/html-css-assignment",
            backLink: null,
        },
    ]

    return (
        <section id="projects" className="bg-zinc-900 min-h-screen py-12 flex flex-col items-center">
            <h2 className="text-6xl md:text-8xl font-bold text-center text-zinc-300 opacity-10 py-12">Projects</h2>
            <div className="flex flex-col gap-8 items-center">
                {
                    projects.map((project, i) => (
                        <ProjectCard
                        key={i}
                        project={project}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default ProjectsSection;
