import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Joaquin Solis'
export const siteTitle = 'Joaquin Solis'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
        <meta
          name="description"
          content="Joaquin Solis Website "
        />

        <meta
          property="og:image"
          content={`https://og-image.now.sh/**joaquinsolis**.com.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&images=https%3A%2F%2Fcdn.worldvectorlogo.com%2Flogos%2Freact.svg`}
        />
        <meta name="og:title" content={siteTitle} />


      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpeg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <div className="flex">
              <a href="https://twitter.com/joaquinsolis93" target="_blank"><i class="fab fa-twitter" title="twitter"></i></a>
              <a href="https://linkedin.com/in/joaquinsolis" target="_blank"><i class="fab fa-linkedin" title="linkedin"></i></a>
              <a href="https://github.com/solisjoaquin" target="_blank"><i class="fab fa-github" title="github"></i></a>



            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpeg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>

          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
