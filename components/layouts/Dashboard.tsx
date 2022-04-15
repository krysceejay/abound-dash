import {ReactNode} from "react"
import type { NextPage } from 'next'
import Head from "next/head"
import Link from 'next/link'

interface Props {
    children: ReactNode,
    title: string
}

const Dashboard: NextPage<Props> = ({children, title}) => {

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <nav className="flex items-center justify-between sticky top-0 z-40 p-4 md:px-10 shadow-sm bg-white w-full h-14">
                <div className="flex items-center space-x-40">
                    <div className="flex items-center space-x-1">
                        <div className="h-full w-6">
                            <img src="/assets/img/logo.png" alt="Logo" className="w-full h-full object-cover"  />
                        </div>
                        <div className="h-full w-20">
                            <img src="/assets/img/abound.png" alt="Logo Name" className="w-full h-full object-cover"  />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm leading-4">Dashboard</h3>
                        <span className="text-xs leading-[13px]">An overview of all activities</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                {/* <div id="dash-bar" className="menu-icon md:hidden" ref={ref} onClick={() => handleShow()}>
                    <span></span>
                </div> */}
            </nav>
            <div className="relative min-h-screen flex w-screen overflow-hidden">
            <aside className="filter-block transform -translate-x-full w-64 md:translate-x-0 md:block md:w-18 lg:w-64 fixed h-full border-r pt-8 pb-0 bg-white">
            <div className="flex md:hidden lg:flex items-center space-x-2 my-2 px-8 pb-5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white uppercase">
                    e
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Chris Chijioke</h3>
                    <p className="text-tiny font-bold tracking-wide uppercase">ROLE: Admin</p>
                </div>
            </div>
            <div className="pb-8 overflow-y-scroll h-5/6">
                <ul>
                    <li className="block md:hidden lg:block px-8 py-3 text-xs uppercase">NAVIGATION</li>
                    <li className={`hover:text-hov-t-color hover:bg-hov-b-color cursor-pointer`}>
                        <Link href="/dashboard">
                            <div className="flex items-center space-x-2.5 px-8 md:px-0 lg:px-8 py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-0 md:m-auto lg:m-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="block md:hidden lg:block">Home</span>
                            </div>
                        </Link>
                    </li>
                    
                    
                </ul>
            </div>
        </aside>
                <main className="py-8 px-4 md:p-8 text-2xl font-bold flex-1 ml-0 md:ml-18 lg:ml-64">
                    {children}
                </main>
            </div>
        </>
    )
}

export default Dashboard