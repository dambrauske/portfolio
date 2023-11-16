
const Navbar = () => {
    return (
        <nav className="bg-zinc-700 h-12 sticky top-0 w-full flex justify-center items-center z-20 text-zinc-300">
            <ul className="flex md:gap-10 gap-4">
                <li className="hover:text-teal-400 duration-200">
                    <a href="#home">Home</a>
                </li>
                <li className="hover:text-teal-400 duration-200">
                    <a href="#about">About</a>
                </li>
                <li className="hover:text-teal-400 duration-200">
                    <a href="#projects">Projects</a>
                </li>
                <li className="hover:text-teal-400 duration-200">
                    <a href="#technologies">Skills</a>
                </li>
                <li className="hover:text-teal-400 duration-200">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
