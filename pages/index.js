import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = props => {
  return (
    <div>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </div>
  )
}

const Index = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  )
}

export default Index