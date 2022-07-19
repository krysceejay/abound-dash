import type { NextPage } from "next";
import Link from "next/link";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Layout from "../components/layouts/Dashboard";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Blue", "Purple", "Red", "Yellow"],
  datasets: [
    {
      label: "Hello",
      data: [300, 50, 100, 50],
      backgroundColor: ["#3B00ED", "#9C27B0", "#D81B60", "#FF9800"],
      borderColor: ["#3B00ED", "#9C27B0", "#D81B60", "#FF9800"],
    },
  ],
};

const Home: NextPage = () => {
  return (
    <Layout title="Home Page">
      <div className="py-4">
        <header className="flex items-center space-x-2">
          <div className="h-12 w-12">
            <img
              src="/assets/img/wave-emoji.png"
              alt="Wave"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-2xl block">Welcome back, Alero</span>
            <span className="text-xs block">Mon. 21st March 2022</span>
          </div>
        </header>
        <section className="bg-white grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-y-[40px] py-6 rounded-lg mt-6">
          {/* <section className="bg-white grid grid-cols-4 py-6 rounded-lg mt-6"> */}
          <div className="border-r border-[#EFEFEF] px-6">
            <span className="text-sm">Employees Enrolled</span>
            <h3 className="text-[32px] mt-4">872</h3>
            <div className="flex items-center space-x-1 mt-2">
              <div className="h-4 w-4 bg-[#A5E7CF] rounded-full flex items-center justify-center">
                <img
                  src="/assets/img/arrow-up.png"
                  alt="Arrow Up"
                  className="w-[6.4px] h-[6.4px] object-cover"
                />
              </div>
              <div>
                <span className="text-[#2AAF7A] text-sm inline-block mr-[5px]">
                  23.62%
                </span>
                <span className="text-[10px]">than last month</span>
              </div>
            </div>
            <div className="mt-3 w-32 h-[6px]">
              <img
                src="/assets/img/graph.png"
                alt="Graph"
                className="w-full h-full object-cover"
              />
            </div>
            <Link href="/dashboard">
              <a className="text-[#0D70BF] text-xs inline-block px-3 py-[6px] border border-[#0D70BF] rounded-[3px] mt-10">
                Manage Employees
              </a>
            </Link>
          </div>
          <div className="border-r border-[#EFEFEF] px-6">
            <span className="text-sm">Monthly Benefit Payout</span>
            <h3 className="text-[32px] mt-4">₦307.2K</h3>
            <div className="flex items-center space-x-1 mt-2">
              <div className="h-4 w-4 bg-[#A5E7CF] rounded-full flex items-center justify-center">
                <img
                  src="/assets/img/arrow-up.png"
                  alt="Arrow Up"
                  className="w-[6.4px] h-[6.4px] object-cover"
                />
              </div>
              <div>
                <span className="text-[#2AAF7A] text-sm inline-block mr-[5px]">
                  11.11%
                </span>
                <span className="text-[10px]">than last month</span>
              </div>
            </div>
            <div className="mt-3 w-32 h-[6px]">
              <img
                src="/assets/img/graph.png"
                alt="Graph"
                className="w-full h-full object-cover"
              />
            </div>
            <Link href="/dashboard">
              <a className="text-[#0D70BF] text-xs inline-block px-3 py-[6px] border border-[#0D70BF] rounded-[3px] mt-10">
                Benefits History
              </a>
            </Link>
          </div>
          <div className="border-r border-[#EFEFEF] px-6">
            <span className="text-sm">Avg Investment Performance</span>
            <h3 className="text-[32px] mt-4">13.65%</h3>
            <div className="flex items-center space-x-1 mt-2">
              <div className="h-4 w-4 bg-[#FFE9E9] rounded-full flex items-center justify-center">
                <img
                  src="/assets/img/arrow-down.png"
                  alt="Arrow Down"
                  className="w-[6.4px] h-[6.4px] object-cover"
                />
              </div>
              <div>
                <span className="text-[#FA353E] text-sm inline-block mr-[5px]">
                  0.32%
                </span>
                <span className="text-[10px]">than last month</span>
              </div>
            </div>
            <div className="mt-3 w-32 h-[6px]">
              <img
                src="/assets/img/graph.png"
                alt="Graph"
                className="w-full h-full object-cover"
              />
            </div>
            <Link href="/dashboard">
              <a className="text-[#0D70BF] text-xs inline-block px-3 py-[6px] border border-[#0D70BF] rounded-[3px] mt-10">
                Investment Details
              </a>
            </Link>
          </div>
          <div className="px-6">
            <span className="text-sm">Total Benefits Paid Out</span>
            <h3 className="text-[32px] mt-4">₦1.27M</h3>
            <div className="flex items-center space-x-1 mt-2">
              <div className="h-4 w-4 bg-[#A5E7CF] rounded-full flex items-center justify-center">
                <img
                  src="/assets/img/arrow-up.png"
                  alt="Arrow Up"
                  className="w-[6.4px] h-[6.4px] object-cover"
                />
              </div>
              <div>
                <span className="text-[#2AAF7A] text-sm inline-block mr-[5px]">
                  0.32%
                </span>
                <span className="text-[10px]">than last month</span>
              </div>
            </div>
            <div className="mt-3 w-32 h-[6px]">
              <img
                src="/assets/img/graph.png"
                alt="Graph"
                className="w-full h-full object-cover"
              />
            </div>
            <Link href="/dashboard">
              <a className="text-[#0D70BF] text-xs inline-block px-3 py-[6px] border border-[#0D70BF] rounded-[3px] mt-10">
                Payout History
              </a>
            </Link>
          </div>
        </section>

        <section className="grid mt-8 gap-2  grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
          {/* <section className="grid grid-cols-4 mt-8 gap-2"> */}
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
                    <span className="text-[10px] block">
                      Muri Okunola Park, VI, Lagos
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#0D70BF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
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
                    <span className="text-[10px] block">
                      Muri Okunola Park, VI, Lagos
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#0D70BF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
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
                    <span className="text-[10px] block">
                      Muri Okunola Park, VI, Lagos
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#0D70BF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0D70BF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between border-b border-b-[#EFEFEF] py-3">
                <div>
                  <span className="text-sm block">₦307,236.00</span>
                  <span className="text-[10px] block">21 Mar 2022</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0D70BF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between border-b border-b-[#EFEFEF] py-3">
                <div>
                  <span className="text-sm block">₦307,236.00</span>
                  <span className="text-[10px] block">21 Mar 2022</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0D70BF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between border-b border-b-[#EFEFEF] py-3">
                <div>
                  <span className="text-sm block">₦307,236.00</span>
                  <span className="text-[10px] block">21 Mar 2022</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0D70BF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between border-b border-b-[#EFEFEF] py-3">
                <div>
                  <span className="text-sm block">₦307,236.00</span>
                  <span className="text-[10px] block">21 Mar 2022</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0D70BF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg px-3 py-6">
            <header className="border-b border-b-[#EFEFEF] pb-1">
              <span className="text-sm">Employee Distribution Widget</span>
            </header>
            <div className="relative mt-5 h-[120px] w-[120px] mx-auto">
              <Doughnut
                data={data}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  cutout: "85%",
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0 text-center flex flex-col">
                <span className="text-[22px] leading-5">872</span>
                <span className="text-xs mt-1">employees</span>
              </div>
            </div>
            <div className="mt-5">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-gordita-light">Associates</span>
                  <span className="text-xs font-gordita-light">432</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div className="bg-[#3B00ED] h-1 rounded-full w-3/5"></div>
                </div>
              </div>
              <div className="mt-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-gordita-light">Junior</span>
                  <span className="text-xs font-gordita-light">301</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div className="bg-[#9C27B0] h-1 rounded-full w-1/2"></div>
                </div>
              </div>
              <div className="mt-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-gordita-light">Senior</span>
                  <span className="text-xs font-gordita-light">174</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div className="bg-[#D81B60] h-1 rounded-full w-1/2"></div>
                </div>
              </div>
              <div className="mt-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-gordita-light">Contract</span>
                  <span className="text-xs font-gordita-light">223</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div className="bg-[#FF9800] h-1 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-center h-2.5 w-full">
                <div className="bg-[#0070C5] h-2.5 w-[71%]" />
                <div className="bg-[#FF9040] h-2.5 w-[29%]" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-gordita-light">Male</span>
                  <span className="text-xs font-gordita-light block">
                    <span className="font-gordita">71%</span> (620)
                  </span>
                </div>
                <div>
                  <span className="text-xs font-gordita-light">Female</span>
                  <span className="text-xs font-gordita-light block">
                    <span className="font-gordita">29%</span> (252)
                  </span>
                </div>
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
        </section>
      </div>
    </Layout>
  );
};

export default Home;
