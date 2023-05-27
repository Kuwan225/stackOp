import { Space, notification } from "antd";
import Container from "../../../components/container";
import Image from "../../../components/image";
import { Formik, Form } from "formik";
import Logo from "/public/logo/e_logo.png";
import Text from "../../../components/text";
import { DefaultInput } from "../../../components/Form/inputs";
import { PrimaryBtn } from "../../../components/buttons";
import { LoginModel } from "../../../mutations/types/Login.type";
import LoginValidationSchema from "../../../mutations/validations/LoginValidationSchema";

const FormLogin = () => {
  const initialValues: LoginModel = {
    username: "",
    email: "",
    password: "",
  };
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
          <Formik
            onSubmit={(values) => {
              if (values) {
                notification.success({
                  message: "Daftar berhasil!",
                });
              }
            }}
            initialValues={initialValues}
            validationSchema={LoginValidationSchema}
          >
            {({ handleChange, touched, errors }) => {
              return (
                <Form className="w-[280px]">
                  <Space direction="vertical" size={"middle"}>
                    <DefaultInput
                      name="username"
                      placeholder="Masukkan Nama"
                      islabel
                      labeltext="Nama Lengkap"
                      onChange={handleChange}
                      errormsg={touched.username && errors.username}
                    />
                    <DefaultInput
                      name="email"
                      placeholder="Masukkan Email"
                      islabel
                      labeltext="Email"
                      onChange={handleChange}
                      errormsg={touched.email && errors.email}
                    />
                    <DefaultInput
                      name="password"
                      placeholder="Masukkan Password"
                      type="password"
                      islabel
                      labeltext="Password"
                      onChange={handleChange}
                      errormsg={touched.password && errors.password}
                    />
                    <PrimaryBtn>Daftar</PrimaryBtn>
                  </Space>
                </Form>
              );
            }}
          </Formik>
        </Space>
      </Space>
    </Container>
  );
};

export default FormLogin;
