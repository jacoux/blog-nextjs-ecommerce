import type { Explore } from 'lib/sanity.queries'
import PostPreview from './PostPreview'

export default function MoreExplore({ explores }: { explores: Explore[] }) {
  return (
    <section className='mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20'>
                     <h2 className="mb-4 mt-6 text-3xl font-bold md:text-5xl">
                        Verken landen
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Leuke dingen om altijd te doen!
                    </p>
            {/* Divider */}
            <div className="my-6 w-16 border-t border-black"></div>
      {/* Container */}
          <div className="mb-8 grid gap-5 sm:grid-cols-2 sm:justify-items-stretch md:mb-12 md:grid-cols-3 lg:mb-16 lg:gap-6">
        {explores.map((explore) => (
          <PostPreview
            key={explore._id}
            title={explore.title}
            coverImage={explore.coverImage}
            category={explore.category}
            tags={explore.tags}
            date={explore.date}
            author={explore.author}
            slug={explore.slug}
            excerpt={explore.excerpt}
            prefix='verken-landen'
          />
        ))}
      </div>
    </section>
  )
}
