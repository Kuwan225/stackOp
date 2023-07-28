import { Button } from 'antd'
import { ReactNode } from 'react'


interface TProps{
  children : ReactNode
  className? : string
  type? : "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined
  onClick?: (React.MouseEventHandler<HTMLAnchorElement> & React.MouseEventHandler<HTMLButtonElement>) | undefined
  onMouseOver?:(React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> & React.MouseEventHandler<HTMLButtonElement>) | undefined
  onMouseLeave?:(React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> & React.MouseEventHandler<HTMLButtonElement>) | undefined
}
const Primary = ({children,className,onClick,type,onMouseOver,onMouseLeave}:TProps) => {
  return (
    <Button onMouseOver={onMouseOver} onMouseOut={onMouseLeave} onClick={onClick} type={type||"primary"} className={`h-full ${className} `}>{children}</Button>
  )
}

export default Primary