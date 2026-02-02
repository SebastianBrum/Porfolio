export default function Navbar({toggleMenu, about, projects, contact}){

    const navbarLinks = 
    "text-black text-lg font-semiBold w-[calc(100%/3)] h-full hidden md:flex items-center justify-center transition duration-200 ease-in-out last:rounded-r-md\
    hover:bg-blue-500";

    const hamburger = "h-[4px] w-[40px] bg-black rounded-full my-0.5 ";

    return(
    <nav className="fixed z-1000 w-[90%] h-[7%] left-[50%] translate-x-[-50%] my-2.5 px-4 md:px-0 md:pl-4 bg-card shadow-sm rounded-md flex row justify-between">
        <div className="flex items-center justify-center">
            <p className="text-sm font-bold text-accent">SEBASTIAN <br/> SOUTH AFRICA</p>
        </div>
        <div className="w-[50%] hidden md:flex row">
        <a href={about} className={navbarLinks}>About</a>
        <a href={projects} className={navbarLinks}>Projects</a>
        <a href={contact} className={navbarLinks}>Contact</a>
        </div>

        <ul className="list-none flex md:hidden flex-col center justify-center" onClick={toggleMenu}>
            <li className={hamburger}></li>
            <li className={hamburger}></li>
            <li className={hamburger}></li>
        </ul>
    </nav>
    )
}