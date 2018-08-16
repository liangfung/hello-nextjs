import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const PostLink = ({ post }) => {
  return (
    <div>
      <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
        <a>{post.title}</a>
      </Link>
      <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
    </div>
  )
}

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' },
  ]
}

const Index = props => {
  return (
    <Layout>
      <h1>My blog</h1>
      <ul>
        {
          getPosts().map((post) => {
            return (
              <PostLink key={post.id} post={post} />
            )
          })
        }
      </ul>
      <style jsx>{`
        h1, a {
          font-family: "Arial";
        }
        ul {
          padding: 0;
        }
        li {
          list-style: none;
          margin: 5px 0;
        }
        a {
          text-decoration: none;
          color: blue;
        }
        a:hover {
          opacity: 0.6;
        }
      `}
      </style>
    </Layout>
  )
}

// Index.getInitialProps = async function () {
//   const startTime = + new Date()
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()

//   const costTime = +new Date() - startTime
//   console.log(`Show data fetched. Count: ${data.length}, Cost: ${costTime} ms`)

//   return {
//     shows: data
//   }
// }

export default Index