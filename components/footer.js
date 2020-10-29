import {EXAMPLE_PATH} from '../lib/constants'

export default function Footer() {
    return (
        <footer className="bg-accent-5 border-t border-accent-4 ">
            <div className="py-28 flex flex-col lg:flex-row items-center justify-between container mx-auto">
                <div className='flex flex-col items-left'>
                    <h6 className="text-xl lg:text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w">
                        Global Drugs Survey
                    </h6>
                    <br/>
                    <a
                        href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                        className="font-bold hover:underline"
                    >
                        GDS 2020
                    </a>
                    <a
                        href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                        className="font-bold hover:underline"
                    >
                        About us
                    </a>
                    <a
                        href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                        className="font-bold hover:underline"
                    >
                        GDS Surveys
                    </a>
                    <a
                        href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                        className="font-bold hover:underline"
                    >
                        Past Findings
                    </a>
                    <a
                        href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                        className="font-bold hover:underline"
                    >
                        Products and services
                    </a>
                    <a
                        href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                        className="font-bold hover:underline"
                    >
                        Free online resources
                    </a>
                    <a
                        href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                        className="font-bold hover:underline"
                    >
                        In the media
                    </a>
                    <a
                        href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                        className="font-bold hover:underline"
                    >
                        Clients and partners
                    </a>
                    <a
                        href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                        className="font-bold hover:underline"
                    >
                        Blog
                    </a>
                    <a
                        href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                        className="font-bold hover:underline"
                    >
                        Testimonials
                    </a>
                    <a
                        href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                        className="font-bold hover:underline"
                    >
                        Privacy policy
                    </a>
                    <a
                        href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                        className="font-bold hover:underline"
                    >
                        Contact
                    </a>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                    <a
                        href="https://nextjs.org/docs/basic-features/pages"
                        className="mx-3 bg-accent-5 hover:bg-white hover:text-black border border-white text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                    >
                        Are you a researcher ?
                    </a>
                </div>
            </div>
        </footer>
    )
}
