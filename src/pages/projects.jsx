import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { GithubIcon } from '@/components/icons';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from "../../public/images/projects/LanguageExpress.PNG"
import project2 from "../../public/images/projects/ToyVerse.PNG"
import project3 from "../../public/images/projects/ItalianCuisine.PNG"
import { motion } from 'framer-motion';

const FramerImage = motion(Image);


const FeaturedProject = ({ type, title, summary, img, link, github }) => {

    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>

            <div className='absolute top-0 -right-3 -z-10 w-[100.80%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />

            <Link href={link} target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
                    <Link href={link} target='_blank'
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
                    > Visit Project </Link>

                </div>
            </div>

        </article>
    )

}

const Project = ({ title, type, img, link, github }) => {

    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>

            <div className='absolute top-0 -right-3 -z-10 w-[101.50%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />

            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>

                    <Link href={link} target='_blank'
                        className=' text-lg font-semibold underline'
                    > Visit</Link>

                    <Link href={github} target='_blank' className='w-8'> <GithubIcon /> </Link>


                </div>
            </div>
        </article>
    )

}

const projects = () => {
    return (
        <>
            <Head>
                <title>LokmanMujahid | Projects Page</title>
                <meta name="description" content='any description' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Reigns Supreme over Knowledge!"
                        className="mb-16"
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Language Express"
                                img={project1}
                                summary="This project is a web application with three user roles (Student, Instructor, Admin). The UI/UX adapts based on the role, while data is stored in MongoDB and accessed using Axios and TanStack Query. Authentication is handled through Firebase, ensuring protected routes based on user roles. The application provides secure CRUD operations and leverages Node.js and Express for server-side functionality."
                                link="https://language-express-client.web.app"
                                github="https://github.com/Lokman-Hossain-Mujahid/Language-Express"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Toy Verse"
                                img={project2}
                                summary="I have demonstrated expertise in React development, specifically focusing on MongoDB CRUD operations. I have successfully implemented Firebase authentication and a robust profile update system in my projects. These projects showcase my skills in developing applications using React, MongoDB, and Firebase, enabling efficient data management and delivering an enhanced user experience."
                                link="https://toy-verse-client.web.app/"
                                github="https://github.com/Lokman-Hossain-Mujahid/toyverse-client"
                                type="Project"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Italian Cuisine's"
                                img={project3}
                                summary="In my projects, I have developed dynamic user interfaces using React and seamlessly integrated server-side data through a Node.js and Express API. I have also implemented Firebase authentication to enhance security and enable user profile updates. By leveraging technologies such as React, Node.js, Express, and Firebase, I have created robust and interactive web applications with efficient data handling capabilities."
                                link="https://chef-s-cuisine-client.web.app/"
                                github="https://github.com/Lokman-Hossain-Mujahid/chefs-cuisine"
                                type="Project"
                            />
                        </div>
                        {/* <div className='col-span-12'>
                            <FeaturedProject
                                title="Language Express"
                                img={project1}
                                summary="This project is a web application with three user roles (Student, Instructor, Admin). The UI/UX adapts based on the role, while data is stored in MongoDB and accessed using Axios and TanStack Query. Authentication is handled through Firebase, ensuring protected routes based on user roles. The application provides secure CRUD operations and leverages Node.js and Express for server-side functionality."
                                link="https://language-express-client.web.app"
                                github="https://github.com/Lokman-Hossain-Mujahid/Language-Express"
                                type="Featured Project"
                            />
                        </div> */}
                        {/* <div className='col-span-6'>
                        <Project
                                title="Language Express"
                                img={project1}
                                summary="This project is a web application with three user roles (Student, Instructor, Admin). The UI/UX adapts based on the role, while data is stored in MongoDB and accessed using Axios and TanStack Query. Authentication is handled through Firebase, ensuring protected routes based on user roles. The application provides secure CRUD operations and leverages Node.js and Express for server-side functionality."
                                link="https://language-express-client.web.app"
                                github="https://github.com/Lokman-Hossain-Mujahid/Language-Express"
                                type="Featured Project"
                            />
                        </div> */}
                        {/* <div className='col-span-6'>
                        <Project
                                title="Language Express"
                                img={project1}
                                summary="This project is a web application with three user roles (Student, Instructor, Admin). The UI/UX adapts based on the role, while data is stored in MongoDB and accessed using Axios and TanStack Query. Authentication is handled through Firebase, ensuring protected routes based on user roles. The application provides secure CRUD operations and leverages Node.js and Express for server-side functionality."
                                link="https://language-express-client.web.app"
                                github="https://github.com/Lokman-Hossain-Mujahid/Language-Express"
                                type="Featured Project"
                            />
                        </div> */}
                    </div>

                </Layout>
            </main>
        </>
    );
};

export default projects;