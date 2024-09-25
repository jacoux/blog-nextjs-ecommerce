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
        <div className="flex md:min-h-screen">
          {/* Sidebar */}
          <aside className="w-40 md:w-80 bg-white p-2 md:p-10 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <svg
                className="max-w-36 mx-auto"
                width="146"
                height="32"
                viewBox="0 0 146 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG content */}
              </svg>

              <nav className="md:mt-10 mt-5">
                <ul className="space-y-2 mb-4">
                  <li className="font-semibold px-3  text-black">Categorie</li>
                  <li className="group flex items-center text-sm md:text-base px-3  text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Bouw & klusjes
                  </li>
                  <li className="group flex items-center px-3  text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Schoonheid & verzorging
                  </li>
                  <li className="group flex items-center px-3  text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Mooi en gezond
                  </li>
                  <li className="group flex items-center px-3  text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Gereedschap
                  </li>
                  <li className="group flex items-center px-3  text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Sport, outdoor en recreatie
                  </li>
                  <li className="group flex items-center px-3  text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Ontspanning
                  </li>
                </ul>

                <ul className="space-y-2">
                  <li className="font-semibold px-3  text-black">Opties</li>
                  <li className="group flex items-center px-3  text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Verzenden
                  </li>
                  <li className="group flex items-center px-3  text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Op te halen
                  </li>
                  <li className="group flex items-center px-3  text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Beide
                  </li>
                </ul>
              </nav>
            </div>

            {/* <div className="flex items-center gradient px-3  mt-10 flex-col text-black rounded-lg">
              <img
                className="w-10 h-16 mx-auto mt-10 mb-4"
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2F23.png?alt=media&token=4ff84c15-7499-4eb2-a889-afa310333a59"
                alt="logo"
              />

              <p className="text-center">
                Upgrade to <span className="font-bold">PRO</span> to get all the
                features
              </p>

              <button className="font-bold text-center mt-6 pb-10">
                Upgrade Now
              </button>
            </div> */}
          </aside>

          {/* Main Content */}
          <main className="flex-1 md:block p-5 md:p-16 bg-gray-100 shadow-xl border-gray-400 rounded-md ">
            <div className=" flex  text-gray-800 h-full">
              <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:0">
        {/* Component */}
        <div className="flex flex-col items-center">
          {/* Content */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6">
            <a
              href="#"
              className="flex flex-col gap-4 shadow-2xl rounded-md  border-gray-800 px-4 py-8 md:p-0"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1681690860621-35ce8f2e1813?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-60 object-cover"
              />
              <div className="px-6 py-4">
                <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                  Elektricien
                </p>
                <p className="mb-4 text-xl font-semibold">
                  Jan Verhagen
                </p>
                <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                  Algeleme elektriciteitswerken
                </p>
                        <div className="flex">
                          {/* €20,00 */}
                  {/* <img
                    src="https://www.svgrepo.com/show/12044/eye.svg"
                    alt=""
                    className="mr-4 h-10 w-10 rounded-full object-cover"
                  /> */}
                  <div className="flex flex-col">
                    <h6 className="text-base font-bold"></h6>
                  </div>
                </div>
              </div>
            </a>
           <a
              href="#"
              className="flex flex-col gap-4 shadow-2xl rounded-md  border-gray-800 px-4 py-8 md:p-0"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1723921420307-7fa2ba8a7208?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-60 object-cover"
              />
              <div className="px-6 py-4">
                <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                  'loodgieter'
                </p>
                <p className="mb-4 text-xl font-semibold">
                  Water repair
                </p>
                <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                 Alle watergeralteerde werken
                        </p>
  
  
                        <div className="flex">
                           {/* €72,50 */}
                  {/* <img
                    src="https://www.svgrepo.com/show/12044/eye.svg"
                    alt=""
                    className="mr-4 h-10 w-10 rounded-full object-cover"
                  /> */}
                  <div className="flex flex-col">
                    <h6 className="text-base font-bold"></h6>
                  </div>
                </div>
              </div>
            </a>
          <a
              href="/detail"
              className="flex flex-col gap-4 shadow-2xl rounded-md  border-gray-800 px-4 py-8 md:p-0"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1670348051093-a3f94b408bcb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmFpbHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className="h-60 object-cover"
              />
              <div className="px-6 py-4">
                <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                  'Nagelstudio'
                </p>
                <p className="mb-4 text-xl font-semibold">
                  Nagelstudio Katrien
                </p>
                <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                  Nagelstudio in Waasmont

                </p>
                        <div className="flex  justify-between">
                           {/* €32,00 */}
                  {/* <img
                    src="https://www.svgrepo.com/show/12044/eye.svg"
                    alt=""
                    className="mr-4 h-10 w-10 rounded-full object-cover"
                  /> */}
                          <div className="flex flex-row">
                         {/* <img src="https://cdn.dribbble.com/userupload/14605183/file/original-5ef4db4eb149c71667b1e86b30634b93.png?resize=1504x1128" alt="Shop logo" className="w-8 rounded-sm mr-2 bg-none" />

                     <h6 className="text-small font-bold"> Jessica juwelen</h6> */}
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* Button */}

        </div>
      </div>
    </section>
            </div>
          </main>
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
