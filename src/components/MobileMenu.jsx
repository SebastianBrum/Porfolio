import { X } from 'lucide-react';

export default function MobileMenu({toggleMenu, about, contact, projects}){
    const navLinks = "text-white text-3xl font-semiBold border-b border-white/30 w-[70%] flex justify-center items-center p-4";

    return(
        <div className="w-full h-screen bg-black p-5">
            <X className="relative w-10 h-10 ml-auto flex items-center justify-center text-white" onClick={toggleMenu}/>
            <ul className="h-[70%] flex flex-col items-center justify-around list-none">
                <a className={navLinks} href={about} onClick={toggleMenu}>About</a>
                <a className={navLinks} href={projects} onClick={toggleMenu}>Projects</a>
                <a className={navLinks} href={contact} onClick={toggleMenu}>Contact</a>
                <a className={navLinks}>Resume</a>
            </ul>
        </div>
    )
}