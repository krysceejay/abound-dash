import { useRef } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import Layout from "../../components/layouts/Dashboard";
import EmployeeDetails from "../../components/EmployeeDetails";

const Employees: NextPage = () => {
  const cartRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const hideDetails = () => {
    cartRef.current?.classList.remove("show");
    overlayRef.current?.classList.add("hide");
  };

  const showDetails = () => {
    cartRef.current?.classList.add("show");
    overlayRef.current?.classList.remove("hide");
  };

  return (
    <Layout title="Employee List">
      <div className="w-auto">
        <div className="overlay hide" ref={overlayRef}></div>
        <section
          className="bg-white block fixed top-14 right-0 max-w-md w-full h-full z-30 translate-x-full transition-transform duration-500 ease-in-out overflow-hidden shadow-employee-box"
          id="slide-cart"
          ref={cartRef}
        >
          <div className="px-8 py-6 h-full">
            <div className="cursor-pointer grid" onClick={hideDetails}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 justify-self-end"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="overflow-y-scroll h-[90%] mt-4">
              <EmployeeDetails />
            </div>
          </div>
        </section>
      </div>
      <div className="bg-white p-[18px] rounded-lg">
        <header className="flex items-center flex-wrap gap-[15px] justify-between py-[22px] border-b border-[#EFEFEF]">
          <div>
            <input
              className="appearance-none border rounded p-3 focus:outline-none h-10 w-[250px] text-sm"
              type="text"
              placeholder="Search Employees"
            />
          </div>
          <div className="flex items-center flex-wrap gap-x-[22px] gap-y-[15px]">
            <span className="text-sm font-bold">Add Employee(s)</span>
            <div className="flex items-center space-x-2.5">
              <Link href="/employees/add-single-record">
                <a className="text-[#0D70BF] text-xs px-4 py-2.5 border border-[#0D70BF] rounded-[3px] flex items-center space-x-2">
                  <div className="w-5 h-5">
                    <img
                      src="/assets/img/add-user.png"
                      alt="Wave"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm">Single Record</span>
                </a>
              </Link>
              <Link href="/employees/upload-bulk-record">
                <a className="text-[#0D70BF] text-xs px-4 py-2.5 border border-[#0D70BF] rounded-[3px] flex items-center space-x-2">
                  <div className="w-5 h-5">
                    <img
                      src="/assets/img/add-users.png"
                      alt="Wave"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm">Bulk Upload</span>
                </a>
              </Link>
            </div>
          </div>
        </header>
        <div className="overflow-x-auto scroll-overflow">
          <table className="border-collapse w-full text-xs font-normal table-fixed mt-[92px] min-w-[1000px]">
            <thead>
              <tr className="bg-[#0D70BF] text-white">
                <th className="border-0 text-left p-4">
                  <input className="mr-2" type="checkbox" />
                  <span className="text-sm mr-2">Name</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
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
                </th>
                <th className="border-0 text-left p-4">
                  <span className="text-sm mr-2">Salary Grade</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
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
                </th>
                <th className="border-0 text-left p-4">
                  <span className="text-sm mr-2">Date Added</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
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
                </th>
                <th className="border-0 text-left p-4">
                  <span className="text-sm mr-2">Monthly Bonus</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
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
                </th>
                <th className="border-0 text-left p-4">
                  <span className="text-sm mr-2">Bonus %</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
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
                </th>
                <th className="border-0 text-left p-4">
                  <span className="text-sm mr-2">Bonus Balance</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
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
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#F8F9FF]">
                <td
                  data-heading="First Name"
                  className="text-left p-4 break-words border-r-0 border-l-0 flex space-x-2"
                >
                  <input type="checkbox" />
                  <span
                    className="text-[#0D70BF] cursor-pointer font-bold"
                    onClick={() => showDetails()}
                  >
                    Aruna Michael
                  </span>
                </td>
                <td
                  data-heading="Last Name"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Junior
                </td>
                <td
                  data-heading="Company"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Oct 31, 2017
                </td>
                <td
                  data-heading="Email"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦18,900
                </td>
                <td
                  data-heading="Phone Number"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  5
                </td>
                <td
                  data-heading="Created"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦970,000
                </td>
              </tr>
              <tr className="">
                <td
                  data-heading="First Name"
                  className="text-left p-4 break-words border-r-0 border-l-0 flex space-x-2"
                >
                  <input type="checkbox" />
                  <span
                    className="text-[#0D70BF] cursor-pointer font-bold"
                    onClick={() => showDetails()}
                  >
                    Aruna Michael
                  </span>
                </td>
                <td
                  data-heading="Last Name"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Junior
                </td>
                <td
                  data-heading="Company"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Oct 31, 2017
                </td>
                <td
                  data-heading="Email"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦18,900
                </td>
                <td
                  data-heading="Phone Number"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  5
                </td>
                <td
                  data-heading="Created"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦970,000
                </td>
              </tr>
              <tr className="bg-[#F8F9FF]">
                <td
                  data-heading="First Name"
                  className="text-left p-4 break-words border-r-0 border-l-0 flex space-x-2"
                >
                  <input type="checkbox" />
                  <span
                    className="text-[#0D70BF] cursor-pointer font-bold"
                    onClick={() => showDetails()}
                  >
                    Aruna Michael
                  </span>
                </td>
                <td
                  data-heading="Last Name"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Junior
                </td>
                <td
                  data-heading="Company"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Oct 31, 2017
                </td>
                <td
                  data-heading="Email"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦18,900
                </td>
                <td
                  data-heading="Phone Number"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  5
                </td>
                <td
                  data-heading="Created"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦970,000
                </td>
              </tr>
              <tr className="">
                <td
                  data-heading="First Name"
                  className="text-left p-4 break-words border-r-0 border-l-0 flex space-x-2"
                >
                  <input type="checkbox" />
                  <span
                    className="text-[#0D70BF] cursor-pointer font-bold"
                    onClick={() => showDetails()}
                  >
                    Aruna Michael
                  </span>
                </td>
                <td
                  data-heading="Last Name"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Junior
                </td>
                <td
                  data-heading="Company"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Oct 31, 2017
                </td>
                <td
                  data-heading="Email"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦18,900
                </td>
                <td
                  data-heading="Phone Number"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  5
                </td>
                <td
                  data-heading="Created"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦970,000
                </td>
              </tr>
              <tr className="bg-[#F8F9FF]">
                <td
                  data-heading="First Name"
                  className="text-left p-4 break-words border-r-0 border-l-0 flex space-x-2"
                >
                  <input type="checkbox" />
                  <span
                    className="text-[#0D70BF] cursor-pointer font-bold"
                    onClick={() => showDetails()}
                  >
                    Aruna Michael
                  </span>
                </td>
                <td
                  data-heading="Last Name"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Junior
                </td>
                <td
                  data-heading="Company"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Oct 31, 2017
                </td>
                <td
                  data-heading="Email"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦18,900
                </td>
                <td
                  data-heading="Phone Number"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  5
                </td>
                <td
                  data-heading="Created"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦970,000
                </td>
              </tr>
              <tr className="">
                <td
                  data-heading="First Name"
                  className="text-left p-4 break-words border-r-0 border-l-0 flex space-x-2"
                >
                  <input type="checkbox" />
                  <span
                    className="text-[#0D70BF] cursor-pointer font-bold"
                    onClick={() => showDetails()}
                  >
                    Aruna Michael
                  </span>
                </td>
                <td
                  data-heading="Last Name"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Junior
                </td>
                <td
                  data-heading="Company"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Oct 31, 2017
                </td>
                <td
                  data-heading="Email"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦18,900
                </td>
                <td
                  data-heading="Phone Number"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  5
                </td>
                <td
                  data-heading="Created"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦970,000
                </td>
              </tr>
              <tr className="bg-[#F8F9FF]">
                <td
                  data-heading="First Name"
                  className="text-left p-4 break-words border-r-0 border-l-0 flex space-x-2"
                >
                  <input type="checkbox" />
                  <span
                    className="text-[#0D70BF] cursor-pointer font-bold"
                    onClick={() => showDetails()}
                  >
                    Aruna Michael
                  </span>
                </td>
                <td
                  data-heading="Last Name"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Junior
                </td>
                <td
                  data-heading="Company"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Oct 31, 2017
                </td>
                <td
                  data-heading="Email"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦18,900
                </td>
                <td
                  data-heading="Phone Number"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  5
                </td>
                <td
                  data-heading="Created"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦970,000
                </td>
              </tr>
              <tr className="">
                <td
                  data-heading="First Name"
                  className="text-left p-4 break-words border-r-0 border-l-0 flex space-x-2"
                >
                  <input type="checkbox" />
                  <span
                    className="text-[#0D70BF] cursor-pointer font-bold"
                    onClick={() => showDetails()}
                  >
                    Aruna Michael
                  </span>
                </td>
                <td
                  data-heading="Last Name"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Junior
                </td>
                <td
                  data-heading="Company"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Oct 31, 2017
                </td>
                <td
                  data-heading="Email"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦18,900
                </td>
                <td
                  data-heading="Phone Number"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  5
                </td>
                <td
                  data-heading="Created"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦970,000
                </td>
              </tr>
              <tr className="bg-[#F8F9FF]">
                <td
                  data-heading="First Name"
                  className="text-left p-4 break-words border-r-0 border-l-0 flex space-x-2"
                >
                  <input type="checkbox" />
                  <span
                    className="text-[#0D70BF] cursor-pointer font-bold"
                    onClick={() => showDetails()}
                  >
                    Aruna Michael
                  </span>
                </td>
                <td
                  data-heading="Last Name"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Junior
                </td>
                <td
                  data-heading="Company"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Oct 31, 2017
                </td>
                <td
                  data-heading="Email"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦18,900
                </td>
                <td
                  data-heading="Phone Number"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  5
                </td>
                <td
                  data-heading="Created"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦970,000
                </td>
              </tr>
              <tr className="">
                <td
                  data-heading="First Name"
                  className="text-left p-4 break-words border-r-0 border-l-0 flex space-x-2"
                >
                  <input type="checkbox" />
                  <span
                    className="text-[#0D70BF] cursor-pointer font-bold"
                    onClick={() => showDetails()}
                  >
                    Aruna Michael
                  </span>
                </td>
                <td
                  data-heading="Last Name"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Junior
                </td>
                <td
                  data-heading="Company"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Oct 31, 2017
                </td>
                <td
                  data-heading="Email"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦18,900
                </td>
                <td
                  data-heading="Phone Number"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  5
                </td>
                <td
                  data-heading="Created"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦970,000
                </td>
              </tr>
              <tr className="bg-[#F8F9FF]">
                <td
                  data-heading="First Name"
                  className="text-left p-4 break-words border-r-0 border-l-0 flex space-x-2"
                >
                  <input type="checkbox" />
                  <span
                    className="text-[#0D70BF] cursor-pointer font-bold"
                    onClick={() => showDetails()}
                  >
                    Aruna Michael
                  </span>
                </td>
                <td
                  data-heading="Last Name"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Junior
                </td>
                <td
                  data-heading="Company"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Oct 31, 2017
                </td>
                <td
                  data-heading="Email"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦18,900
                </td>
                <td
                  data-heading="Phone Number"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  5
                </td>
                <td
                  data-heading="Created"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦970,000
                </td>
              </tr>
              <tr className="">
                <td
                  data-heading="First Name"
                  className="text-left p-4 break-words border-r-0 border-l-0 flex space-x-2"
                >
                  <input type="checkbox" />
                  <span
                    className="text-[#0D70BF] cursor-pointer font-bold"
                    onClick={() => showDetails()}
                  >
                    Aruna Michael
                  </span>
                </td>
                <td
                  data-heading="Last Name"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Junior
                </td>
                <td
                  data-heading="Company"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  Oct 31, 2017
                </td>
                <td
                  data-heading="Email"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦18,900
                </td>
                <td
                  data-heading="Phone Number"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  5
                </td>
                <td
                  data-heading="Created"
                  className="text-left p-4 break-words border-r-0 border-l-0"
                >
                  ₦970,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Employees;
