import FormLogin from "./partials/FormLogin";
import LeftContent from "./partials/LeftContent";
import { Layout } from "antd";

const Login = () => {
  const { Content } = Layout;
  return (
    <Content className="flex">
      <LeftContent />
      <FormLogin />
    </Content>
  );
};

export default Login;
