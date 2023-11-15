import {Project} from "../pages/ProjectsSection.tsx";

const ProjectCard = ({project}: { project: Project }) => {
    return (
        <div className="bg-zinc-800 rounded-lg p-4 flex gap-2 w-[50rem] text-zinc-300">
            <div className="w-1/2 flex flex-col justify-between">
                <div>
                    <div className="text-xl my-2">{project.title}</div>
                    <div className="">{project.description}</div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((technology, i) => (
                            <div
                                key={i}
                                className="text-xs bg-zinc-900 rounded-full px-2 py-1">
                                {technology}</div>
                        ))}
                    </div>
                    <div className="flex gap-4">
                            {project.frontLink &&
                                    <a href={project.frontLink} target="_blank" className="border-2 py-1 px-2 text-teal-400 rounded-full hover:bg-teal-300 hover:text-zinc-900 duration-200 flex justify-center items-center gap-1">
                                        <div className="text-sm">Frontend Code</div>
                                        <i className="fab fa-github"></i>
                                    </a>
                            }
                        {project.backLink &&

                            <a href={project.backLink} target="_blank" className="border-2 py-1 px-2 text-teal-400 rounded-full hover:bg-teal-300 hover:text-zinc-900 duration-200 flex justify-center items-center gap-1">
                            <div className="text-sm">Backend Code</div>
                            <i className="fab fa-github"></i>
                        </a>
                        }
                    </div>
                </div>

            </div>

            <div className="w-1/2">
                <div>
                    <img className="w-full h-full object-cover rounded-lg" src={project.images[0]} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;
