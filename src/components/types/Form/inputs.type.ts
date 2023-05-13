import { InputProps as OtherProps } from "antd";

export interface InputProps extends OtherProps {
    islabel?: boolean
    labeltext?: string
    errormsg?: string | false | undefined | boolean
}