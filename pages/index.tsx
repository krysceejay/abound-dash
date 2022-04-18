import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/layouts/Dashboard'

const Home: NextPage = () => {
  return (
    <Layout title="Home Page">
      <header className="flex items-center space-x-2">
        <div className="h-12 w-12">
          <img src="/assets/img/wave-emoji.png" alt="Wave" className="w-full h-full object-cover"  />
        </div>
        <div>
          <span className="text-2xl block">Welcome back, Alero</span>
          <span className="text-xs block">Mon. 21st March 2022</span>
        </div>
      </header>
      <section className="bg-white grid grid-cols-4 py-6 rounded-lg mt-6">
        <div className="border-r border-[#EFEFEF] px-6">
          <span className="text-sm">Employees Enrolled</span>
          <h3 className="text-[32px] mt-4">872</h3>
          <div className="flex items-center space-x-1 mt-2">
            <div className="h-4 w-4 bg-[#A5E7CF] rounded-full flex items-center justify-center">
              <img src="/assets/img/arrow-up.png" alt="Arrow Up" className="w-[6.4px] h-[6.4px] object-cover" />
            </div>
            <div>
              <span className="text-[#2AAF7A] text-sm inline-block mr-[5px]">23.62%</span>
              <span className="text-[10px]">than last month</span>
            </div>
          </div>
          <div className="mt-3 w-32 h-[6px]">
            <img src="/assets/img/graph.png" alt="Graph" className="w-full h-full object-cover" />
          </div>
          <Link href="/dashboard">
            <a className="text-[#0D70BF] text-xs inline-block px-3 py-[6px] border border-[#0D70BF] rounded-[3px] mt-10">Manage Employees</a>
          </Link>
        </div>
        <div className="border-r border-[#EFEFEF] px-6">
          <span className="text-sm">Monthly Benefit Payout</span>
          <h3 className="text-[32px] mt-4">₦307.2K</h3>
          <div className="flex items-center space-x-1 mt-2">
            <div className="h-4 w-4 bg-[#A5E7CF] rounded-full flex items-center justify-center">
              <img src="/assets/img/arrow-up.png" alt="Arrow Up" className="w-[6.4px] h-[6.4px] object-cover" />
            </div>
            <div>
              <span className="text-[#2AAF7A] text-sm inline-block mr-[5px]">11.11%</span>
              <span className="text-[10px]">than last month</span>
            </div>
          </div>
          <div className="mt-3 w-32 h-[6px]">
            <img src="/assets/img/graph.png" alt="Graph" className="w-full h-full object-cover" />
          </div>
          <Link href="/dashboard">
            <a className="text-[#0D70BF] text-xs inline-block px-3 py-[6px] border border-[#0D70BF] rounded-[3px] mt-10">Benefits History</a>
          </Link>
        </div>
        <div className="border-r border-[#EFEFEF] px-6">
        <span className="text-sm">Avg Investment Performance</span>
          <h3 className="text-[32px] mt-4">13.65%</h3>
          <div className="flex items-center space-x-1 mt-2">
            <div className="h-4 w-4 bg-[#FFE9E9] rounded-full flex items-center justify-center">
              <img src="/assets/img/arrow-down.png" alt="Arrow Down" className="w-[6.4px] h-[6.4px] object-cover" />
            </div>
            <div>
              <span className="text-[#FA353E] text-sm inline-block mr-[5px]">0.32%</span>
              <span className="text-[10px]">than last month</span>
            </div>
          </div>
          <div className="mt-3 w-32 h-[6px]">
            <img src="/assets/img/graph.png" alt="Graph" className="w-full h-full object-cover" />
          </div>
          <Link href="/dashboard">
            <a className="text-[#0D70BF] text-xs inline-block px-3 py-[6px] border border-[#0D70BF] rounded-[3px] mt-10">Investment Details</a>
          </Link>
        </div>
        <div className="px-6">
        <span className="text-sm">Total Benefits Paid Out</span>
          <h3 className="text-[32px] mt-4">₦1.27M</h3>
          <div className="flex items-center space-x-1 mt-2">
            <div className="h-4 w-4 bg-[#A5E7CF] rounded-full flex items-center justify-center">
              <img src="/assets/img/arrow-up.png" alt="Arrow Up" className="w-[6.4px] h-[6.4px] object-cover" />
            </div>
            <div>
              <span className="text-[#2AAF7A] text-sm inline-block mr-[5px]">0.32%</span>
              <span className="text-[10px]">than last month</span>
            </div>
          </div>
          <div className="mt-3 w-32 h-[6px]">
            <img src="/assets/img/graph.png" alt="Graph" className="w-full h-full object-cover" />
          </div>
          <Link href="/dashboard">
            <a className="text-[#0D70BF] text-xs inline-block px-3 py-[6px] border border-[#0D70BF] rounded-[3px] mt-10">Payout History</a>
          </Link>
        </div>
      </section>
      <section className="grid grid-cols-4 mt-8 gap-2">
        <div className="bg-white rounded-lg px-3 py-6">
          <header className="flex items-center justify-between border-b border-b-[#EFEFEF] pb-1">
            <span className="text-sm">Upcoming Events</span>
            <Link href="/">
              <a className="text-[10px]">See all</a>
            </Link>
          </header>
          <div>
            <div className="flex py-3 border-b border-b-[#EFEFEF]">
              <div className="w-[51px] text-center">
                <span className="text-lg block">24</span>
                <span className="text-xs block">MAR</span>
              </div>
              <div className="flex items-center justify-between flex-1 border-l border-[#EFEFEF]">
                <div className="pl-3">
                  <span className="text-sm block">FintechX Hangout</span>
                  <span className="text-[10px] block">Muri Okunola Park, VI, Lagos</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0D70BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="flex py-3 border-b border-b-[#EFEFEF]">
              <div className="w-[51px] text-center">
                <span className="text-lg block">24</span>
                <span className="text-xs block">MAR</span>
              </div>
              <div className="flex items-center justify-between flex-1 border-l border-[#EFEFEF]">
                <div className="pl-3">
                  <span className="text-sm block">FintechX Hangout</span>
                  <span className="text-[10px] block">Muri Okunola Park, VI, Lagos</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0D70BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="flex py-3 border-b border-b-[#EFEFEF]">
              <div className="w-[51px] text-center">
                <span className="text-lg block">24</span>
                <span className="text-xs block">MAR</span>
              </div>
              <div className="flex items-center justify-between flex-1 border-l border-[#EFEFEF]">
                <div className="pl-3">
                  <span className="text-sm block">FintechX Hangout</span>
                  <span className="text-[10px] block">Muri Okunola Park, VI, Lagos</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0D70BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg px-3 py-6">
          <header className="flex items-center justify-between border-b border-b-[#EFEFEF] pb-1">
            <span className="text-sm">Benefits Payout History</span>
            <Link href="/">
              <a className="text-[10px]">See all</a>
            </Link>
          </header>
          <div>
            <div className="flex items-center justify-between border-b border-b-[#EFEFEF] py-3">
              <div>
                <span className="text-sm block">₦307,236.00</span>
                <span className="text-[10px] block">21 Mar 2022</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0D70BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex items-center justify-between border-b border-b-[#EFEFEF] py-3">
              <div>
                <span className="text-sm block">₦307,236.00</span>
                <span className="text-[10px] block">21 Mar 2022</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0D70BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex items-center justify-between border-b border-b-[#EFEFEF] py-3">
              <div>
                <span className="text-sm block">₦307,236.00</span>
                <span className="text-[10px] block">21 Mar 2022</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0D70BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex items-center justify-between border-b border-b-[#EFEFEF] py-3">
              <div>
                <span className="text-sm block">₦307,236.00</span>
                <span className="text-[10px] block">21 Mar 2022</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0D70BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex items-center justify-between border-b border-b-[#EFEFEF] py-3">
              <div>
                <span className="text-sm block">₦307,236.00</span>
                <span className="text-[10px] block">21 Mar 2022</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0D70BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg px-3 py-6">
          <header className="border-b border-b-[#EFEFEF] pb-1">
            <span className="text-sm">Benefits Overview</span>
          </header>
          <div className="border-b border-b-[#EFEFEF] py-5 text-center">
            <span className="text-sm">Average Monthly Payout</span>
            <h3 className="text-[32px] mt-3">₦307.26</h3>
          </div>
          <div className="border-b border-b-[#EFEFEF] py-5 text-center">
            <span className="text-sm">Available Deals & Offers</span>
            <h3 className="text-[32px] mt-3">2,480</h3>
          </div>

        </div>
        <div>hELLO</div>
      </section>
    </Layout>
  )
}

export default Home
