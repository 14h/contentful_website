import DonateAlert from "./donate-alert";

export default function Intro() {
    return (
        <section
            className="flex-col md:flex-row flex items-center md:justify-start min-h-screen relative mt-20"
        >
            <img
                src='/images/explore-dark.png'
                alt='explore'
                className='absolute top-0 bottom-0 right-0 left-0 max-h-full h-full w-full object-cover'
            />
            <DonateAlert />
            <div className='flex flex-col items-left mx-8 md:mx-16 mt-40 z-10 w-screen-full md:w-1/2'>

                <h1 className="text-4xl md:text-7xl font-hairline  md:pr-8">
                    Welcome to <span className='italic capitalize font-bold'>Global Drugs Survey.</span>
                </h1>
                <div className="text-2xl md:text-4xl font-hairline tracking-tighter leading-tight md:pr-8 my-12">
                    The worlds largest drug survey;
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s
                </div>
                <a
                    href="https://globaldrugssurvey.com/"
                    className="mx-auto bg-accent-2 hover:bg-white hover:text-black border border-white text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                >
                    Are you a researcher ?
                </a>
            </div>
        </section>
    )
}
