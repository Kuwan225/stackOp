import { Space } from "antd";
import Container from "../../../components/container";
import Image from "../../../components/image";
import { Formik, Form } from "formik";

import Logo from "/public/logo/e_logo.png";
import Text from "../../../components/text";
import { DefaultInput } from "../../../components/Form/inputs";
import { PButton } from "../../../components/buttons";

const FormLogin = () => {
  return (
    <Container className="max-w-[50%] flex justify-center items-center shadow-none">
      <Space direction="vertical" size={"large"}>
        <Space direction="vertical">
          <Image alt="Logo" src={Logo} width={"45px"} />
          <Text className="text-[#71492E] text-3xl font-semibold">Sign Up</Text>
          <Text className="text-black text-lg opacity-[50%]">
            Masukkan detail anda dibawah ini
          </Text>
        </Space>
        <Space direction="vertical">
          <Formik onSubmit={() => {}} initialValues={{}}>
            <Form>
              <Space direction="vertical" size={"middle"}>
                <DefaultInput
                  placeholder="Masukkan Nama"
                  label
                  labelText="Nama Lengkap"
                />
                <DefaultInput
                  placeholder="Masukkan Email"
                  label
                  labelText="Email"
                />
                <DefaultInput
                  placeholder="Masukkan Password"
                  type="password"
                  label
                  labelText="Password"
                />
                <PButton>Daftar</PButton>
              </Space>
            </Form>
          </Formik>
        </Space>
      </Space>
    </Container>
  );
};

export default FormLogin;
