import { ImageProps as OtherProps } from "antd";
import { Image as AntImg } from "antd";

const Image = (props: OtherProps) => {
  return (
    <AntImg
      preview={false}
      {...props}
      className={`shadow-none ${props.className}`}
    />
  );
};

export default Image;
