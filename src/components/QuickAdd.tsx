import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlinePlus } from "react-icons/ai";
import { Modal, Popconfirm, Row } from "antd";

import Button from "./Button";
import Text from "./text";
import Input from "./Input";
import InputSelect from "./InputSelect";
import InputDate from "./InputDate";
import TableForm from "./TableForm";

interface DataType {
  key: React.Key;
  nama_barang: string;
  quantity: string;
}

interface TProps {
label:string;
data?:any;
setData?:any;
}


const QuickAdd = ({label,setData,data}:TProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [kode, setKode] = useState("");
  const [supplier, setSupplier] = useState("");
  const [jadwal, setJadwal] = useState("");

  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: count,
      nama_barang: "Nama Barang",
      quantity: "Quantity",
    },
  ]);

  const openModal = () => {
    setModalOpen(true);
  };

  const handleAdd = () => {
    const newData: DataType = {
      key: count,
      nama_barang: "Nama Barang",
      quantity: "Quantity",
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleSave =()=>{
    let newData ={
      key:Math.random()*1000,
      kode:kode,
      nama_barang: dataSource[0].nama_barang,
      supplier:supplier,
      quantity:dataSource[0].quantity,
      tanggal:jadwal,

    }
    console.log(newData);
setData([...data,newData])

    setModalOpen(false)
  }

  return (
    <Row id="container-quickAdd">
      <Button
        onClick={openModal}
        className="text-white text-2xl gap-1 flex items-center"
      >
        <AiOutlinePlusCircle /> <Text className="text-white">{label}</Text>
      </Button>

      <Modal
        title={
          <Text className="text-[#195A89] text-[25px] font-[600]">
            Stock Masuk
          </Text>
        }
        style={{ top: 20 }}
        width={700}
        centered
        open={modalOpen}
        okText={
          <Popconfirm
            title="Sure to save?"
            onConfirm={handleSave}
            className="w-full"
          >
            Submit
          </Popconfirm>
        }
        cancelText={
          <Popconfirm
            title="Sure to cancel?"
            onConfirm={() => {
              setModalOpen(false);
              setDataSource([]);
            }}
            className="w-full"
          >
            Cancel
          </Popconfirm>
        }
      >
        <div className="mt-6">
          <div className="flex items-center h-[40px] gap-4 justify-between">
            <Input.Default
              type="number"
              placeHolder="Kode"
              className="h-full py-[8px] px-[13px] w-[120px] text-[16px]"
              onChange={setKode}
            />
            <InputSelect onChange={setSupplier}/>
            <InputDate onChange={setJadwal}/>
            <Button
              onClick={handleAdd}
              className="px-[10px] py-0 h-full flex  items-center font-bold text-white text-2xl"
            >
              <AiOutlinePlus />
            </Button>
          </div>
          <TableForm
            count={count}
            setCount={setCount}
            dataSource={dataSource}
            setDataSource={setDataSource}
          />
        </div>
      </Modal>
    </Row>
  );
};

export default QuickAdd;
