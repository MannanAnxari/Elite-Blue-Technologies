import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import HomeSections from './HomeSections/HomeSections'
import Layout from './Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout title="Elite Blue Technologies" metaTitle="Elite Blue Technologies" metaDescription="At Elite Blue Technologies, our focus is on delivering results for our clients. As an expert digital agency, we specialize in building brands and attracting customers, not just making empty promises. Let us help you grow your business through creative and effective digital solutions.">
        <HomeSections />
      </Layout>
    </>
  )
}



