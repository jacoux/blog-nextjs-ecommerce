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
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug' | 'content'>,
) {
  const { title, coverImage, date, author, slug, content } = props
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
              <h2 className="text-3xl md:text-5xl font-bold flex-1">
                Wat
              </h2>
              <div className="flex-1">
                     <PortableText value={content} components={myPortableTextComponents} />

              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-5xl font-semibold flex-1">
                Wanneer
              </h2>
              <p className="flex-1">
                Our mission is clear: to empower brands through the unparalleled
                power of storytelling. We believe that every brand has a unique
                narrative waiting to be told, and our mission is to bring those
                stories to life with authenticity, creativity, and impact.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-5xl font-bold flex-1">
                Voor wie
              </h2>
              <p className="flex-1">
                What sets us apart is our holistic approach to video production.
                From concept to creation and promotion, we guide our clients
                through every step, ensuring a seamless and effective process.
                We combine creativity with strategy, producing content that not
                only looks stunning but also achieves tangible results.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-5xl font-bold flex-1">
                Organisator
              </h2>
              <div className="flex-1">
                        {author && <Avatar name={author.name} picture={author.picture}></Avatar>}

              </div>
            </div>
                        <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-5xl font-bold flex-1">
                Waar
              </h2>
              <p className="flex-1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.6986153562457!2d5.039186017610635!3d50.77098674398754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c121b67ee8b02b%3A0x3983d4d3a40ff7f0!2sJacoux%20IT!5e0!3m2!1snl!2sbe!4v1725047295174!5m2!1snl!2sbe" width="600" height="450"  loading="lazy" ></iframe>
              </p>
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
