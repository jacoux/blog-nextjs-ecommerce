/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText, type PortableTextReactComponents } from 'next-sanity'

import styles from './PostBody.module.css'
import { SanityImage } from './SanityImage'
import { Post } from 'lib/sanity.queries'
import Avatar from 'components/AuthorAvatar'
import CoverImage from './CoverImage'

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />
    },
  },
}
export default function PostBody(
  props: Pick<
    Post,
    | 'title'
    | 'coverImage'
    | 'date'
    | 'author'
    | 'slug'
    | 'content'
    | 'whom'
    | 'datehour'
    | 'location'
  >,
) {
  const {
    title,
    coverImage,
    date,
    author,
    slug,
    content,
    whom,
    datehour,
    location,
  } = props
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="flex flex-col gap-14 lg:gap-20">
          {/* Image */}
          <CoverImage title={title} image={coverImage} priority slug={slug} />

          {/* Content */}
          <div className="flex flex-col gap-14 lg:gap-20">
            <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-5xl font-bold flex-1">Wat</h2>
              <div className="flex-1">
                <PortableText
                  value={content}
                  components={myPortableTextComponents}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-5xl font-semibold flex-1">
                Wanneer
              </h2>
              <p className="flex-1">{datehour}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-5xl font-bold flex-1">
                Voor wie
              </h2>
              <p className="flex-1">{whom}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-5xl font-bold flex-1">
                Organisator
              </h2>
              <div className="flex-1">
                {author && (
                  <Avatar name={author.name} picture={author.picture}></Avatar>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-5xl font-bold flex-1">Waar</h2>
              <p className="flex-1">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div className={`mx-auto max-w-2xl ${styles.portableText}`}>
    //   <PortableText value={content} components={myPortableTextComponents} />
    // </div>
  )
}
