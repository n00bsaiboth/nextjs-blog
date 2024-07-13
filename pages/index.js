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
        <!-- Matomo -->
        <script>
          var _paq = window._paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="//matomo.openinnovations.io/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '3']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        </script>
      <!-- End Matomo Code -->
      </Head>
      <section className={utilStyles.headingMd}>
          <p className={utilStyles.intro}>
            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
            {' '} Freelancer | Script kiddie | Raspberry Pi | IoT | Web developer | Linux and information security enthusiast. {' '} 
            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon> 
          </p> 
      </section>

      <section id="intro">
        <p>My interests range from Open Source to Information Security. I am also interested in Cryptocurrencies, and zeitgeist movement. </p>
        <p>You can consider me as a full-stack developer, but usually I work on the backend, because backend feels more like home to me. </p>
        <p>Every now and then I'm a light entrepreneuer, mostly helping my neighbors around or then again, because of my background, also do some LAMP-projects, mostly Drupal and Wordpress.</p>
        <p>I'm also a member of the Pirate Party, COSS and EFFI.</p>
        <p>Current status: Looking for a new job.</p>
      </section>

      <section id="contact">
        <p><a href="mailto: jussi.k.jokinen [at] gmail.com" title="jussi.k.jokinen [at] gmail.com" rel="noreferrer noopener"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{' '}jussi.k.jokinen [at] gmail.com</a></p>
        <p><a href="tel:+358 41 701 6628" title="+358 41 701 6628" rel="noreferrer noopener"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{' '}  +358 41 701 6628</a></p>
        <p><a href="https://www.linkedin.com/in/jussi-k-jokinen/" target="_blank" title="Jussi Jokinen [at] linkedin" rel="noreferrer noopener"><FontAwesomeIcon icon={faLink}></FontAwesomeIcon>{' '}Jussi Jokinen [at] linkedin</a></p>
      </section>
      
      <section id="blog" className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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

      <section id="footer" className={utilStyles.footer}>
        <p>This blog is powered by: <a href="https://nextjs.org/learn" target="_blank" title="Next.js" rel="noreferrer noopener">Next.js</a>.</p>
      </section>
    </Layout>
  )
}
