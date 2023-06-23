import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from "../../public/images/profile/mujahid.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>LokmanMujahid | About Page</title>
                <meta name="description" content='any description' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Ignites Purpose!" className="mb-16" />
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className='font-medium my-4'> My name is Mujahid, and I have recently embarked on a journey towards achieving my professional aspirations by pursuing a Marketing Honors degree at a prestigious national university. Although my chosen field of study may not be directly aligned with information technology, I have always harbored a fervent passion for the technological realm. This enthusiasm prompted me to delve into the realm of web development, where I have cultivated my skills as a proficient MERN stack developer over the past year.
                            </p>

                            <p className='font-medium my-4'>If I were to encapsulate my character in just two words, they would be "dedicated" and "punctual." I approach every project with an unwavering commitment to excellence, ensuring that I deliver high-quality results within the stipulated timeframe. Rest is elusive to me until I have thoroughly scrutinized my projects and resolved any errors or issues, as I firmly believe in delivering flawless work.</p>

                            <p className='font-medium my-4'>
                                My unwavering dedication drives me to continuously strive for excellence in the field of web development. Looking ahead, my overarching goal is to ascend to the position of a senior developer within the next three to four years. By diligently honing my skills, staying abreast of the latest industry trends, and seizing opportunities for growth and professional development, I am confident in my ability to attain this milestone.
                            </p>

                            <p className='font-medium my-4'>I eagerly embrace the challenges that lie ahead and am committed to making a substantial impact in the technological arena through my unwavering dedication, punctuality, and unrelenting pursuit of expertise as a web developer.</p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={profilePic} alt='Mujahid' className='w-full h-auto rounded-2xl' priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between'>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={1} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Years of experience</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={15} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Projects Completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Skills Learned</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    {/* <Experience /> */}
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default about;