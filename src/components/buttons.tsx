import { Button as AntBtn } from "antd";
import { ButtonProps } from "./types/buttons.type";

export const BtnSubmit = (props: ButtonProps) => {
  const { children } = props;
  return (
    <AntBtn
      type="primary"
      htmlType="submit"
      className="btn-primary bg-[#7F5539] border-none font-medium text-white w-full"
      {...props}
    >
      {children}
    </AntBtn>
  );
};
