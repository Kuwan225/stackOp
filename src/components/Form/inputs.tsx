import { InputProps } from "../types/Form/inputs.type";
import { Input } from "antd";

export const DefaultInput = (props: InputProps) => {
  const { placeholder, islabel, labeltext, errormsg } = props;
  return (
    <>
      {islabel ? (
        <div className="text-start">
          <label
            className={`relative bottom-1 w-[100px] ${
              errormsg && "text-red-500"
            }`}
            htmlFor={labeltext?.toLowerCase()}
          >
            {errormsg ? errormsg : labeltext}
          </label>
          <Input
            className={`${errormsg && "border-red-300"}`}
            name={labeltext?.toLowerCase()}
            {...props}
          />
        </div>
      ) : (
        <Input placeholder={placeholder} {...props} />
      )}
    </>
  );
};

export const InputSearch = (props: InputProps) => {
  return (
    <>
      <Input {...props} />
    </>
  );
};
