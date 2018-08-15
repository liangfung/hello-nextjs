import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const PostLink = props => {
  return (
    <div>
      <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </div>
  )
}

const Index = props => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      {/* <ul>
        <PostLink id='hello-nextjs' title="Hello Next.js" />
        <PostLink id='learn-nextjs' title="Learn Next.js is awesome" />
        <PostLink id='deploy-nextjs' title="Deploy apps with Zeit" />
      </ul> */}
      <ul>
        {
          props.shows.map(({ show }) => {
            return (
              <li key={show.id}>
                <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                  <a>{show.name}</a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </Layout>
  )
}

Index.getInitialProps = async function () {
  const startTime = + new Date()
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  const costTime = +new Date() - startTime
  console.log(`Show data fetched. Count: ${data.length}, Cost: ${costTime} ms`)

  return {
    shows: data
  }
}

export default Index