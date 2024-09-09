import {
  apiVersion,
  dataset,
  projectId,
  studioUrl,
  useCdn,
} from 'lib/sanity.api'
import {
  Explore,
  exploreAndMoreStoriesQuery,
  exploreBySlugQuery,
  exploreQuery,
  exploreSlugsQuery,
  indexQuery,
  type Post,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import { createClient, type SanityClient } from 'next-sanity'

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
    stega: {
      enabled: preview?.token ? true : false,
      studioUrl,
    },
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

export const getSanityImageConfig = () => getClient()

export async function getSettings(client: SanityClient): Promise<Settings> {
  return (await client.fetch(settingsQuery)) || {}
}

export async function getAllPosts(client: SanityClient): Promise<Post[]> {
  return (await client.fetch(indexQuery)) || []
}

export async function getAllExplore(client: SanityClient): Promise<Explore[]> {
  return (await client.fetch(exploreQuery)) || []
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  const client = getClient()
  const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
  return slugs.map((slug) => ({ slug }))
}
export async function getAllExploreSlugs(): Promise<Pick<Explore, 'slug'>[]> {
  const client = getClient()
  const slugs = (await client.fetch<string[]>(exploreSlugsQuery)) || []
  return slugs.map((slug) => ({ slug }))
}

export async function getPostBySlug(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
}
export async function getExploreBySlug(
  client: SanityClient,
  slug: string,
): Promise<Explore> {
  return (await client.fetch(exploreBySlugQuery, { slug })) || ({} as any)
}

export async function getPostAndMoreStories(
  client: SanityClient,
  slug: string,
): Promise<{ post: Post; morePosts: Post[] }> {
  return await client.fetch(postAndMoreStoriesQuery, { slug })
}
export async function getExploreAndMoreStories(
  client: SanityClient,
  slug: string,
): Promise<{ explore: Explore; moreExplore: Explore[] }> {
  return await client.fetch(exploreAndMoreStoriesQuery, { slug })
}
