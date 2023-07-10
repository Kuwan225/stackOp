import { Layout } from "antd";
import Text from "../../components/text";

const Home = () => {
  return (
    <Layout className="min-h-screen bg-black flex item-center justify-center min-w-full">
      <div className="flex justify-center">
        <Text className="text-white font-bold text-3xl">Happy Coding :)</Text>
      </div>
    </Layout>
  );
};

export default Home;
