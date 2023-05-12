import Container from "../../../components/container";
import Image from "../../../components/image";
import Text from "../../../components/text";
import LoginImage from "/public/img/login.png";

const LeftContent = () => {
  return (
    <Container className="min-h-screen bg-[#B08968] my-[10px] mx-[10px] flex flex-col justify-center max-w-[50%]">
      <Text className="text-[#71492E] font-medium text-3xl">Novely</Text>
      <Image src={LoginImage} width={"350px"} alt="Img" />
      <Text className="text-[#3A3232] text-lg">
        Jual beli novel pilihanmu dengan mudah <br /> di <b>Novely</b>
      </Text>
    </Container>
  );
};

export default LeftContent;
