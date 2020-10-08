import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

        
        <p>Hi, I'm <strong>Joaquin</strong>. I'm a web developer with focus on frontend development. 
          I like to share what I learn. I also write about data science.
        </p>
        <p>
          You can contact me on
          {' '}
          <a href="https://twitter.com/joaquinsolis93" target="_blank">Twitter</a> and 
          {' '}
          <a href="https://linkedin.com/in/joaquinsolis" target="_blank"> Linkedin</a>.
        </p>

        <p>
          <a href="https://drive.google.com/file/d/12fNjbpz2jRzgnNw34xiV_aoM2t2w2InW/view?usp=sharing" target="_blank">My resume</a><br />
          <a href="https://github.com/solisjoaquin" target="_blank">Github</a>
        </p>


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
