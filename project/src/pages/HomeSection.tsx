const HomeSection = () => {
    return (
        <section id="home" className="bg-zinc-900 h-screen gap-8 flex flex-col justify-center items-center text-zinc-300 p-4 md:p-0">
            <div className="flex flex-col gap-2 tracking-wide">
                <div className="text-2xl md:text-4xl">Hello,</div>
                <div className="text-5xl md:text-7xl">I'm Ugnė,</div>
                <div className="text-6xl md:text-7xl text-teal-400">a web developer.</div>
            </div>
            <div className="flex gap-4">
                <a href="#contact" className="border-2 border-zinc-400 text-teal-400 rounded-full h-10 px-4 hover:bg-teal-300 hover:text-zinc-900 duration-200 flex justify-center items-center">
                    Contact me
                </a>
                <a href="https://github.com/dambrauske" target="_blank" className="border-2 border-zinc-400 text-teal-400 rounded-full w-10 h-10 hover:bg-teal-300 hover:text-zinc-900 duration-200 flex justify-center items-center">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </section>
    );
};

export default HomeSection;
