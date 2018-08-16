import { withRouter } from 'next/router'
import Layout from '../components/Layout'
// import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'

// const Post = props => {
//   return (
//     <Layout>
//       <h1>{props.router.query.title}</h1>
//       <p>this is the blog post content</p>
//     </Layout>
//   )
// }

// Post.getInitialProps = async function(context) {
//   const { id } = context.query
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//   const show = await res.json()

//   console.log(`fetched show: ${show.name}`)

//   return { show }
// }

const Content = withRouter((props) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <div className="markdown">
      <Markdown source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `} />
    </div>
    <style jsx global>{`
     .markdown {
       font-family: 'Arial';
     }

     .markdown a {
       text-decoration: none;
       color: blue;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

     .markdown h3 {
       margin: 0;
       padding: 0;
       text-transform: uppercase;
     }
  `}</style>
  </div>
))

const Post = (props) => (
  <Layout>
    <Content />
  </Layout>
)

export default Post
