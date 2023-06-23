import Layout from '@/components/layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/mujahid.jpg"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons'
import HireMe from '@/components/HireMe'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0'>

          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={profilePic} alt='Mujahid' className='w-1/2 mx-auto rounded-full border-4 border-black dark:border-light h-auto' priority 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Transforming Vision into Reality through Code and Design." className='!text-6xl !text-left' />
              <p className='my-4 text-base font-medium'>
                As a proficient full-stack developer, I am committed to bringing ideas to life through cutting-edge web applications. Delve into my recent projects and insightful articles, highlighting my mastery of React.js and expertise in the realm of web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/resume.pdf" target={'_blank'} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light' 
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"} /> </Link>
                <Link href="lokmanmujahid4@gmail.com" target={'_blank'} className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'>Contact</Link>
              </div>
            </div>
          </div>

        </Layout>
        <HireMe/>
      </main>
    </>
  )
}
