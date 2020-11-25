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
        I'm a frontend developer. BYU-I online student.
        </p>


        <p>
          You can contact me on
          {' '}
          <a href="https://twitter.com/joaquinsolis93" target="_blank">Twitter</a> and
          {' '}
          <a href="https://linkedin.com/in/joaquinsolis" target="_blank"> Linkedin</a>.
        </p>

      </section>

      <div className="grid">
        <a href="https://github.com/solisjoaquin" className="card">
          <h3>My Github </h3>
          <p>Discover my proyects in my Github account.</p>
        </a>

        <a href="https://drive.google.com/file/d/12fNjbpz2jRzgnNw34xiV_aoM2t2w2InW/view?usp=sharing" className="card">
          <h3>My resume </h3>
          <p>Check my resume to know more about me. (Drive pdf )</p>
        </a>


      </div>



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
