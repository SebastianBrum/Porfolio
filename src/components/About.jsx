export default function About({id}){
    const technologies = ['HTML', 'CSS', 'TailwindCSS', 'React', 'JavaScript', 'Python'];

    return(
        <section className="card" id={id}>
            <h1 className="title after:w-18 md:after:">About Me</h1>
            <div className="lg:flex lg:flex-row lg:justify-between">
            <p className="text-plainText font-regular text-md mb-3 lg:w-[50%]">
                I’m a front-end web developer focused on building clean, responsive, and user-friendly interfaces. I enjoy turning ideas into functional designs and refining them through iteration and problem-solving.
                I primarily work with HTML, CSS, JavaScript, React, and Tailwind CSS, and I build projects to strengthen my understanding of modern front-end development practices.
            </p>
                <div className="lg:w-[40%]">
                    <h2 className='text-primary font-semiBold text-xl mb-2'>
                        Technical Skills
                    </h2>
                    <div className=" flex flex-wrap gap-2 w-fit">
                        {technologies.map(tech => (
                            <div key={tech} className="relative bg-secondary text-white w-27.5 h-5.75 font-semiBold rounded-full flex justify-center items-center duration-100 ease-in-out hover:translate-y-[-3px] hover:bg-accent">{tech}</div>
                        ))}
                    </div>
                </div>
            </div>
        </section> 
    )
}
