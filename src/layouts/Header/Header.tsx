import { Layout } from "antd";
import Leading from "./Partials/Leading";
import { InputSearch } from "../../components/Form/inputs";
import Actions from "./Partials/Actions";
import { Link } from "react-router-dom";
import Text from "../../components/text";

const Header = () => {
  const { Header } = Layout;
  return (
    <>
      <Header className=" bg-[#F2F2F2]">
        <div className="flex items-center justify-between">
          <Leading />
          <InputSearch
            placeholder="Search..."
            className="w-[579px] h-[35px] rounded-md bg-[#E1E1E1]"
          />
          <Actions />
        </div>
      </Header>
      <div className="min-w-full flex bg-[#F2F2F2] justify-center gap-[50px]">
        <Link className="no-underline" to={"/"}>
          <Text className="text-[#8B8682]">Home</Text>
        </Link>
        <Link className="no-underline" to={"/feeds"}>
          <Text className="text-[#8B8682]">Feeds</Text>
        </Link>
        <Link className="no-underline" to={"/books"}>
          <Text className="text-[#8B8682]">Books</Text>
        </Link>
      </div>
    </>
  );
};

export default Header;
