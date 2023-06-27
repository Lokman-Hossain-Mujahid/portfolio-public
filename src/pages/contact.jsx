import React, { useRef, useState } from 'react';
import { Container, Text, Alert, AlertIcon, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useToast } from '@chakra-ui/react';
import emailjs from 'emailjs-com';
import Lottie from 'lottie-react';
import emailAnimation from '../../email.json';
import Head from 'next/head';
import TransitionEffect from '@/components/TransitionEffect';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';

const schema = yup.object().shape({
    from_name: yup.string().required('Name is required'),
    user_email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
    message: yup.string().required('Message is required'),
});

const Contact = () => {
    const toast = useToast();
    const form = useRef();
    const { register, handleSubmit, formState, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const { errors } = formState;
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (data) => {
        setIsSubmitting(true);
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
                process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log('Message Sent');
                    setIsSubmitting(false);
                    reset();
                    toast({
                        title: 'Email sent',
                        description: 'Your email has been sent successfully.',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    });
                },
                (error) => {
                    console.log(error.text);
                    setIsSubmitting(false);
                    toast({
                        title: 'Error',
                        description: 'Failed to send email. Please try again later.',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    });
                }
            );
    };

    return (
        <>
            <Head>
                <title>LokmanMujahid | Contact Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <Layout>
                <div>
                    <AnimatedText
                        text="Send Me An Email!"
                        className="mb-16 lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8"
                    />
                </div>
                <div className="sm:grid-cols-1 grid grid-cols-2 items-center max-w-5xl mx-auto">
                    <Container className="">
                        <form ref={form} className="w-full mx-auto" onSubmit={handleSubmit(sendEmail)}>
                            <h2 className='text-center my-2 dark:text-light'>*you have to fill up all the fields*</h2>
                            <p>
                                <label htmlFor="name" className="block text-gray-700 dark:text-light">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="from_name"
                                    className={`border ${errors.from_name ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md p-2 w-full my-2`}
                                    {...register('from_name')}
                                />
                                {errors.from_name && (
                                    <Text color="red.500" fontSize="sm">
                                        {errors.from_name.message}
                                    </Text>
                                )}
                            </p>
                            <p>
                                <label htmlFor="email" className="block text-gray-700 dark:text-light">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    className={`border ${errors.user_email ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md p-2 w-full my-2`}
                                    {...register('user_email')}
                                />
                                {errors.user_email && (
                                    <Text color="red.500" fontSize="sm">
                                        {errors.user_email.message}
                                    </Text>
                                )}
                            </p>
                            <p>
                                <label htmlFor="message" className="block text-gray-700 dark:text-light">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    className={`border ${errors.message ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md p-2 w-full my-2`}
                                    {...register('message')}
                                ></textarea>
                                {errors.message && (
                                    <Text color="red.500" fontSize="sm">
                                        {errors.message.message}
                                    </Text>
                                )}
                            </p>
                            <p className="text-center">
                                <Button
                                    type="submit"
                                    bg={isSubmitting || !formState.isValid ? 'gray.500' : 'blue.500'}
                                    _hover={{ bg: isSubmitting || !formState.isValid ? 'gray.600' : 'blue.600' }}
                                    color="white"
                                    fontWeight="semibold"
                                    py={2}
                                    px={4}
                                    rounded="md"
                                    disabled={isSubmitting || !formState.isValid}
                                >
                                    Submit
                                </Button>
                            </p>

                        </form>
                    </Container>
                    <div>
                        <Lottie className="w-3/4 h-full sm:ml-10 ml-20" animationData={emailAnimation} />
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Contact;
