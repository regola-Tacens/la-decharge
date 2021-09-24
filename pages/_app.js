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
      <meta property='og:image' content='//og-image.vercel.app/la%20D%C3%A9charge.jpeg?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg&widths=350&heights=350'/>
      <meta property='og:image' content='//og-image.vercel.app/la%20D%C3%A9charge.jpeg?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg&widths=350&heights=350'/>
      <meta property='og:url' content='//la-decharge.vercel.app'/>
    </Head>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
