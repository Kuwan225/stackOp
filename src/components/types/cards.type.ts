import { ReactNode } from "react";
import { CardProps as AntdCardProps } from 'antd'
import { To } from "react-router-dom";

export interface CardProps extends AntdCardProps {
    children?: ReactNode;
    src?: string
    author?: string
    novelTitle?: string
    price?: number
    linkTo: To
}