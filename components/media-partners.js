export default function MediaPartners() {
    return (
        <section
            className="bg-accent-10-8 md:h-1/2 relative p-12 text-center pb-40"
        >


            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 text-center z-10">
                Media Partners
            </h1>
            <div className="text-2xl md:text-4xl font-hairline tracking-tighter leading-tight md:pr-8 my-12 z-20 max-w-full md:max-w-screen-lg mx-auto text-accent-3">
                Our media partners help spread the word worldwide these include...
            </div>
            <img
                alt='media partners'
                src='/images/partner-logos.png'
                className='max-w-full md:max-w-screen-lg mx-auto z-10'
            />
            <img
                alt='explore-1'
                src='/images/explore-2.png'
                className=' md:block absolute bottom-0 right-0 w-40 md:w-1/4 mt-32'
            />
        </section>
    )
}
