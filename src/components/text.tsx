import { Typography } from "antd";
import { TextProps } from "./types/text.type";

export default function Text({ children, className }: TextProps) {
  const { Text } = Typography;
  return <Text className={`text-primary ${className!}`}>{children}</Text>;
}
