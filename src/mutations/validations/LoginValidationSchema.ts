import * as yup from 'yup'

const LoginValidationSchema = yup.object().shape({
    username: yup.string().required('Tidak boleh kosong!'),
    email: yup.string().email("Email tidak valid").required('Tidak boleh kosong!'),
    password: yup.string().min(4, "Minimal 4 Character").required('Tidak boleh kosong!'),
})

export default LoginValidationSchema