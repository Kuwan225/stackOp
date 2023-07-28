import { Typography } from "antd";
import { TextProps } from "./types/text.type";

const Text = (props: TextProps) => {
const { children, className,style } = props

  const { Text } = Typography;
  return <Text className={`font-Montserrat ${className!}`} style={style}>{children}</Text>;
}

export default Text
