import type { NextPage } from "next";

import Layout from "../../components/layouts/Dashboard";

const AddSingleRecord: NextPage = () => {
  return (
    <Layout title="Add Employee">
      <div className="bg-white p-[18px] rounded-lg">
        <form className="xl:w-3/5 md:w-4/5 m-auto my-28">
          <div>
            <span className="text-base font-bold border-b border-[#EFEFEF] block mb-6 py-[6px]">
              Biodata
            </span>
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-xs mb-[3px] font-gordita-light">
                  First name
                </label>
                <input
                  className="appearance-none text-sm block w-full border focus:outline-none rounded py-2 h-10 px-4 mb-3"
                  type="text"
                />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-xs font-bold mb-[3px] font-gordita-light">
                  Last name
                </label>
                <input
                  className="appearance-none text-sm block w-full border focus:outline-none rounded py-2 h-10 px-4 mb-3"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-xs mb-[3px] font-gordita-light">
                  Email
                </label>
                <input
                  className="appearance-none text-sm block w-full border focus:outline-none rounded py-2 h-10 px-4 mb-3"
                  type="text"
                />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-xs font-bold mb-[3px] font-gordita-light">
                  Phone
                </label>
                <input
                  className="appearance-none text-sm block w-full border focus:outline-none rounded py-2 h-10 px-4 mb-3"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <span className="text-base font-bold border-b border-[#EFEFEF] block mb-6 py-[6px]">
              Employment Details
            </span>
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-xs mb-[3px] font-gordita-light">
                  Employee ID
                </label>
                <input
                  className="appearance-none text-sm block w-full border focus:outline-none rounded py-2 h-10 px-4 mb-3"
                  type="text"
                />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-xs mb-[3px] font-gordita-light">
                  Employment Date
                </label>
                <input
                  className="appearance-none text-sm block w-full border focus:outline-none rounded py-2 h-10 px-4 mb-3"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-xs mb-[3px] font-gordita-light">
                  Level
                </label>
                <input
                  className="appearance-none text-sm block w-full border focus:outline-none rounded py-2 h-10 px-4 mb-3"
                  type="text"
                />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-xs font-bold mb-[3px] font-gordita-light">
                  Status
                </label>
                <input
                  className="appearance-none text-sm block w-full border focus:outline-none rounded py-2 h-10 px-4 mb-3"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-xs mb-[3px] font-gordita-light">
                  Net Monthly Pay
                </label>
                <input
                  className="appearance-none text-sm block w-full border focus:outline-none rounded py-2 h-10 px-4 mb-3"
                  type="text"
                />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-xs font-bold mb-[3px] font-gordita-light">
                  Salary Percentage for Benefits
                </label>
                <input
                  className="appearance-none text-sm block w-full border focus:outline-none rounded py-2 h-10 px-4 mb-3"
                  type="text"
                />
              </div>
            </div>
          </div>
          <button
            className="bg-[#1379C6] focus:outline-none text-white text-sm py-3.5 px-5 rounded mt-6"
            type="button"
          >
            Save Employee Record
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddSingleRecord;
