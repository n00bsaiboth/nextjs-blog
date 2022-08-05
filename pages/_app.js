import React, { useEffect } from "react";
import '../styles/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false;

import { init } from "@socialgouv/matomo-next";
import { push } from "@socialgouv/matomo-next";

const MATOMO_URL = '//matomo.testi-pannu.net';
const MATOMO_SITE_ID = 7;

export default function App({ Component, pageProps }) {
    useEffect(() => { 
        init({url: MATOMO_URL, siteId: MATOMO_SITE_ID});
        
    }, []);
    
    push(["trackPageView"]);

    return <Component {...pageProps} />
}
