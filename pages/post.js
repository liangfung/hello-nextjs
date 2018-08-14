import { withRouter } from 'next/router'
import Layout from '../components/Layout'

const Content = props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>this is the blog post content</p>
  </div>
)

const Post = withRouter((props) => (
  <Layout>
    <Content {...props} />
  </Layout>
))

export default Post
