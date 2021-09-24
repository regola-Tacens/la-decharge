import '../styles/globals.css'
import Head from 'next/head'


import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
    <Head>
      <title>le décharge</title>
      <meta property='og:title' content='Title of the article'/>
      <meta property='og:image' content='/decharge.jpg'/>
      <meta property='og:description' content='blog perso'/>
    </Head>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
