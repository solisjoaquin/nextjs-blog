import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </Head>
      <section className={utilStyles.headingMd}>


        <p>Hi, I'm <strong>Joaquin</strong>.
          I'm a Frontend Developer working at <a href="https://ripio.com/">Ripio</a>. I live in Argentina and I'm currently
          doing a Bachelor's in Applied Technology in BYU-Idaho.
        </p>



      </section>

      <h2>Skills</h2>

      <div className="flex">
        <i class="fab fa-js-square" title="Javascript"></i>
        <i class="fab fa-css3-alt" title="CSS3"></i>
        <i class="fab fa-react" title="React"></i>
        <i class="fab fa-node-js" title="NodeJS"></i>

      </div>

      <h2>Resume</h2>

      <p>Click <a href="https://drive.google.com/file/d/1oQlIOejWk3PhHDgv3I1518Q9SsioVw8G/view?usp=sharing">here</a> to download my resume.</p>

      <h2>Projects &#128640;</h2>
      <p><strong>WeTutorial</strong> Learn to code in groups. (React, NextJS, Tailwind) <a href="https://wetutorial.vercel.app/"> Demo</a></p>
      <p><strong>Aerolab Challenge</strong> Reedem products with your coins. (React, NextJs, Styled Components) <a href="https://aerolab-next-joaquinsolis.vercel.app/"> Demo</a></p>
      <p><strong>MemoryFruits </strong>Fall Guys Memotest game. (React, Styled Components) <a href="https://memoryfruit.netlify.app/"> Demo</a></p>
      <p><strong>NFT Marketplace </strong> A marketplace to buy digital art.(React, NextJS, Tailwind)<a href="https://github.com/solisjoaquin/nft-marketplaceS"> Repo</a></p>
      <p><strong>AlkemyWallet </strong> A digital wallet to register your incomes and purchases.(Node, React, Tailwind)<a href="https://github.com/solisjoaquin/Alkemy-JS"> Repo</a></p>

      <h2>Experience &#128296;</h2>
      <p><strong>Frontend Developer</strong> Jul 2021 - Present - Ripio</p>
      <p><strong>Software Developer</strong> Mar 2021 - Jul 2021 - Devsar</p>
      <p><strong>Math teacher</strong> 2019 - 2021 - Secondary School N° 796 Comodoro Rivadavia</p>



      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog &#128193;</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
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
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
