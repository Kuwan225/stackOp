import { CSSProperties, ReactNode }  from 'react'

export interface TextProps {
    children: ReactNode
    className?: string 
    style?:CSSProperties
}