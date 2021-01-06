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
      </Head>
      <section className={utilStyles.headingMd}>


        <p>Hi, I'm <strong>Joaquin</strong>.
        I'm a Full-stack Developer and Math teacher. Node and React.
        </p>
        {/*         <p>I build things with:</p>
        <div className="flex">
          <i class="fab fa-js-square" title="Javascript"></i>
          <i class="fab fa-css3-alt" title="CSS3"></i>
          <i class="fab fa-react" title="React"></i>
          <i class="fab fa-node-js" title="NodeJS"></i>
          <i class="fab fa-java" title="Java"></i>

        </div> */}

      </section>

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
