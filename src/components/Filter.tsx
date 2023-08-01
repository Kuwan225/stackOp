import { Fragment, useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { IoRefreshCircleSharp } from "react-icons/io5";

import Button from "./Button";
import Text from "./text";
import { Modal } from "antd";
import Input from "./Input";
import InputSelect from "./InputSelect";
import InputDate from "./InputDate";

const Filter = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  return (
    <Fragment>
      <Button
      type={"default"}
        onClick={openModal}
        className=" text-[#195A89] flex items-center gap-2 text-2xl bg-[#198DE359]"
      >
        <HiOutlineFilter /> <Text className="text-[#195A89]">Filters</Text>{" "}
        <IoRefreshCircleSharp />
      </Button>

      <Modal
        title={
          <Text className="text-[#195A89] text-[25px] font-[600]">
            Filter By
          </Text>
        }
        style={{ top: 20 }}
        width={500}
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        okText="Confirm"
        cancelText="Reset"
      >
        <div className="flex justify-between gap-8">
          <div className="w-full flex flex-col gap-4">
            <Input.Default
            type="number"
              placeHolder="Kode"
              className="h-[40px] py-[8px] px-[13px] w-full text-[16px]"
            />
            <InputSelect onChange={""} />
            <InputSelect onChange={""} />
          </div>
          <div className="w-full flex flex-col gap-4">
            <Input.Default placeHolder="Quantity" 
            type="text"
              className="h-[40px] py-[8px] px-[13px] w-full text-[16px]"
              />
            <InputDate onChange={""} />
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Filter;
