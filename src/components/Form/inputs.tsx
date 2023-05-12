import { InputProps } from "../types/Form/inputs.type";
import { Input } from "antd";

export const DefaultInput = (props: InputProps) => {
  const { placeholder, label, labelText } = props;
  if (label) {
    return (
      <>
        <div className="text-start">
          <label
            className="relative bottom-1"
            htmlFor={labelText?.toLowerCase()}
          >
            {labelText}
          </label>
          <Input name={labelText?.toLowerCase()} {...props} />
        </div>
      </>
    );
  }
  return <Input placeholder={placeholder} {...props} />;
};
