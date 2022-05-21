import {useState} from 'react'

import TabNav from './TabNav'
import Tab from './Tab'

const EmployeeDetails = () => {
    const [tab, setTab] = useState('Employment Details')
    const [isDeactivated, setDeActivateBtn] = useState(false)

    const setSelected = (t: string) => {
        setTab(t)
    }

    const handleSwitch = () => {
        setDeActivateBtn(prev => !prev)
    }

  return (
    <section>
        <div className="py-5 border border-[#EFEFEF] rounded">
            <div className="flex items-center space-x-2 px-3 pb-7 border-b border-[#EFEFEF]">
                <div className="h-10 w-10 bg-white rounded-full">
                    <img src="/assets/img/employee.png" alt="Company Logo" className="w-full h-full object-cover"  />
                </div>
                <div>
                    <div>
                        <span className="text-sm leading-4 font-gordita-medium">Aruna Michael</span>
                        <span className="text-[10px] leading-[13px] text-[#888888] ml-2">CV39302</span>
                    </div>
                    <div className="text-[10px] leading-[13px] text-[#888888]">Registered on Mar 4, 2019</div>
                </div>
            </div>
            <div className="flex items-center space-x-2 mx-[18px] py-5 border-b border-[#EFEFEF]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs">kelechi.aaron@crowdyvest.com</span>
            </div>
            <div className="flex items-center space-x-2 mx-[18px] py-5 border-b border-[#EFEFEF]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xs">+2348097687654</span>
                <div className="bg-[#1379C6] rounded-full p-1 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white flex-none" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                </div>
            </div>
            <div className="flex space-x-2 mx-[18px] pt-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs">4th Floor, Grand Square Towers, Central Business District. Abuja, Nigeria</span>
            </div>
        </div>
        <div className="mt-5">
            <TabNav tabs={["Employment Details", "Bank Details", "Next-of-Kin"]} selected={tab} setSelected={setSelected}>
                <Tab isSelected={tab === "Employment Details"}>
                    <div className="py-1 px-7 border border-[#EFEFEF] rounded">
                        <div className="flex items-center border-b border-[#EFEFEF] pb-4">
                            <div className="flex-1">
                                <div className="text-[10px] font-gordita-light">Level</div>
                                <div className="text-xs">Senior</div>
                            </div>
                            <div className="flex-1">
                                <div className="text-[10px] font-gordita-light">Status</div>
                                <div className="text-xs">Fulltime</div>
                            </div>
                        </div>
                        <div className="border-b border-[#EFEFEF] py-4">
                            <div className="text-[10px] font-gordita-light">Employment Date</div>
                            <div className="text-xs">Mar. 21st, 2022</div>
                        </div>
                        <div className="border-b border-[#EFEFEF] py-4">
                            <div className="text-[10px] font-gordita-light">Net Salary</div>
                            <div className="text-xs">General IT Services</div>
                        </div>
                        <div className="py-4">
                            <div className="text-[10px] font-gordita-light">Salary Percentage for Benefits</div>
                            <div className="text-xs">2%</div>
                        </div>
                    </div>
                </Tab>
                <Tab isSelected={tab === "Bank Details"}>
                    <div className="py-1 px-7 border border-[#EFEFEF] rounded">
                        <div className="border-b border-[#EFEFEF] py-4">
                            <div className="text-[10px] font-gordita-light">Bank Account Number</div>
                            <div className="text-xs">2345678906</div>
                        </div>
                        <div className="py-4">
                            <div className="text-[10px] font-gordita-light">Bank Name</div>
                            <div className="text-xs">Aminu Garba</div>
                        </div>
                    </div>
                </Tab>
                <Tab isSelected={tab === "Next-of-Kin"}>
                    <div className="py-1 px-7 border border-[#EFEFEF] rounded">
                        <div className="border-b border-[#EFEFEF] py-4">
                            <div className="text-[10px] font-gordita-light">Full Name</div>
                            <div className="text-xs">Dennis Emma</div>
                        </div>
                        <div className="border-b border-[#EFEFEF] py-4">
                            <div className="text-[10px] font-gordita-light">Relationship</div>
                            <div className="text-xs">Brother</div>
                        </div>
                        <div className="border-b border-[#EFEFEF] py-4">
                            <div className="text-[10px] font-gordita-light">Phone</div>
                            <div className="text-xs">+2346545677890</div>
                        </div>
                        <div className="py-4">
                            <div className="text-[10px] font-gordita-light">Email</div>
                            <div className="text-xs">dennisemma@gmail.com</div>
                        </div>
                    </div>
                </Tab>
            </TabNav>
        </div>
        <div className="border-b border-[#EFEFEF] mt-8" />
        <div className="p-6 border border-[#EFEFEF] rounded flex items-center justify-between my-8">
            <span className="text-xs">Deactivate Employee</span>
            <div className="w-[32px] h-[20px] cursor-pointer" onClick={handleSwitch}>
                {isDeactivated ? 
                <img src="/assets/img/on-button.png" alt="Switch On" className="w-full h-full object-cover" /> :
                <img src="/assets/img/off-button.png" alt="Switch Off" className="w-full h-full object-cover" /> }
            </div>
        </div>
    </section>
  )
}

export default EmployeeDetails