import {ReactNode, FC} from "react"

interface Props {
    isSelected: boolean
    children: ReactNode
}

const Tab: FC<Props> = ({isSelected, children}) => {
    return (
        <div>
            {isSelected && <div>{children}</div>}
        </div>
    )
}

export default Tab