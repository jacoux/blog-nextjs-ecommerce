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
                <ul className="space-y-4 mb-4">
                  <li className="font-semibold px-3 py-2 text-black">Main</li>
                  <li className="group flex items-center text-sm md:text-base px-3 py-2 text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Overview
                  </li>
                  <li className="group flex items-center px-3 py-2 text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Orders
                  </li>
                  <li className="group flex items-center px-3 py-2 text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Products
                  </li>
                  <li className="group flex items-center px-3 py-2 text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Customers
                  </li>
                  <li className="group flex items-center px-3 py-2 text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Reports
                  </li>
                  <li className="group flex items-center px-3 py-2 text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Transactions
                  </li>
                  <li className="group flex items-center px-3 py-2 text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Shipment
                  </li>
                </ul>

                <ul className="space-y-4">
                  <li className="font-semibold px-3 py-2 text-black">Others</li>
                  <li className="group flex items-center px-3 py-2 text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Help Center
                  </li>
                  <li className="group flex items-center px-3 py-2 text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Settings
                  </li>
                  <li className="group flex items-center px-3 py-2 text-gray-500 hover:bg-black hover:text-white rounded-lg">
                    <div className="w-2 h-2 md:w-4 md:h-4 mr-2 border rounded-full border-gray-500 group-hover:border-white"></div>
                    Logout
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gradient px-3 py-2 mt-10 flex-col text-black rounded-lg">
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
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 md:block p-5 md:p-16 bg-gray-100 shadow-xl border-gray-400 rounded-md ">
            <div className=" flex  text-gray-800 h-full">
              <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col items-center">
          {/* Content */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6">
            <a
              href="#"
              className="flex flex-col gap-4 shadow-2xl rounded-md  border-gray-800 px-4 py-8 md:p-0"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="h-60 object-cover"
              />
              <div className="px-6 py-4">
                <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                  't pannerke'
                </p>
                <p className="mb-4 text-xl font-semibold">
                  Mooie broek in het zwart
                </p>
                <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                  Mooie broek in het zwart
                </p>
                        <div className="flex">
                          €32,00
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
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="h-60 object-cover"
              />
              <div className="px-6 py-4">
                <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                  't pannerke'
                </p>
                <p className="mb-4 text-xl font-semibold">
                  Mooie broek in het zwart
                </p>
                <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                  Mooie broek in het zwart
                </p>
                        <div className="flex">
                           €32,00
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
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-60 object-cover"
              />
              <div className="px-6 py-4">
                <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                  'Nike'
                </p>
                <p className="mb-4 text-xl font-semibold">
                  Mooie loopschoenen
                </p>
                <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                                    Mooie loopschoenen

                </p>
                        <div className="flex  justify-between">
                           €32,00
                  {/* <img
                    src="https://www.svgrepo.com/show/12044/eye.svg"
                    alt=""
                    className="mr-4 h-10 w-10 rounded-full object-cover"
                  /> */}
                          <div className="flex flex-row">
                         <img src="https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-1/454353372_942274364577995_8551738421591472599_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=Jsoq3WKzHZsQ7kNvgEnX-Ol&_nc_ht=scontent-bru2-1.xx&_nc_gid=AHEKX5OivAWoJxktJcKps6c&oh=00_AYDZT5MwVPH3uu2gbtOysN5LI9KpsIZtkNBJnW6U9WBJmg&oe=66E91357" alt="Shop logo" className="w-8 rounded-sm mr-2 bg-none" />

                     <h6 className="text-small font-bold"> Jacoux</h6>
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
)}