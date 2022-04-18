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
        <div className="border-r border-[#EFEFEF] px-6">hello</div>
        <div className="border-r border-[#EFEFEF] px-6">hello</div>
        <div className="px-6">hello</div>
      </section>
    </Layout>
  )
}

export default Home
