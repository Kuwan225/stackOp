import { FiSearch } from "react-icons/fi";
import {Input} from "antd"

interface TProps {
  placeHolder?: string;
  className?: string;
  type:string
  onChange?:any
}
const Default = (props: TProps) => {
  const { placeHolder, className,type,onChange } = props;
  return (
    <Input
      type={type}
      placeholder={placeHolder}
      className={`outline-none border-[1px] border-[#0466C8CC] rounded-[8px] text-[#0466C8CC] ${className} placeholder-[#0466C8CC]`}
      // style={{ color: "#0466C8CC" }}
      onChange={(e)=>onChange(e.target.value)}
    />
  );
};

const Search = (props: TProps) => {
  const {  className } = props;
  return (
    <div style={{border:"1px solid #0466C8CC"}} className="overflow-hidden px-4 text-[#0466C8CC] rounded-full flex items-center">
      <input
        type="text"
        placeholder={"Search..."}
        className={`outline-none border-none ${className} placeholder-[#195A8980]`}
        style={{ color: "#195A8980" }}
      />
      <div className="text-lg flex items-center text-[#195A8980]">
      <FiSearch />
      </div>
    </div>
  );
};

export default { Default, Search };
