import { Card, Divider, Space } from "antd";
import { CardProps } from "./types/cards.type";
import Image from "./image";
import Text from "./text";
import { Link } from "react-router-dom";

export const NovelCard = (props: CardProps) => {
  const { src, novelTitle, author, price, linkTo } = props;
  return (
    <Link to={linkTo}>
      <Card hoverable bordered={false} {...props} className="rounded-[20px]">
        <Space direction="vertical" size={"small"}>
          <Image src={src} width={"220px"} />
          <div className="flex flex-col m-0">
            <Text className="font-bold text-[20px]">
              {novelTitle || "Alsterlake"}
            </Text>
            <Divider className="bg-[#B08968] opacity-[50%] m-[0px] p-0 w-[50%]" />
            <Text className="font-light text-[13px]">
              {author || "Auryn Vientania"}
            </Text>
            <Text className="text-[#71492E] font-semibold text-[13px] mt-[5px]">
              {`Rp.${price || "100.000"}`}
            </Text>
          </div>
        </Space>
      </Card>
    </Link>
  );
};
