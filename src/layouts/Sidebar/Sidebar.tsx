import { Popover } from "antd";
import { BiSolidLock } from "react-icons/bi";

import Button from "../../components/Button";
import ModalLogin from "../../components/ModalLogin";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

interface TPropsPopOver {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setOpenPopOver: Dispatch<SetStateAction<boolean>>;
  setPath: Dispatch<SetStateAction<string>>;
}

export const ContentPopOver = (props: TPropsPopOver) => {
  const { setOpenModal, setOpenPopOver,setPath } = props;
  const [onHover, setOnHover] = useState(false);
  const [keyHover, setKeyHover] = useState(0);

  const buttonPopOver = [
    {
      key: 1,
      text: "Stock Barang",
      path: "/stock-barang",
    },
    {
      key: 2,
      text: "Stock Masuk",
      path: "/stock-masuk",
    },
    {
      key: 3,
      text: "Stock Keluar",
      path: "/stock-keluar",
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      {buttonPopOver.map((el) => (
        <Button
          onMouseOver={() => {
            setOnHover(true);
            setKeyHover(el.key);
          }}
          onMouseLeave={() => setOnHover(false)}
          type="primary"
          onClick={() => {
            setOpenPopOver(false);
            setOpenModal(true);
            setPath(el.path)
          }}
          className="hover:bg-[#0466C8] w-[150px] bg-white text-black justify-between gap-2 hover:text-white flex items-center"
        >
          {el.text}
          {onHover && keyHover == el.key && <BiSolidLock />}
        </Button>
      ))}
    </div>
  );
};

const Sidebar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openPopOver, setOpenPopOver] = useState(false);
  const [path, setPath] = useState("");

  const navigate = useNavigate()

  return (
    <div className="bg-white h-screen fixed px-6 shadow-[0px_10px_20px_-10px_black] flex flex-col justify-between py-[20px] z-[3]">
      <ModalLogin openModal={openModal} setOpenModal={setOpenModal} path={path}/>
      <img src="/logo/logo.png" alt="logo" width={45} onClick={()=>navigate("/")} className="cursor-pointer"/>
      <div className="flex flex-col gap-6">
        <Popover
          open={openPopOver}
          placement="rightTop"
          content={
            <ContentPopOver
              setOpenModal={setOpenModal}
              setOpenPopOver={setOpenPopOver}
              setPath={setPath}
            />
          }
          trigger="click"
        >
          <img
            src="/icons/Persentase.png"
            alt="logo"
            width={45}
            className="cursor-pointer"
            onClick={() => setOpenPopOver(!openPopOver)}
          />
        </Popover>
        <img
          src="/icons/Box.png"
          alt="logo"
          width={45}
          className="cursor-pointer"
        />
      </div>
      <img
        src="/icons/Logout.png"
        alt="logo"
        width={45}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Sidebar;
