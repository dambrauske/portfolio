const HomeSection = () => {
    return (
        <section id="home" className="bg-zinc-900 h-screen gap-8 flex flex-col justify-center items-center text-zinc-300">

            <div className="flex flex-col gap-2">
                <div className="text-4xl">Hello,</div>
                <div className="text-7xl ">I'm Ugnė,</div>
                <div className="text-7xl text-teal-300">a web developer.</div>
            </div>
            <div className="flex gap-4">
                <button className="border-2 text-teal-300 rounded-full h-10 px-4 hover:bg-teal-300 hover:text-zinc-900 duration-200">
                    Contact me
                </button>
                <a href="https://github.com/dambrauske" target="_blank" className="border-2 text-teal-300 rounded-full w-10 h-10 hover:bg-teal-300 hover:text-zinc-900 duration-200 flex justify-center items-center">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </section>
    );
};

export default HomeSection;
