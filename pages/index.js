import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
          <p className={utilStyles.intro}>
            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
            {' '} Freelancer | Script kiddie | Raspberry Pi | IoT | Web developer | Linux and information security enthusiast.  {' '} 
            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon> 
          </p> 
      </section>

      <section>
        <p>My interests range from Open Source to Information Security. I am also interested in Cryptocurrencies, and zeitgeist movement. </p>

        <p>I'm currently working at Citrus Solutions, as a Drupalist. You can consider me as a full-stack developer, but usually I work on the backend, because I don't want to be the center of attention (that was actually joke, because here in Finland we have this thing called, "puujalkavitsit"). </p>
        
        <p>Every now and then I'm a light entrepreneuer, mostly helping my neighbors around or then again, because of my background, also do some LAMP-projects, mostly wordpress.</p>

        <p>I'm also a member of the Pirate Party, COSS and EFFI.</p>
        <p>Notice: That now that I work full time, I don't have the time to work on this blog. </p>
      </section>

      <section>
            <p><a href="mailto: jussi.k.jokinen [at] gmail.com"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{' '}jussi.k.jokinen [at] gmail.com</a></p>
            <p><a href="tel:+358 41 701 6628"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{' '}  +358 41 701 6628</a></p>
            <p><a href="https://www.linkedin.com/in/jussi-k-jokinen/" target="_blank"><FontAwesomeIcon icon={faLink}></FontAwesomeIcon>{' '}linkedin.com/jussi-k-jokinen</a></p>
      </section>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>

      <section className={utilStyles.footer}>
        <p>
          This blog is powered by: <a href="https://nextjs.org/learn" target="_blank">Next.js</a>.
        </p>
      </section>
    </Layout>
  )
}
