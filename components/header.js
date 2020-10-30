import Link from 'next/link'
import {useState} from "react";

export default function Header() {
    const [nav_open, set_nav_open] = useState(false);

    return (
        <div
            className="fixed top-0 left-0 right-0 h-20 z-50 flex flex-row justify-between items-center px-2 md:px-20 bg-accent-4 ">
            <Link href="/">
                <div className='flex flex-row h-16 justify-center items-center'>
                    <svg
                        x="0px" y="0px"
                        viewBox="0 0 76 88"
                        className='h-16 w-16'
                    >
                        <g>
                            <g>
                                <polygon className="st3"
                                         points="38,0.7 0.5,22.4 0.5,23.5 0.5,64.4 0.5,65.6 38,87.2 75.5,65.6 75.5,64.4 75.5,23.5 75.5,22.4"/>
                            </g>
                            <g>
                                <defs>
                                    <polygon id="SVGID_1_"
                                             points="38,0.7 0.5,22.4 0.5,23.5 0.5,64.4 0.5,65.6 38,87.2 75.5,65.6 75.5,64.4 75.5,23.5 75.5,22.4"/>
                                </defs>
                                <clipPath id="SVGID_2_">
                                    <use xlinkHref="#SVGID_1_"/>
                                </clipPath>

                                <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-1727.1436"
                                                y1="-1410.3105"
                                                x2="-1727.1436" y2="-1501.2642"
                                                gradientTransform="matrix(-1 0 0 -1 -1688.4688 -1411.8496)">
                                    <stop offset="0" style={{stopColor: "#00b3dc"}}/>
                                    <stop offset="0.6074" style={{stopColor: "#00b3dc", stopOpacity: 0}}/>
                                </linearGradient>
                                <rect x="-13.8" y="-1.5" className="st20" width="105" height="91"/>
                            </g>
                            <polygon className="st21"
                                     points="56.7,65.6 66.1,71.1 75.4,65.7 75.4,54.8 66.1,60.2 56.7,54.8 	"/>
                            <polygon className="st22"
                                     points="56.7,54.8 66.1,60.2 75.5,54.8 75.5,44 66.1,49.4 56.7,44 	"/>
                            <polygon className="st12" points="75.5,44 66.1,38.6 56.7,44 66.1,49.4 	"/>
                            <g>
                                <polygon className="st9"
                                         points="0.5,65.6 9.9,71 19.3,65.6 19.3,54.8 9.9,60.2 0.5,54.8 		"/>
                                <polygon className="st9" points="19.3,54.8 9.9,49.4 0.5,54.8 9.9,60.2 		"/>
                            </g>
                            <polygon className="st17"
                                     points="0.5,54.8 9.9,60.2 19.3,54.8 19.3,44 9.9,49.4 0.5,44 	"/>
                            <polygon className="st14" points="19.3,44 9.9,38.6 0.5,44 9.9,49.4 	"/>
                            <g>
                                <polygon className="st23"
                                         points="9.9,71 19.2,76.4 28.6,71 28.6,60.2 19.2,65.6 9.9,60.2 		"/>
                                <polygon className="st23" points="28.6,60.2 19.2,54.8 9.9,60.2 19.2,65.6 		"/>
                            </g>
                            <g>
                                <polygon className="st2"
                                         points="9.9,60.2 19.2,65.6 28.6,60.2 28.6,49.4 19.2,54.8 9.9,49.4 		"/>
                                <polygon className="st24" points="28.6,49.4 19.2,44 9.9,49.4 19.2,54.8 		"/>
                            </g>
                            <g>
                                <polygon className="st25"
                                         points="9.9,49.4 19.2,54.8 28.6,49.4 28.6,38.6 19.2,44 9.9,38.6 		"/>
                                <polygon className="st25" points="28.6,38.6 19.2,33.2 9.9,38.6 19.2,44 		"/>
                            </g>
                            <polygon className="st8"
                                     points="9.9,38.6 19.2,44 28.6,38.6 28.6,27.8 19.2,33.2 9.9,27.8 	"/>
                            <polygon className="st7" points="28.6,27.8 19.2,22.4 9.9,27.8 19.2,33.2 	"/>
                            <polygon className="st10"
                                     points="19.2,76.4 28.6,81.8 38,76.4 38,65.6 28.6,71 19.2,65.6 	"/>
                            <polygon className="st19" points="38,65.6 28.6,60.2 19.2,65.6 28.6,71 	"/>
                            <g>
                                <polygon className="st5"
                                         points="47.3,71 56.7,76.5 66.1,71.1 66.1,60.2 56.7,65.6 47.3,60.2 		"/>
                                <polygon className="st18"
                                         points="66.1,60.2 56.7,54.8 47.3,60.2 56.7,65.6 		"/>
                            </g>
                            <g>
                                <polygon className="st13"
                                         points="37.9,76.4 47.3,81.8 56.7,76.5 56.7,65.6 47.3,71 37.9,65.6 		"/>
                                <polygon className="st13" points="56.7,65.6 47.3,60.2 37.9,65.6 47.3,71 		"/>
                            </g>
                            <polygon className="st6"
                                     points="38,65.6 47.3,71 56.7,65.6 56.7,54.8 47.3,60.2 37.9,54.8 	"/>
                            <polygon className="st15" points="56.7,54.8 47.3,49.4 37.9,54.8 47.3,60.2 	"/>
                            <polygon className="st11"
                                     points="38,33.1 47.4,38.6 56.8,33.2 56.8,22.3 47.4,27.7 38,22.3 	"/>
                            <polygon className="st15" points="56.8,22.3 47.4,16.9 38,22.3 47.4,27.7 	"/>
                            <polygon className="st1"
                                     points="28.6,81.8 37.9,87.3 47.3,81.8 47.3,71 37.9,76.4 28.6,71 	"/>
                            <polygon className="st13" points="47.3,71 37.9,65.6 28.6,71 37.9,76.4 	"/>
                            <g>
                                <polygon className="st16"
                                         points="28.6,71 37.9,76.5 47.3,71.1 47.3,60.2 37.9,65.6 28.6,60.2 		"/>
                                <polygon className="st16"
                                         points="47.3,60.2 37.9,54.8 28.6,60.2 37.9,65.6 		"/>
                            </g>
                            <polygon className="st4"
                                     points="28.6,60.2 37.9,65.7 47.3,60.3 47.3,49.5 37.9,54.8 28.6,49.5 	"/>
                            <polygon className="st0" points="47.3,49.5 37.9,44 28.6,49.5 37.9,54.8 	"/>
                        </g>
                    </svg>
                    <a className="hover:underline font-bold text-xl italic hidden md:block">Global Drugs Survey</a>
                </div>
            </Link>

            <div className='flex flex-row h-full items-center  md:flex'>
                <input type="text" placeholder='Search here'
                       className='w-40 h-10 px-2 bg-accent-4 border-solid border-2 border-white '/>
                {
                    !nav_open && <svg
                        onClick={() => set_nav_open(true)}
                        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 512 512" xmlSpace="preserve" className='h-10 pl-8 fill-current text-white'>
                        <path
                            d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"/>
                        <path
                            d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z"/>
                        <path d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20
        C512,404.954,503.046,396,492,396z"/>
                    </svg>
                }{
                nav_open &&
                <svg
                    onClick={() => set_nav_open(false)}
                    version="1.1" x="0px" y="0px"
                    viewBox="0 0 409.806 409.806" xmlSpace="preserve"
                    className='h-10 pl-8 fill-current text-white'>
                    <path d="M228.929,205.01L404.596,29.343c6.78-6.548,6.968-17.352,0.42-24.132c-6.548-6.78-17.352-6.968-24.132-0.42
			c-0.142,0.137-0.282,0.277-0.42,0.42L204.796,180.878L29.129,5.21c-6.78-6.548-17.584-6.36-24.132,0.42
			c-6.388,6.614-6.388,17.099,0,23.713L180.664,205.01L4.997,380.677c-6.663,6.664-6.663,17.468,0,24.132
			c6.664,6.662,17.468,6.662,24.132,0l175.667-175.667l175.667,175.667c6.78,6.548,17.584,6.36,24.132-0.42
			c6.387-6.614,6.387-17.099,0-23.712L228.929,205.01z"/>
                </svg>
            }

                <div className={`fixed top-20 left-0 right-0 bg-accent-4 py-8 ${!nav_open ? 'hidden' : ''} `}>
                    <div
                        className='px-20 mx-auto grid grid-cols-1 md:grid-cols-6 md:col-gap-16 lg:col-gap-8 row-gap-8 md:row-gap-12'>
                        <div className='flex flex-col justify-center items-left self-start'>
                            <div className='font-bold text-xl md:text-2xl text-accent-10 mb-4'>GDS 2020</div>
                            <div className='font-light mb-2'>GDS 2020: Alcohol and regret</div>
                            <div className='font-light mb-2'>GDS 2020: Psychedelics under supervision</div>
                            <div className='font-light mb-2'>GDS 2020: Medical Cannabis: so much promise, but the
                                evidence is still thin. can you help
                            </div>
                            <div className='font-light mb-2'>GDS 2020: MDMA: not just about the dose but how you divide
                                it (or not)
                            </div>
                            <div className='font-light mb-2'>GDS 2020: How 'drugs of abuse' are becoming new medicines
                            </div>
                            <div className='font-light mb-2'>GDS 2020: CBD - what is it really good for?</div>
                            <div className='font-light mb-2'>GDS 2020: Are psychedelics your medicine?</div>
                            <div className='font-light mb-2'>GDS 2020: Creating a safer nightlife across the globe</div>
                        </div>
                        <div className='flex flex-col justify-center items-left self-start'>
                            <div className='font-bold text-xl md:text-2xl text-accent-10 mb-4'>GDS Surveys</div>
                            <div className='font-light mb-2'>Why Global Drug Survey is running a UK cannabis survey?
                            </div>
                            <div className='font-light mb-2'>GDS Sample and characteristics</div>
                            <div className='font-light mb-2'>Survey composition</div>
                            <div className='font-light mb-2'>Ethics, Sharing & Security</div>
                        </div>
                        <div className='flex flex-col justify-center items-left self-start'>
                            <div className='font-bold text-xl md:text-2xl text-accent-10 mb-4'>Past Findings</div>
                            <div className='font-light mb-2'>GDS 2019</div>
                            <div className='font-light mb-2'>GDS 2018</div>
                            <div className='font-light mb-2'>GDS 2017</div>
                            <div className='font-light mb-2'>GDS 2015</div>
                            <div className='font-light mb-2'>GDS 2014</div>
                            <div className='font-light mb-2'>YouTube videos of GDS findings</div>
                            <div className='font-light mb-2'>Academic Articles</div>
                        </div>
                        <div className='flex flex-col justify-center items-left self-start'>
                            <div className='font-bold text-xl md:text-2xl text-accent-10 mb-4'>Products and services
                            </div>
                            <div className='font-light mb-2'>Participant Recruitment and Survey Design</div>
                            <div className='font-light mb-2'>Data Analysis and Report</div>
                            <div className='font-light mb-2'>Data insight</div>
                        </div>
                        <div className='flex flex-col justify-center items-left self-start'>
                            <div className='font-bold text-xl md:text-2xl text-accent-10 mb-4'>Free online resources
                            </div>
                            <div className='font-light mb-2'>Drinks Meter</div>
                            <div className='font-light mb-2'>Drugs Meter</div>
                            <div className='font-light mb-2'>Drugs Meter Mini</div>
                            <div className='font-light mb-2'>Safer Use Limits</div>
                            <div className='font-light mb-2'>One Too Many</div>
                            <div className='font-light mb-2'>The Highway Code</div>
                        </div>
                        <div className='flex flex-col justify-center items-left self-start'>
                            <div className='font-bold text-xl md:text-2xl text-accent-10 mb-4'>About GDS</div>
                            <div className='font-bold text-xl md:text-2xl text-accent-10 mb-4'>IN THE MEDIA</div>
                            <div className='font-bold text-xl md:text-2xl text-accent-10 mb-4'>CLIENTS & PARTNERS</div>
                            <div className='font-bold text-xl md:text-2xl text-accent-10 mb-4'>BLOG</div>
                            <div className='font-bold text-xl md:text-2xl text-accent-10 mb-4'>CONTACT</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
