import { NovelCard } from "../../components/cards";
import { Layout, Space } from "antd";
import SampleBook from "/img/sampleBook.png";
import Container from "../../components/container";

const Home = () => {
  return (
    <Layout className="min-h-screen bg-[#F2F2F2]">
      <Container className="flex justify-center text-start">
        <Space direction="horizontal" size={"large"} align="start">
          <NovelCard
            linkTo={"#"}
            src={SampleBook}
            author="Author"
            novelTitle="Harry Potter"
            price={200000}
          />
          <NovelCard linkTo={"#"} src={SampleBook} />
          <NovelCard linkTo={"#"} src={SampleBook} />
        </Space>
      </Container>
    </Layout>
  );
};

export default Home;
