import { Layout } from "antd";
import { ContainerProps } from "./types/container.type";

const Container = ({ children, className }: ContainerProps) => {
  const { Content } = Layout;

  return (
    <Content
      className={`rounded-md shadow-md m-[5px] p-[5px] text-center ${className}`}
    >
      {children}
    </Content>
  );
};

export default Container;
