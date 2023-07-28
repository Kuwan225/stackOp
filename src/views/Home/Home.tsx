import { Layout } from "antd";
import CarouselInfo from "./Partials/CarouselInfo";
import TableRecent from "./Partials/TableRecent";

const Home = () => {
  return (
    <Layout className="min-h-screen bg-[#F3F3F3] flex min-w-full">
    <CarouselInfo/>
    <TableRecent/>
    </Layout>
  );
};

export default Home;
