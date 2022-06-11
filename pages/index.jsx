import Head from 'next/head'
import HomeTempate from 'templates/HomeTemplate'

const _WEBSITE_TITLE = 'Jim Ree'

const _PAGE_TITLE = 'Portfolio'

const _PAGE_DESC =
  "Hello there, I'm Jim Ree. Frontend web developer. Being curious and a problem solver by nature always drives me to learn new technologies by building projects in my spare time, thereby I gained knowledge on how to wisely chose the right stack for my projects and absolutely has helped grow as a developer."

const _WEBSITE_KEYWORDS =
  'Jim Ree, frontend, web development, web developer, Norof'

const Home = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content={_WEBSITE_TITLE} />
        <meta
          property="og:title"
          content={`${_WEBSITE_TITLE} | ${_PAGE_TITLE}`}
        />
        <meta property="og:description" content={_PAGE_DESC} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={_PAGE_DESC} />
        <meta
          name="twitter:title"
          content={`${_WEBSITE_TITLE} | ${_PAGE_TITLE}`}
        />
        <meta name="keywords" content={_WEBSITE_KEYWORDS}></meta>
        <title>
          {_WEBSITE_TITLE} | {_PAGE_TITLE}
        </title>
      </Head>
      <HomeTempate />
    </>
  )
}

export default Home
