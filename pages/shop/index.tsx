import { readToken } from "lib/sanity.api"
import { getClient, getAllExplore } from "lib/sanity.client"
import { Explore, Product } from "lib/sanity.queries"
import { GetStaticProps } from "next"
import { SharedPageProps } from "pages/_app"
interface PageProps extends SharedPageProps {
  products: Product[]
}
export default function ShopPage() {
  return (
<section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">Komt eraan!</h1>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
              We zijn volop bezig met samenwerkingen op te zetten met onze partners. Wil je ook partner worden en je producten of diensten op InLanden promoten?
              Neem dan contact op via onderstaande knop.
            </p>
            <a
              href="mailto:info@jacouxit.be"
              className="inline-block items-center rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
            >
              Contact
            </a>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="mx-auto inline-block h-full w-full max-w-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
