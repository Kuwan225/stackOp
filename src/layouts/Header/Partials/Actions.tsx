import Container from "../../../components/container";
import { IconBtn, SecondaryBtn } from "../../../components/buttons";
import LoveIcon from "/public/icons/Love.png";
import Cart from "/public/icons/Cart.png";
import { Dropdown, MenuProps } from "antd";
import ProfileIcon from "/public/icons/ProfileIcon.png";
import LoveSecondary from "/public/icons/LoveSecondary.png";
import LogoutIcon from "/public/icons/Logout.png";

const Actions = () => {
  const items: MenuProps["items"] = [
    {
      label: (
        <SecondaryBtn
          className="font-semibold text-black gap-[10px]"
          icon={ProfileIcon}
        >
          Profile
        </SecondaryBtn>
      ),
      key: "0",
    },
    {
      label: (
        <SecondaryBtn
          className="font-semibold text-black gap-[10px]"
          icon={LoveSecondary}
        >
          My List
        </SecondaryBtn>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <SecondaryBtn
          className="font-semibold text-[#CB0000] gap-[10px]"
          icon={LogoutIcon}
        >
          Logout
        </SecondaryBtn>
      ),
      key: "3",
    },
  ];
  return (
    <Container className="shadow-none flex gap-[33px] justify-end">
      <IconBtn icon={LoveIcon} width="25px" />
      <IconBtn count={5} icon={Cart} width="25px" />
      <Dropdown menu={{ items }}>
        <IconBtn icon={LoveIcon} width="25px" />
      </Dropdown>
    </Container>
  );
};

export default Actions;
