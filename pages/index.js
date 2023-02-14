import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google' 
import HomeSections from './HomeSections/HomeSections'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ metaKeywords, title, metaDescription, metaTitle }) {
  return (
    <>
      <Head>
        <title>Elite Blue Technoligies</title>
        <meta name="description" content="Created by Elite Blue Technoligies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={`${metaTitle}`} />
        <meta name="keywords" content={`${metaKeywords}`} />
        <meta name="description" content={`${metaDescription}`} />
        <link rel="canonical" href={!(typeof window === 'undefined') && window.location.href} />
        <meta property="og:site_name" content="Elite Blue Technologies" />
        <meta property="og:url" content={!(typeof window === 'undefined') && window.location.href} />
        <meta property="og:title" content={`${metaTitle}`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={`${metaDescription}`} />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:title" content={`${metaTitle}`} />
        <meta name="twitter:description" content={`${metaDescription}`} />
        <title>{title}</title>
      </Head>
      <HomeSections />
    </>
  )
}


export async function getStaticProps() {

  return {
    props: {
      title: "Elite Blue Technologies",
      metaTitle: "Elite Blue Technologies",
      metaKeywords: "",
      metaDescription: "At Elite Blue Technologies, our focus is on delivering results for our clients. As an expert digital agency, we specialize in building brands and attracting customers, not just making empty promises. Let us help you grow your business through creative and effective digital solutions.",
    },
  }
}

