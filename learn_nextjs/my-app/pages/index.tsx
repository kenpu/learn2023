import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import {Avatar} from '../components/avatar'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Learn 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout currentPage='home'>
        <h1> Hello </h1>
        <div>
          <Avatar />
        </div>
      </Layout>
    </>
  )
}
