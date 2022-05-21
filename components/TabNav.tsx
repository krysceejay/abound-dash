import {ReactNode, FC} from "react"

interface Props {
    tabs: string[]
    selected: string
    setSelected: (tab: string) => void
    children: ReactNode
}

const TabNav: FC<Props> = ({tabs, selected, setSelected, children}) => {
    return (
        <div className="w-full">
            <ul className="flex items-center bg-tab-color rounded-md text-xs font-bold">
                {
                    tabs.map((tab, ind) => {
                        const active = (tab === selected ? 'border-[#1379C6] border-b-2' : 'border-[#EFEFEF] border-b')
                        return (
                            <li 
                            className={`py-2.5 flex-1 text-center cursor-pointer ${active}`} 
                            key={ind} 
                            onClick={ () => setSelected(tab) }>
                                { tab }
                            </li>
                        )
                    })
                }
            </ul>
            <div className="mt-7">
            {children}
            </div>
        </div>
    )
}

export default TabNav