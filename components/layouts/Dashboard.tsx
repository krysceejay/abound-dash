import { ReactNode, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

interface Props {
  children: ReactNode;
  title: string;
}

const Dashboard: NextPage<Props> = ({ children, title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        onClick={handleMenuToggle}
        className={`fixed left-0 cursor-pointer top-0 w-full h-full bg-[#147ac8] z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      ></div>
      <nav className="flex items-center justify-between sticky top-0 z-40 p-4 md:px-10 shadow-sm bg-white w-full h-14">
        <div className="flex items-center space-x-40">
          <div className="flex items-center space-x-1">
            <div className="h-full w-6">
              <img
                src="/assets/img/logo.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-full w-20">
              <img
                src="/assets/img/abound.png"
                alt="Logo Name"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm leading-4 font-gordita-medium">Dashboard</h3>
            <span className="text-xs leading-[13px]">
              An overview of all activities
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <div className="flex items-center space-x-2">
            <div className="h-7 w-7 rounded-full">
              <img
                src="/assets/img/profile-picture.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-xs">Alero</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <button className="lg:hidden flex" onClick={handleMenuToggle}>
            menu
          </button>
        </div>
        {/* <div id="dash-bar" className="menu-icon md:hidden" ref={ref} onClick={() => handleShow()}>
                    <span></span>
                </div> */}
      </nav>
      <div className="relative min-h-screen flex w-screen overflow-hidden">
        <aside
          className={`filter-block transform lg:-translate-x-full lg:translate-x-0 w-[233px] fixed min-h-[88%] border-r px-4 py-[18px] bg-white my-4 ml-4 rounded-[10px] lg:flex flex-col justify-between ease-in-out duration-300 z-[60] ${
            isMenuOpen ? " translate-x-0" : " -translate-x-full left-0"
          }`}
        >
          <div>
            <div className="bg-[#464646] py-7 rounded-md flex items-center justify-center flex-col space-y-4">
              <div className="h-[90px] w-[90px] bg-white rounded-full p-2">
                <img
                  src="/assets/img/companylogo.png"
                  alt="Company Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-white">Crowdyvest Limited</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="pb-8 overflow-y-scroll mt-8 h-[270px]">
              <ul>
                <li className="rounded-md px-6 py-4">
                  <Link href="/">
                    <a className="flex items-center space-x-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      <span className="text-sm">Dashboard</span>
                    </a>
                  </Link>
                </li>
                <li className="bg-[#F6F8FF] text-[#0070C5] rounded-md px-6 py-4">
                  <Link href="/employees">
                    <a className="flex items-center space-x-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                      <span className="text-sm">Employees</span>
                    </a>
                  </Link>
                </li>
                <li className="rounded-md px-6 py-4">
                  <Link href="/dashboard">
                    <div className="flex items-center space-x-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm">Benefits</span>
                    </div>
                  </Link>
                </li>
                <li className="rounded-md px-6 py-4">
                  <Link href="/dashboard">
                    <div className="flex items-center space-x-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">Performance</span>
                    </div>
                  </Link>
                </li>
                <li className="rounded-md px-6 py-4">
                  <Link href="/dashboard">
                    <div className="flex items-center space-x-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">Deals & Offers</span>
                    </div>
                  </Link>
                </li>
                <li className="rounded-md px-6 py-4">
                  <Link href="/dashboard">
                    <div className="flex items-center space-x-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">Events</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#F6F8FF] py-7 flex flex-col items-center justify-center rounded-md">
            <div className="bg-[#1379C6] h-14 w-14 rounded-full" />
            <span className="text-[15px] mt-3">Need Assistance?</span>
            <span className="text-xs">Talk with an online agent</span>
          </div>
        </aside>
        <main className="px-8 text-2xl font-bold flex-1 ml-0 md:ml-18 lg:ml-64 my-4">
          {children}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
