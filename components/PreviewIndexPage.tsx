import IndexPage, { type IndexPageProps } from 'components/IndexPage'
import {
  indexQuery,
  exploreQuery,
  type Post,
  type Settings,
  type Explore,
  settingsQuery,
} from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewIndexPage(props: IndexPageProps) {
  const [posts, loadingPosts] = useLiveQuery<Post[]>(props.posts, indexQuery)
  const [explores] = useLiveQuery<Explore[]>(props.explore, exploreQuery)
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )

  return (
    <IndexPage
      preview
      loading={loadingPosts || loadingSettings}
      posts={posts || []}
      explore={explores || []}
      settings={settings || {}}
    />
  )
}
