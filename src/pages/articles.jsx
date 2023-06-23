import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import article1 from '../../public/images/articles/MERN.jpg'
import article2 from '../../public/images/articles/ReactJS.png'
import { motion, useMotionValue } from 'framer-motion';


const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null)

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block"
        x.set(event.pageX)
        y.set(-10)
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = "none"
        x.set(0)
        y.set(0)
    }

    return (
        <Link href={link} target="_blank"

            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' />
        </Link>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col'>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark  sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {

    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101.50%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
            <Link href={link} target='_blank'
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <Link href={link} target="_blank" >
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-bold dark:text-primaryDark'>{time}</span>
        </li>
    )

}

const articles = () => {
    return (
        <>
            <Head>
                <title>LokmanMujahid | Articles Page</title>
                <meta name="description" content='any description' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="The Power of Words Reshapes Reality!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                        <FeaturedArticle
                            title="MERN Technology"
                            summary="The MERN stack, consisting of MongoDB, Express.js, React, and Node.js, is a powerful combination of technologies for building modern web applications. It enables rapid development, seamless knowledge transfer, and the creation of interactive user interfaces. With a vibrant community and numerous resources available, the MERN stack offers a fantastic environment for developing amazing web applications."
                            time="9-06-2023"
                            link="https://www.linkedin.com/feed/update/urn:li:activity:7072585242187862017/"
                            img={article1}
                        />
                        <FeaturedArticle
                            title="ReactJS"
                            summary="React JS is a powerful JavaScript library for building modern web applications. Its component-based architecture and virtual DOM make it easy to create interactive and dynamic user interfaces. With a focus on performance and reusability, React simplifies UI development and offers a thriving ecosystem of libraries and tools. Joining the React JS community opens up exciting possibilities for creating high-quality web applications."
                            time="23-06-2023"
                            link="https://www.linkedin.com/feed/update/urn:li:activity:7077944653433491456/"
                            img={article2}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full my-16 text-center mt-32'>All Articles</h2>
                    <ul>
                        <Article
                            title="MERN Technology"
                            date="9-06-2023"
                            link="https://www.linkedin.com/feed/update/urn:li:activity:7072585242187862017/"
                            img={article1}
                        />
                        <Article
                            title="ReactJS"
                            date="23-06-2023"
                            link="https://www.linkedin.com/feed/update/urn:li:activity:7077944653433491456/"
                            img={article2}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    );
};

export default articles;