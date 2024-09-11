import CoverImage from 'components/CoverImage'
import { Settings } from 'http2'
import { readToken } from 'lib/sanity.api'
import {
  getClient,
  getSettings,
  getExploreAndMoreStories,
  getAllExploreSlugs,
  getAllExplore,
} from 'lib/sanity.client'
import { urlForImage } from 'lib/sanity.image'
import { Explore } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { SharedPageProps } from 'pages/_app'
import { useState } from 'react'
import { SanityClient } from 'sanity'
interface PageProps extends SharedPageProps {
  explore: Explore[]
}
export default function ExplorePage(props: PageProps) {
  const { explore } = props

  const [activeButton, setActiveButton] = useState('Alles')

  const handleButtonClick = (button) => {
    setActiveButton(button)
  }

  const buttonClass = (button) =>
    activeButton === button
      ? 'px-4 py-2 bg-black text-white font-semibold rounded-full'
      : 'px-4 py-2 bg-gray-100 text-black font-semibold rounded-full'

  const filteredExplore =
    activeButton === 'Alles'
      ? explore
      : explore.filter(
          (ex) => ex.category && ex.category.includes(activeButton),
        )

  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="text-center mb-12">
          {/* Title */}
          <h2 className="mb-4 mt-6 text-3xl font-bold md:text-5xl">
            Verken Landen
          </h2>
          <p className="text-gray-500 mt-2">
            Doorzoek hier onze leuke tijdloze activiteiten
          </p>
          {/* Buttons */}
          <div className="my-10 md:my-20 flex flex-col md:flex-row justify-center gap-3">
            <button
              className={buttonClass('Alles')}
              onClick={() => handleButtonClick('Alles')}
            >
              Alles
            </button>
            <button
              className={buttonClass('Wandelen')}
              onClick={() => {
                handleButtonClick('Wandelen')
              }}
            >
              🚶 Wandelen
            </button>
            <button
              className={buttonClass('Fietsen')}
              onClick={() => {
                handleButtonClick('Fietsen')
              }}
            >
              🚴 Fietsen
            </button>
            <button
              className={buttonClass('eten & drinken')}
              onClick={() => handleButtonClick('eten & drinken')}
            >
              🍴 Eten en drinken
            </button>
            <button
              className={buttonClass('Parken')}
              onClick={() => handleButtonClick('Parken')}
            >
              🌲 Natuur
            </button>
          </div>
        </div>
        {/* Blog Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredExplore.map((ex) => (
              <a
                className="bg-gray-50 rounded-lg overflow-hidden"
                href={'/verken/' + ex.slug}
              >
                <div className="relative h-72">
                  <img
                    className="h-72 w-full object-cover"
                    src={urlForImage(ex.coverImage)
                      .height(1000)
                      .width(2000)
                      .url()}
                    alt=""
                  />
                  <span className="absolute bottom-5 right-5 text-white shadow-xl bg-pink-400 text-sm font-semibold px-2.5 py-2 rounded">
                    {ex.category}
                  </span>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold mt-2">{ex.title}</h2>
                  <p className="text-gray-500">{ex.excerpt}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Button */}
          {/* <h2 className="mb-4 mt-6 text-3xl font-bold md:text-5xl">
                        Parken
                    </h2> */}
          {/* <p className="text-gray-500 mt-2">
                        De leukste parken in Landen
                    </p> */}

        </div>
      </div>
    </section>
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [explore = []] = await Promise.all([getAllExplore(client)])

  return {
    props: {
      explore,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
