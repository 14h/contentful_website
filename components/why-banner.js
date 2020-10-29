export default function WhyBanner() {
    return (
        <section
            className="bg-accent-9-5 md:h-1/2 relative p-12"
        >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 text-center">
                Why use GDS?
            </h1>
            <div className="text-xl md:text-3xl md:pr-8 my-12 max-w-full md:max-w-screen-lg mx-auto text-accent-8">
                GDS is an efficient approach to gain content rich data that explores diverse health outcomes associated with the use of drugs and alcohol across the population of your country.
            </div>
            <div className="text-l md:text-xl md:pr-8 my-12 max-w-full md:max-w-screen-lg mx-auto text-accent-10">
                GDS can help you add numbers and depth to the findings of more rigorous, though less detailed and smaller, survey findings. Using anonymous on-line research tools, designed and analysed by leading experts in the fields of epidemiology, addiction, criminology, toxicology and sociology GDS has access to drug use data from over 500,000 people from over 50 countries.
            </div>
            <div className="text-l md:text-xl md:pr-8 my-12 max-w-full md:max-w-screen-lg mx-auto text-accent-10">
                The GDS sampling frame allows you to effectively compare population segments - young, old, males, females, gay, straight, clubbers, thin people, obese people, vegetarians, those with a current psychiatric symptoms and diagnoses, students, northerners, southerners. GDS helps you better understand the quantitative dynamics of personal decision-making about drug use, detects regional differences in patterns of drug use and related harm, and informs novel interventions.
            </div>
            <div className="text-l md:text-xl md:pr-8 my-12 max-w-full md:max-w-screen-lg mx-auto text-accent-10">
                GDS creates beautiful data reports, digital health assessment tools and free harm reduction resources that aim to make drug use safer regardless of the legal status of the drug GDS reaches hidden, sentinel and hard to reach populations and puts you on top of emerging drug trends in your country and major cities.
            </div>
            <div className='flex flex-col md:flex-row md:justify-center align-center max-w-full md:max-w-screen-lg mx-auto'>
                <div className='relative h-56 w-56 bg-accent-10 box-shadow-accent-5 m-3 mx-auto text-center md:m-12 rounded-lg p-3 pt-8 text-xl  duration-200 transition-colors cursor-pointer'>
                    <div className='text-accent-5'>Learn more about GDS</div>
                    <div className='absolute bottom-0 left-0 right-0 w-full text-center text-accent-3 text-xl font-bold italic'>DOWNLOAD OUR PDF BROCHURE</div>
                </div>
            </div>
            <img
                alt='explore-1'
                src='/images/explore-3.png'
                className=' md:block absolute bottom-0 left-0 w-40 md:w-1/4 mt-32'
            />
        </section>
    )
}
