import focusFlow from '../assets/FocusFlow.png';
import TicTacToe from '../assets/TicTacToe.png';

export default function FeaturedProjects({id}){
    const techListStyle = 'text-secondary list-disc ml-5 marker:text-primary';

    const projects = [
        {
            img: focusFlow,
            name: 'FocusFlow',
            description: 'Focus-based task tracking with Pomodoro sessions and productivity insights.',
            gitHub: 'https://github.com/SebastianBrum/focusflow',
            liveLink: 'https://focusflowpomodoro.vercel.app/',
            technologies: ['React', 'JavaScript', 'CSS']
        },
        {
            img: TicTacToe,
            name: 'Tic Tac Toe',
            description: 'A simple Tic Tac Toe game.',
            gitHub: 'https://github.com/SebastianBrum/TicTacToe',
            liveLink: 'https://github.com/SebastianBrum/TicTacToe',
            technologies: ['React', 'JavaScript', 'CSS'],
            liveDemo: false
        }
    ]

    return(
        <section className='card' id={id}>
            <h1 className="title after:w-25">Featured Projects</h1>
            <div className="md:flex md:flex-row md:gap-15">
            {projects.map(value => (
                <div key={value.name} className='flex md:w-[50%] gap-2 flex-col mb-2'>
                    <img src={value.img} alt='Project image' className="rounded-md h-51 w-full object-fill mt-7.5 lg:h-80"/>
                    <h2 className="text-primary text-2xl h-fit font-semiBold mt-2">{value.name}</h2>
                    <p className='text-plainText text-lg h-fit'>{value.description}</p>
                    <ul>
                        {
                        value.technologies.map(value => <li key={value} className={techListStyle}>{value}</li>) 
                        }
                    </ul>
                    <div className='w-full flex flew-row gap-4 mt-2'>
                      <a href={value.gitHub} target='_blank' className="flex bg-accent text-white h-5.5 w-25 items-center justify-center rounded-sm font-semiBold md:h-8 duration-100 ease-in-out hover:translate-y-[-4px] hover:scale-102 hover:bg-hover">View Code</a>
                      {value.liveDemo ?? <a href={value.liveLink} target='_blank' className="flex bg-white text-accent h-5.5 w-25 items-center justify-center rounded-sm border border-[#E2E8F0] font-semiBold md:h-8 duration-100 ease-in-out hover:translate-y-[-4px] hover:scale-102 hover:border-2 hover:border-accent">Live Demo</a>}
                    </div>
                </div>
            ))}
            </div>
        </section>
    )
}