export default function Subjects() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h3 className="text-2xl font-bold md:text-3xl">Kijk eens rond</h3>
        {/* Divider */}
        <div className="my-6 w-16 border-t border-black"></div>

        {/* Content */}
        <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
          {/* Item */}
          <a
            href="#"
            className="relative flex h-[300px] items-end [grid-area:1/1/3/2] md:h-auto"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1668197023038-04f17cdf82a0?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <p className="text-sm font-medium sm:text-xl">Altijd te doen</p>
              <p className="text-sm sm:text-base">
                Ontdek prachtige wandelingen, parken en belevenissen
              </p>
            </div>
          </a>
          {/* Item */}
          <a href="#" className="relative flex h-[300px] items-end">
            <img
              src="https://plus.unsplash.com/premium_photo-1677151140485-df90e1e2fbbd?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <p className="text-sm font-medium sm:text-xl">Vacatures</p>
              <p className="text-sm sm:text-base">Werken in Landen?</p>
            </div>
          </a>
          {/* Item */}
          <a href="#" className="relative flex h-[300px] items-end">
            <img
              src="https://images.vrt.be/w1280hx/2023/04/26/bbd53a00-e460-11ed-91d7-02b7b76bf47f.jpg"
              alt=""
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <p className="text-sm font-medium sm:text-xl">Koop lokaal</p>
              <p className="text-sm sm:text-base">
                Ontdek hier onze handelaren
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
