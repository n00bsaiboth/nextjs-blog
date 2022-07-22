import '../styles/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useEffect } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import { init } from '@socialgouv/matomo-next'
config.autoAddCss = false;

const MATOMO_URL = '//80.209.230.81/'
const MATOMO_SITE_ID = '3'

export default function App({ Component, pageProps }) {
    useEffect(() => {
        init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID })
    }, [])
    
    return <Component {...pageProps} />
}
