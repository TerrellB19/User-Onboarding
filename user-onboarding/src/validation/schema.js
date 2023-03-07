import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('username is a requirement')
        .min(3, 'there is a minimum username requirement of 3 characters'),
    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(7, 'Passwords must be atleast 7 characters'),
    tos: yup
    .boolean()
    .oneOf([true], 'Must accept TOS to continue')
})  

export default formSchema;