import { Layout } from "antd";
import Leading from "./Partials/Leading";
import { InputSearch } from "../../components/Form/inputs";
import Actions from "./Partials/Actions";

const Header = () => {
  const { Header } = Layout;
  return (
    <Header className="bg-white flex items-center justify-between">
      <Leading />
      <InputSearch
        placeholder="Search..."
        className="w-[570px] h-[30px] rounded-md"
      />
      <Actions />
    </Header>
  );
};

export default Header;
