import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/js.png"
import typescript from "../assets/typescript.png"
import react from "../assets/react.png"
import redux from "../assets/redux-logo.png"
import tailwind from "../assets/tailwind.png"
import node from "../assets/node.png"
import mongo from "../assets/mongo.png"

const SkillsSection = () => {

    interface Technology {
        image: string,
        name: string,
    }

    const technologies: Technology[] = [
        {
            image: html,
            name: "HTML"
        },
        {
            image: css,
            name: "CSS"
        },
        {
            image: javascript,
            name: "JavaScript"
        },
        {
            image: typescript,
            name: "TypeScript"
        },
        {
            image: react,
            name: "React.js"
        },
        {
            image: redux,
            name: "Redux"
        },
        {
            image: tailwind,
            name: "Tailwind CSS"
        },
        {
            image: mongo,
            name: "MongoDB"
        },
        {
            image: node,
            name: "Node.js"
        },
    ]

    return (
        <section id="technologies" className="bg-zinc-900 min-h-screen py-12 flex flex-col items-center">
            <h2 className="text-6xl md:text-8xl font-bold text-center text-zinc-300 opacity-10 py-12">Skills</h2>
            <h1 className="text-zinc-300 tracking-wider text-center">I have experience working with these technologies:</h1>
            <div className="flex flex-wrap mt-14 md:gap-8 gap-4 justify-center md:mx-20">
                {technologies.map((technology, i) => (
                    <div className="flex flex-col items-center justify-center gap-2 w-40"
                         key={i}>
                        <div className="h-20">
                            <img className="h-full"  src={technology.image} alt="technology"/>
                        </div>
                        <div className="font-bold text-zinc-400">{technology.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
