export default function Subjects() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h3 className="text-2xl font-bold md:text-3xl">Kijk eens rond</h3>
        {/* Divider */}
        <div className="my-6 w-16 border-t border-black"></div>
        <p className="msm:text-base mb-8 mt-4 text-sm text-gray-500 md:mb-12 lg:mb-16">
          Lorem ipsum dolor sit amet elit ut aliquam
        </p>
        {/* Content */}
        <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
          {/* Item */}
          <a
            href="#"
            className="relative flex h-[300px] items-end [grid-area:1/1/3/2] md:h-auto"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
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
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
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
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
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
