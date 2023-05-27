import { ButtonProps as OtherProps} from "antd"
import  { ReactNode } from "react"

export interface ButtonProps extends OtherProps {
    icon?: ReactNode | string
    width?: string
    withbadge?: "true" | "false"
    count?: number
}