import CoverImage from 'components/CoverImage'
import ExplorePage from 'components/explorePage'
import PostPage from 'components/PostPage'
import PreviewPostPage from 'components/PreviewPostPage'
import { SanityImage } from 'components/SanityImage'
import { readToken } from 'lib/sanity.api'
import {
  getAllPostsSlugs,
  getClient,
  getPostAndMoreStories,
  getExploreAndMoreStories,
  getSettings,
  getAllExploreSlugs,
} from 'lib/sanity.client'

import { Explore, Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { PortableText, PortableTextReactComponents } from 'next-sanity'
import type { SharedPageProps } from 'pages/_app'
import { title } from 'process'

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    h3: ({ children }) => <h3 className="text-2xl">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
  },
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />
    },
  },
}
interface PageProps extends SharedPageProps {
  settings?: Settings
  moreExplore: Explore[]
  explore: Explore
}

interface Query {
  [key: string]: string
}

export default function ExploreSlugRoute(props: PageProps) {
  const { settings, explore, moreExplore, draftMode } = props
  return (
    <>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="mb-8 text-3xl font-bold md:text-5xl lg:mb-14">
            {explore.title}
          </h2>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <CoverImage
              slug={explore.slug}
              title={title}
              image={explore.coverImage}
              priority
            />

            <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
              <h2 className="text-3xl font-bold md:text-5xl">In 't kort</h2>

              <p className="mb-8 max-w-lg text-sm text-gray-500 sm:text-base lg:mb-24">
                {explore.excerpt}
              </p>
            </div>
          </div>
          <PortableText
            value={explore.content}
            components={myPortableTextComponents}
          />
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, { explore, moreExplore }] = await Promise.all([
    getSettings(client),
    getExploreAndMoreStories(client, params.slug),
  ])

  if (!explore) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      explore,
      moreExplore,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllExploreSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/verken/${slug}`) || [],
    fallback: 'blocking',
  }
}
