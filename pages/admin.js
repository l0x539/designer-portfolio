import Head from 'next/head';
import { applySession  } from 'next-session';

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
    return {
        props: {}
    }
}

function AdminPage() {

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
      <div>Admin</div>
      <button onClick={logout}>Logout</button>
    </main>
  )
}

export default AdminPage;