'use client';
import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { View, Text, TextField, Flex, Button, Heading, Card, Divider, CheckboxField, Link } from '@aws-amplify/ui-react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';

const page = () => {
   
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            if (values) {
                resetForm();
                router.push('/todo');
            }
        },
        // validationSchema: yup.object({
        //   email: yup
        //     .string('Enter your email')
        //     .email('Must be a valid email')
        //     .required('Email is required'),
        //   password: yup
        //     .string('Enter your password')
        //     .min(8, 'Password should be of minimum 8 characters length')
        //     .required('Password is required'),
        // })
    });


    return (

        <View
            as="div"
            ariaLabel="View example"
            maxWidth={false}
            paddingTop="4rem"
            width="20rem"
            marginLeft='auto'
            marginRight='auto'

        >
            <View
                as="div"
                minHeight="calc(100vh - 64px)"
            >
                <form onSubmit={formik.handleSubmit}>
                    <View
                        as='div'
                        display="flex"
                        alignItems="center"
                        flexdirection="column"
                        justifyContent="center"
                    >
                        <Flex direction="column">
                            <Text
                                fontWeight='400'
                                lineHeight='1.334'
                                textAlign='center'
                                fontSize="1.5em"
                            >
                                Sign in
                            </Text>

                            <TextField
                                id="email"
                                name='email'
                                size="large"
                                label="Email"
                                type="email"
                                isRequired={true}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            <TextField
                                id='password'
                                name='password'
                                size="large"
                                type="password"
                                label="Password"
                                isRequired={true}
                                value={formik.values.password}
                                onChange={formik.handleChange}

                            />
                            <CheckboxField
                                label="rememberMe"
                                id='rememberMe'
                                name="rememberMe"
                                value="yes"
                                onChange={(e) => formik.setFieldValue('rememberMe', e.target.checked)}
                            />
                            <Button
                                variation="primary"
                                size="large"
                                type='submit'

                            >
                                <Text
                                    as="div"
                                    variation="primary"
                                    lineHeight="1.5em"
                                    fontWeight={400}
                                    fontSize="1em"
                                    fontStyle="normal"
                                    textDecoration="none"
                                    textAlign='center'

                                >
                                    Sign in
                                </Text>
                            </Button>
                        </Flex>
                    </View>
                    <Flex
                        display='flex'
                        direction='row'
                        justifyContent='space-between'
                        paddingTop='2'
                    >
                        <Link
                            href="https://ui.docs.amplify.aws/react/components/link"
                            color="#007EB9"
                            textDecoration="underline"
                            whiteSpace='nowrap'
                            fontSize='12px'
                            marginRight='8px'

                        >
                            <Text
                                as="span"
                                variation="primary"
                                textDecoration="underline"
                                whiteSpace='nowrap'
                                fontSize='12px'

                            >
                                Forgot Password?
                            </Text>

                        </Link>
                        <Link
                            href="/signup"
                            color="#007EB9"
                            textDecoration="underline"
                            whiteSpace='nowrap'
                            fontSize='12px'
                        >
                            <Text
                                as="span"
                                variation="primary"
                            >
                                Don&rsquo;t have an Account? Sign Up
                            </Text>
                        </Link>
                    </Flex>
                </form>
            </View>
        </View>

    )

}

export default page

