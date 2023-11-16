const AboutSection = () => {
    return (
        <section id="about" className="bg-zinc-900 h-screen py-12 flex flex-col gap-12 items-center ">
            <h2 className="text-6xl md:text-8xl font-bold text-center text-zinc-300 opacity-5 pt-12">About me</h2>
            <div className="md:w-1/2 p-4 md:p-0 flex flex-col gap-2 justify-center text-zinc-300 tracking-wide">
                <div>
                    I am a motivated and hardworking individual with a strong passion to become an accomplished
                    developer.
                </div>
                <div>
                    Recently, I successfully completed an intensive 1060-hour TypeScript course at Code Academy, which was
                    the start of my journey into the fascinating world of coding.
                </div> <div>
                    Currently, I am seeking an entry-level position or internship where I can apply my skills and continue
                    to learn and grow in my development journey.
                </div>
            </div>

        </section>
    );
};

export default AboutSection;
