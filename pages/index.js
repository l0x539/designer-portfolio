import { applySession } from 'next-session';
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Home from '../components/pages/Home'

import excuteQuery from "../lib/db";

export const getServerSideProps = async ({ req, res }) => {
    const videos = await excuteQuery({
        query: 'SELECT * FROM videos',
    });
    const user = await excuteQuery({
        query: 'SELECT name, description, image  FROM users',
    });
    const socials = await excuteQuery({
      query: 'SELECT *  FROM socials LIMIT 1',
    });
    if (!user?.length) return {props: {}}
    return {
        props: {
            videos: Object.values(JSON.parse(JSON.stringify(videos))),
            name: user[0].name,
            description: user[0].description,
            image: user[0].image,
            socials: Object.values(JSON.parse(JSON.stringify(socials)))
        }
    }
}

function HomePage({videos, name, description, image, socials}) {
  return (
    <Layout socials={socials} username={name} description={description} image={image} >
      <Head>
        <title>{`${name} Portfolio`}</title>
        <meta name="description" content="Portfolio Description." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home videos={videos} />
    </Layout>
  )
}

export default HomePage;
