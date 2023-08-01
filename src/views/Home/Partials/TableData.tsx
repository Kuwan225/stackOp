import { BiSolidDownArrow } from "react-icons/bi";
import { GoKebabHorizontal } from "react-icons/go";
import { Popover, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import Text from "../../../components/text";
import Input from "../../../components/Input";
import QuickAdd from "../../../components/QuickAdd";
import Filter from "../../../components/Filter";
import Button from "../../../components/Button";
import { ReactNode, useState } from "react";
import Pagination from "../../../components/Pagination";

export const NamaBarang = () => {
  return (
    <div className="flex items-center gap-4">
      <span>Basreng</span>
      <Popover
        trigger={"hover"}
        title="Nama Barang"
        placement="bottomRight"
        content="coba"
        className="cursor-pointer"
      >
        <GoKebabHorizontal />
      </Popover>
    </div>
  );
};

interface DataType {
  key: React.Key;
  kode: number;
  nama_barang: ReactNode;
  supplier: string;
  quantity: number;
  tanggal: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Kode",
    dataIndex: "kode",
  },
  {
    title: "Nama Barang",
    dataIndex: "nama_barang",
  },
  {
    title: "Supplier",
    dataIndex: "supplier",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  },
  {
    title: "Tanggal",
    dataIndex: "tanggal",
  },
];

const data: DataType[] = [
  {
    key: "1",
    kode: 5643,
    nama_barang: <NamaBarang />,
    supplier: "Marwan",
    quantity: 15,
    tanggal: "2023/18/juli",
  },
  {
    key: "2",
    kode: 5643,
    nama_barang: "Basreng",
    supplier: "Marwan",
    quantity: 15,
    tanggal: "2023/18/juli",
  },
];

const TableData = () => {
  const [showTable, setShowTable] = useState(false);
  return (
    <div className={`w-full bg-white shadow-xl p-6 mt-6 rounded-[20px]`}>
      {/* Table Header */}
      <div className="flex justify-between w-full">
        <div
          className="text-[#195A89] flex gap-6 items-center cursor-pointer text-xl"
          onClick={() => setShowTable(!showTable)}
        >
          <Text className="font-semibold text-[24px] text-[#195A89]">
            Stock Masuk
          </Text>
          <BiSolidDownArrow />
        </div>
        <div className="flex gap-10">
          <QuickAdd label="Quick Add" />
          <Filter />
          <Input.Search className="w-full" type="text" />
        </div>
      </div>
      {/* End Table Header */}

      {/* Table Data */}
      <div className="mt-10" id="container-table">
        <Table
          columns={columns}
          dataSource={data}
          size="small"
          pagination={false}
        />
      </div>

      {/* End Table Data */}

      {/* Pagination */}
      <div className="pt-4 pl-4 flex justify-between items-center">
        <Pagination data={data} />
        <Button type="default" className="border-none ">
          <Text className="text-[#195A89] text-[19px]">Detail</Text>
        </Button>
      </div>
      {/* End Pagination */}
    </div>
  );
};

export default TableData;
