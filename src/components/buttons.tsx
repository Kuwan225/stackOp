import { Button as AntBtn, Badge } from "antd";
import { ButtonProps } from "./types/buttons.type";
import Image from "./image";
import Text from "./text";

export const PrimaryBtn = (props: ButtonProps) => {
  const { children } = props;
  return (
    <AntBtn
      type="primary"
      htmlType="submit"
      className="btn-primary bg-primary border-none font-medium text-white w-full"
      {...props}
    >
      {children}
    </AntBtn>
  );
};

export const SecondaryBtn = (props: ButtonProps) => {
  const { children, className, icon } = props;
  return (
    <Text
      className={`flex justify-start items-center ${className} text-[16px]`}
    >
      {icon && (
        <Image
          src={icon as string}
          width={"20px"}
          className="relative top-[-2px]"
        />
      )}
      {children}
    </Text>
  );
};

export const IconBtn = (props: ButtonProps) => {
  const { icon, width, count } = props;
  return (
    <Badge showZero count={count}>
      <AntBtn
        type="text"
        {...props}
        icon={<Image src={icon as string} width={width} />}
      />
    </Badge>
  );
};
