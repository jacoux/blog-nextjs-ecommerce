import PostPage from 'components/PostPage'
import PreviewPostPage from 'components/PreviewPostPage'
import { readToken } from 'lib/sanity.api'
import {
  getAllPostsSlugs,
  getClient,
  getPostAndMoreStories,
  getExploreAndMoreStories,
  getSettings,
} from 'lib/sanity.client'
import { Explore, Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  post: Post
  morePosts: Post[]
  settings?: Settings
  moreExplore: Explore[]
  explore: Explore
}

interface Query {
  [key: string]: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { settings, explore, moreExplore, draftMode } = props

  if (draftMode) {
    return (
      <PreviewPostPage post={explore} morePosts={moreExplore} settings={settings} />
    )
  }

  return <PostPage post={explore} morePosts={moreExplore} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, { post, morePosts }, {explore, moreExplore}] = await Promise.all([
    getSettings(client),
    getPostAndMoreStories(client, params.slug),
    getExploreAndMoreStories(client, params.slug),
  ])

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      morePosts,
      explore,
      moreExplore,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/verken-landen/${slug}`) || [],
    fallback: 'blocking',
  }
}