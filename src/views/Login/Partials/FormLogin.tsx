import { Link } from "react-router-dom";
import Input from "../../../components/Input";
import Text from "../../../components/text";
import Button from "../../../components/Button";

const FormLogin = () => {
  return (
    <div className="w-[570px] bg-white shadow-[0_4px_35px_#195a892b] flex flex-col gap-6 pt-10 px-10 rounded-[6px] pb-[60px]">
      <div className="logo flex items-center font-bold gap-6">
        <img src="./public/logo/logo.png" width={51}/>
        <Text className="text-[#195A89] font-[Montserrat] text-[20px]" style={{letterSpacing:"10px"}}>STACKO</Text>
      </div>
      <Text className="text-[#195A89] font-[Montserrat] font-bold text-[32px]">Welcome</Text>
      <form className="flex flex-col gap-6">
        <Input showLabel label="Username" placeHolder="Username"/>
        <Input showLabel label="Password" placeHolder="Password"/>
        <Link to={"forgot_password"} className="no-underline"><Text className="text-right block text-[18px] font-[600]">Forgot Password!</Text></Link>
        <Button/>
      </form>
    </div>
  );
};

export default FormLogin;

