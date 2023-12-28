'use client';
import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { View, Text, TextField, Flex, Button, Heading, Card, Divider, CheckboxField, Link } from '@aws-amplify/ui-react';
import { useFormik } from 'formik';

const page = () => {


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            firstname: '',
            lastname: '',

        },
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            if (values) {
                resetForm();
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
        // backgroundColor="#e6e6e6"
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
                                Sign up
                            </Text>

                            <Flex
                                direction='row'
                            >
                                <TextField
                                    id='firstname'
                                    name='firstname'
                                    label="First name"
                                    isRequired={true}
                                    onChange={formik.handleChange}
                                    value={formik.values.firstname}
                                />
                                <TextField
                                    id='lastname'
                                    name='lastname'
                                    label="Last name"
                                    isRequired={true}
                                    onChange={formik.handleChange}
                                    value={formik.values.lastname}
                                />

                            </Flex>

                            <TextField
                                id='email'
                                name='email'
                                size="large"
                                label="Email"
                                type="email"
                                isRequired={true}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <TextField
                                id='password'
                                name='password'
                                size="large"
                                type="password"
                                label="Password"
                                isRequired={true}
                                onChange={formik.handleChange}
                                value={formik.values.password}
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
                                    Sign up
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
                        <Link></Link>

                        <Link
                            href="/signin"
                            color="#007EB9"
                            textDecoration="underline"
                            whiteSpace='nowrap'
                            fontSize='12px'
                        >
                            <Text
                                as="span"
                                variation="primary"
                            >
                                Already have an account? Sign in
                            </Text>
                        </Link>

                    </Flex>
                </form>
            </View>
        </View>

    )

}

export default page

