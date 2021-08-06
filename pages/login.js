import Head from 'next/head';
import { applySession  } from 'next-session';

export const getServerSideProps = async ({ req, res }) => {
    await applySession(req, res, {name: 'auth'});
    if (req.session.user) {
        return {
          redirect: {
            destination: '/admin',
            permanent: false,
          },
        }
      }
    return {
        props: {}
    }
}

function LoginPage() {
  
  const login = (e) => {
    e.preventDefault()
    e.target.parentNode.submit()
  }

  return (
    <main className="login-page" >
      <Head>
        <title>Portfolio Title</title>
        <meta name="description" content="Portfolio Description." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="login-box">
        <h2>Login</h2>
        <form method="POST" action="/api/login">
            <div class="user-box">
                <input type="text" name="username" required="" />
                <label>Username</label>
            </div>
            <div class="user-box">
            <input type="password" name="password" required="" />
            <label>Password</label>
            </div>
            <a onClick={login} href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
            </a>
        </form>
      </div>
    </main>
  )
}

export default LoginPage;
