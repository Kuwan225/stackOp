import moment from "moment";
import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineLogin } from "react-icons/ai";
import Text from "../../../components/text";
import Button from "../../../components/Button";
import { DatePicker, DatePickerProps } from "antd";
import { useState } from "react";

const ContentCarousel = (props: any) => {

  const month = new Date().getMonth()
  const  year= new Date().getFullYear()
  

const [date,setDate] = useState(`${year}-${month}`)

  const changeDate: DatePickerProps['onChange'] = (date, dateString) => {
    // const dated = moment(dateString).format("LLL")
    // console.log(dateString)
    setDate(dateString)

  }
  return (
    <div className="relative overflow-hidden flex flex-col items-center bg-white rounded-xl shadow-[0_0_20px_-14px_black] py-[25px] pb-[100px] px-8">
      <div className="absolute top-0 right-0 bg-[#195A89] px-8 py-1 rounded-bl-2xl">
        <Text className="text-white text-md font-semibold">
          {props.data.persentase}%
        </Text>
      </div>

      <img
        src="/img/Graph.png"
        alt="persentase"
        className="absolute bottom-[35px] right-0"
        width={"80%"}
      />

      <Text className="font-semibold text-[20px] text-[#195A89]">
        {props.data.title}
      </Text>

      <div className="relative flex items-center w-full mt-[30px]">
        <div className="text-[#4F8524] text-[75px] flex items-center justify-center absolute left-0">
          <AiOutlineLogin />
        </div>

        <Text className="text-[30px] text-center w-full text-[#195A89]">
          <span className="font-bold">{props.data.items}</span> Item
        </Text>
      </div>

      <div className="absolute bottom-0 bg-[#195A89] w-full h-[40px]">
        <Button className="flex justify-center rounded-none items-center  w-full bg-[#195A89]">
          <Text className="text-white text-[17px] font-[400]">{date}</Text>
          <div className="text-white absolute right-[40px] text-[18px]">
            <BiSolidDownArrow />
          </div>
        </Button>
        <DatePicker
        onChange={changeDate}
          picker="month"
          className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ContentCarousel;
