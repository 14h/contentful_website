import Link from 'next/link'
import {useState} from "react";



export default function Header({selected_nav_elem}) {


    return (
        <div
            className="fixed top-0 left-0 right-0 h-20 z-50 lg:flex flex-row justify-between items-center px-2 md:px-20 bg-accent-1 border-solid border-b-2 border-gray-100"
        >
            <Link href="/">
                <div className='flex flex-row justify-center items-center m-8'>
                    <a className="hover:underline">
                        <div className='font-light text-3xl text-center'>CAROLIN HAUKE</div>
                        <div className='font-bold text-xl text-center'>CINEMATOGRAPHY</div>
                    </a>
                </div>
            </Link>

            <div className='flex flex-row justify-center items-center bg-accent-1'>
                <Link href='/projects'>
                    <div className={`p-4 cursor-pointer border-b-2 border-solid ${selected_nav_elem === 'projects' ? 'border-gray-400' : 'border-transparent'} hover:border-gray-300`}>
                        PROJECTS
                    </div>
                </Link>
                <Link href='/work-in-progress'>
                    <div className={`p-4 cursor-pointer border-b-2 border-solid ${selected_nav_elem === 'work_in_progress' ? 'border-gray-400' : 'border-transparent'} hover:border-gray-300`}>
                        WORK IN PROGRESS
                    </div>
                </Link>
                <Link href='/about'>
                    <div className={`p-4 cursor-pointer border-b-2 border-solid ${selected_nav_elem === 'about' ? 'border-gray-400' : 'border-transparent'} hover:border-gray-300`}>
                        ABOUT
                    </div>
                </Link>
            </div>

        </div>
    )
}
