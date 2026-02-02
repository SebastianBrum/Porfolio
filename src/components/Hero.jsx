import myPhoto from '../assets/Foto-van-myself.jpg'

export default function Hero({projects, contact}){
    return(
        <section className='bg-card relative top-[10%] h-fit w-[90%] mx-auto shadow-sm rounded-lg flex items-center flex-col p-3 mb-5/
                            md:flex-row md:gap-8 md:justify-center'>
            <img src={myPhoto} className='relative w-[35%]  rounded-full md:w-[20%] md:border-5 md:border-primary'/>
            <div className='flex flex-col w-fit'>
              <h1 className="font-bold text-primary text-3xl text-center mt-2 md:text-left md:w-fit">Sebastian Brummer</h1>
              <h2 className='font-semiBold text-accent text-lg text-center md:text-left md:text-xl md:w-fit'>Front-end Developer</h2>
              <p className=" font-regular text-plainText text-center text-md leading-relaxed w-70 mt-3 md:text-left md:mt-5 md:text-lg md:w-fit">
                Passionate about building scalable web applications and creating elegant
                solutions to complex problems.
              </p>
              <div className='flex justify-start items-center flex-col / 
                              md:flex-row md:mt-5 md:gap-5 w-fit'>
                <a className='flex justify-center items-center bg-accent rounded-md w-70 h-7.5 text-white font-bold mt-5 text-lg md:mt-0 md:w-40 md:h-12.5 duration-100 ease-in-out hover:translate-y-[-4px] hover:scale-102 hover:bg-hover' href={projects}>View Projects</a>
                <a className='flex justify-center items-center bg-white border border-[#E2E8F0] w-70 h-7.5 text-accent rounded-md font-semiBold mt-2 text-lg md:mt-0 md:w-40 md:h-12.5 duration-100 ease-in-out hover:translate-y-[-4px] hover:scale-102 hover:border-2 hover:border-accent' href={contact}>Get in Touch</a>
              </div>
            </div>
        </section>
    )
}