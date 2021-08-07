import Head from 'next/head';
import { applySession  } from 'next-session';
import Admin from '../components/pages/Admin';
import excuteQuery from "../lib/db";

export const getServerSideProps = async ({ req, res }) => {
    await applySession(req, res, {name: 'auth'});
    if (!req.session.user) {
        req.session.destroy()
        return {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        }
      }
    const videos = await Object.values(JSON.parse(JSON.stringify(await excuteQuery({
        query: 'SELECT * FROM videos',
    }))));
    const user = await excuteQuery({
        query: 'SELECT name, description, image  FROM users',
    });
    const socials = await excuteQuery({
        query: 'SELECT *  FROM socials LIMIT 1',
      });
    if (!user?.length) return {props: {}}
    console.log("videos", !user.length);
    return {
        props: {
            videos: videos,
            name: user[0].name,
            description: user[0].description,
            image: user[0].image,
            socials: Object.values(JSON.parse(JSON.stringify(socials)))
        }
    }
}

function AdminPage({name, description, image, videos, socials}) {
  const logout = () => {
      fetch("/api/logout")
      window.location.href = "/login"
  }
  return (
    <main>
      <Head>
        <title>Portfolio Title</title>
        <meta name="description" content="Portfolio Description." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Admin socials={socials} name={name} description={description} image={image} videos={videos} />
      <button onClick={logout}>Logout</button>
    </main>
  )
}

export default AdminPage;