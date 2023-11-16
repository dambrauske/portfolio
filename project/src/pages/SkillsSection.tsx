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
            name: "React"
        },
        {
            image: redux,
            name: "Redux"
        },
        {
            image: tailwind,
            name: "Tailwind"
        },
        {
            image: node,
            name: "Node"
        },
        {
            image: mongo,
            name: "Mongo DB"
        }
    ]

    return (
        <section id="technologies" className="bg-zinc-900 min-h-screen py-12 flex flex-col items-center">
            <h2 className="text-8xl font-bold text-center text-zinc-300 opacity-5 py-12">Skills</h2>
            <h1 className="text-zinc-300">I have experience working with these technologies:</h1>
            <div className="flex flex-wrap mt-14 gap-8 justify-center mx-20">
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
