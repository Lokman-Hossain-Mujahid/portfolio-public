import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/mujahid.jpg"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>

      <Head>
        <title>LokmanMujahid | Home Page</title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect/> 

      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>

          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='Mujahid' className='w-1/2 mx-auto rounded-full border-4 border-black dark:border-light h-auto lg:hidden md:inline-block md:w-full' priority 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Transforming Vision into Reality through Code and Design." className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a proficient full-stack developer, I am committed to bringing ideas to life through cutting-edge web applications. Delve into my recent projects and insightful articles, highlighting my mastery of React.js and expertise in the realm of web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="./resume.pdf" target={'_blank'} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base' 
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"} /> </Link>
                <Link href="/contact" className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>Contact</Link>
              </div>
            </div>
          </div>

        </Layout>

        <HireMe/>
        
      </main>

    </>
  )
}
