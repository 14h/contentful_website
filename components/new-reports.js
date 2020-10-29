export default function NewReports() {
    return (
        <section
            className="bg-accent-5-10 md:h-1/2 relative p-12"
        >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 text-center">
                Key Findings Report now live!
            </h1>
            <div className="text-2xl md:text-4xl font-hairline tracking-tighter leading-tight md:pr-8 my-12 max-w-full md:max-w-screen-lg mx-auto text-accent-3">
                The GDS Special Edition on COVID-19 was developed as part of a global effort to better understand the impact of the pandemic on people’s lives with a specific focus on the use of alcohol and other drugs, mental health and relationships. Over 55,000 people took part. The survey ran for 7 weeks in (May and - June 2020).
            </div>
            <div className='flex flex-col md:flex-row md:justify-center align-center max-w-full md:max-w-screen-lg mx-auto'>
                <div className='relative h-56 w-56 bg-accent-10 border-rounder-accent-6 m-3 mx-auto text-center md:m-12 rounded-lg p-3 pt-8 text-xl hover:bg-accent-3 duration-200 transition-colors cursor-pointer'>
                    <div>The GDS Covid 19 Global Key Findings Report</div>
                    <div className='absolute bottom-0 left-0 right-0 w-full text-center text-accent-4 text-xl font-bold italic'>VIEW REPORT</div>
                </div>
                <div className='relative h-56 w-56 bg-accent-6 m-3 mx-auto text-center md:m-12 rounded-lg p-3 pt-8 text-xl hover:bg-accent-3 duration-200 transition-colors cursor-pointer'>
                    <div>The GDS Covid 19 Global Executive Summary</div>
                    <div className='absolute bottom-0 left-0 right-0 w-full text-center text-accent-4 text-xl font-bold italic'>DOWNLOAD PDF</div>
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
