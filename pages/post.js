// import { withRouter } from 'next/router'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Post = props => {
  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    </Layout>
  )
}

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()
  
  console.log(`fetched show: ${show.name}`)

  return { show }
}

// const Content = props => (
//   <div>
//     <h1>{props.router.query.title}</h1>
//     <p>this is the blog post content</p>
//   </div>
// )

// const Post = withRouter((props) => (
//   <Layout>
//     <Content {...props} />
//   </Layout>
// ))

export default Post
