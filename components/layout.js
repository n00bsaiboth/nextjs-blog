import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Jussi Jokinen'
const description = 'Web developer, Turku - Finland'
export const siteTitle = 'Simple blogging platform, builded with next.js'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nextjs-blog-seven-rho-68.vercel.app/" />

        <link rel="icon" href="/favicon.ico" />
        
        <meta
          name="Simple blogging platform, builded with next.js"
          content="Learn how to build a personal website or a blogging platform using Next.js"
        />
        <meta 
          name="keywords"
          content="Jussi Jokinen, n00bsaiboth, Turku, Finland, web developer, Drupalist, Wordpress, Fullstack, Backend, Linux and information security enthusiast, Looking for work"
        />
        <meta 
          name="author"
          content="Jussi Jokinen"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <h2 className={utilStyles.headingMd}>{description}</h2>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
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
