import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Home from '../components/pages/Home'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Portfolio Title</title>
        <meta name="description" content="Portfolio Description." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </Layout>
  )
}

export default HomePage;
