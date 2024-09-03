import IndexPage from 'components/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { readToken } from 'lib/sanity.api'
import { getAllExplore, getAllPosts, getClient, getSettings } from 'lib/sanity.client'
import { Explore, Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  posts: Post[]
  settings: Settings
  explore: Explore[]
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { posts, settings, draftMode, explore } = props

  if (draftMode) {
    return <PreviewIndexPage posts={posts} settings={settings} explore={explore} />
  }

  return <IndexPage posts={posts} settings={settings} explore={explore}  />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, posts, explore = []] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
    getAllExplore(client),
  ])

  return {
    props: {
      posts,
      explore,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
