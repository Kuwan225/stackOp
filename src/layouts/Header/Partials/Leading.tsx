import Logo from "/public/logo/e_logo.png";
import Container from "../../../components/container";
import Image from "../../../components/image";
import Text from "../../../components/text";

const Leading = () => {
  return (
    <Container className="shadow-none flex items-center gap-[15px]">
      <Image src={Logo} width={"40px"} />
      <Text className="text-primary font-bold text-[20px]">Novely</Text>
    </Container>
  );
};

export default Leading;
