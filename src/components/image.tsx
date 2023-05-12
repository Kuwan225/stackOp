import { ImageProps as OtherProps } from "antd";
import { Image as AntImg } from "antd";

const Image = (props: OtherProps) => {
  return (
    <div>
      <AntImg preview={false} {...props} />
    </div>
  );
};

export default Image;
