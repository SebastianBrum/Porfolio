export default function Contact({id}){
    const contactLinks = "text-plainText text-md mb-1.5";
    const inputClass = "bg-[#F8FAFC] border border-[#E2E8F0] w-[100%] h-[30px] rounded-md focus:outline-none p-3 font-semiBold";
    const labelClass = "font-bold text-[#64748B]"

    return(
        <section className="card" id={id}>
            <h1 className='title after:w-21'>Get In Touch</h1>
            <p className='text-plainText text-lg mb-4'>I'm always open to discuss new projects, or opportunities.</p>
            <p className={contactLinks}>📧 sebastianwabrummer@gmail.com</p>
            <p className={contactLinks}>💼 <a href='https://www.linkedin.com/in/sebastian-brummer-424432349/' target='_blank'>linkedin.com/SebastianBrummer</a></p>
            <p className={contactLinks}>🐙 <a href='https://github.com/SebastianBrum' target='_blank'>github.com/SebastianBrummer</a></p>
            {/*<div className='flex flex-col mt-5.5'>
            <label className={labelClass}>Name</label>
            <input className={inputClass}/>
            <label className={labelClass}>Email</label>
            <input className={inputClass}/>
            </div> */}
        </section>
    )
}