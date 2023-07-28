import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Text from "./text";
import Input from "./Input";
import QuickAdd from "./QuickAdd";
import Filter from "./Filter";
import { TbFileExport } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidPencil } from "react-icons/bi";
import { AiOutlineDownload } from "react-icons/ai";
import { useLocation } from "react-router-dom";

interface DataType {
  key: React.Key;
  kode: number;
  nama_barang: string;
  supplier: string;
  quantity: string;
  tanggal: string;
}

const TableStock: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [data, setData] = useState<DataType[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const params = useLocation();

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
    {
      title: "Action",
      dataIndex: "Action",
      render: (_, record) =>
        data.length >= 1 ? (
          <div className="text-center">
            <BiSolidPencil />
          </div>
        ) : null,
    },
  ];

  const handleDelete = () => {
    const filter = data.filter((e) => {
  return e.key != selectedRowKeys[1]
    });
    setData(filter);
  };

  return (
    <div className={`w-full bg-white shadow-xl p-6 rounded-[20px]`}>
      <Text className="font-bold text-[24px] text-[#195A89]">
        {params.pathname == "/stock-masuk" ? "Stock Masuk": params.pathname == "/stock-barang"?"Stock Barang": "Stock Keluar"}
      </Text>
      <div className="flex justify-between mt-8">
        <Input.Search type="text" />
        <div className="flex gap-4">
          <Button
            disabled={selectedRowKeys.length <= 0 ? true : false}
            type="primary"
            onClick={() => {}}
            className="text-white text-2xl gap-1 flex items-center h-full"
          >
            <AiOutlineDownload />{" "}
            <Text
              className={`${
                selectedRowKeys.length <= 0 ? "text-gray-400" : "text-white"
              }`}
            >
              {selectedRowKeys.length == data.length
                ? "Download All"
                : "Download"}
            </Text>
          </Button>

          <Button
            disabled={selectedRowKeys.length <= 0 ? true : false}
            type="primary"
            onClick={() => {}}
            className="text-white text-2xl gap-1 flex items-center h-full"
          >
            <TbFileExport />{" "}
            <Text
              className={`${
                selectedRowKeys.length <= 0 ? "text-gray-400" : "text-white"
              }`}
            >
              {selectedRowKeys.length == data.length ? "Export All" : "Export"}
            </Text>
          </Button>

          <Button
            disabled={selectedRowKeys.length <= 0 ? true : false}
            type="primary"
            onClick={handleDelete}
            className={`text-2xl gap-1 flex items-center h-full`}
          >
            <RiDeleteBin6Line />{" "}
            <Text
              className={`${
                selectedRowKeys.length <= 0 ? "text-gray-400" : "text-white"
              }`}
            >
              {selectedRowKeys.length == data.length ? "Delete All" : "Delete"}
            </Text>
          </Button>

          <QuickAdd label="New Stock" setData={setData} data={data} />
          <Filter />
        </div>
      </div>
      <div id="container-table" className="mt-8">
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default TableStock;
