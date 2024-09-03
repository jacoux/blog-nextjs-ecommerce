import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import type { Explore, Post, Settings } from 'lib/sanity.queries'
import Subjects from './Subjects'
import MoreExplore from 'components/MoreExplore'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  explore: Explore[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings, explore } = props
  const [ ...moreExplore] = explore || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} description={description} level={1} />
            <Subjects />
          <MoreStories posts={posts} />
          {moreExplore.length > 0 && <MoreExplore explores={explore} />}
        </Container>
      </Layout>
    </>
  )
}
