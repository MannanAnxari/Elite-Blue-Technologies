import Head from "next/head";


const Layout = ({ children, title = "Elite Blue Technologies", metaTitle = "Elite Blue Technologies", metaKeywords = "", metaDescription = "" }) => {


    return (
        <>
            <Head>
                <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
                <link href="/css/fontawesome-all.css" rel="stylesheet" />
                <link href="/css/flaticon.css" rel="stylesheet" />
                <link rel="stylesheet" href="/bs.css" />
                <meta name="description" content="Created by Elite Blue Technoligies" />
                <meta property="og:image" content="/logo.png" />
                <meta name="description" content="Created by Elite Blue Technoligies" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="title" content={`${metaTitle}`} />
                <meta name="keywords" content={`${metaKeywords}`} />
                <meta name="description" content={`${metaDescription}`} />
                <link rel="canonical" href={!(typeof window === 'undefined') && window.location.href} />
                <meta property="og:site_name" content="Elite Blue Technologies" />
                <meta property="og:url" content={!(typeof window === 'undefined') && window.location.href} />
                <meta property="og:title" content={`${metaTitle}`} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={`${metaDescription}`} />
                {/* <meta property="og:image:width" content="512" />
                <meta property="og:image:height" content="512" /> */}
                <meta property="og:image" content="/logo.png" />
                <meta property="og:image:type" content="image/png" />
                <meta name="twitter:title" content={`${metaTitle}`} />
                <meta name="twitter:description" content={`${metaDescription}`} />
                <title>{title}</title>
            </Head>

            <main>
                {children}
            </main>
        </>
    );

}

export default Layout