import { useState } from "react";

export default function ExplorePage() {
    const [activeButton, setActiveButton] = useState("Product Updates");

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const buttonClass = (button) =>
        activeButton === button
            ? "px-4 py-2 bg-black text-white font-semibold rounded-full"
            : "px-4 py-2 bg-gray-100 text-black font-semibold rounded-full";

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
                            className={buttonClass("Wandelen & fietsen")}
                            onClick={() => handleButtonClick("Wandelen & fietsen")}
                        >
                           🚴 Wandelen en fietsen
                        </button>
                        <button
                            className={buttonClass("eten & drinken")}
                            onClick={() => handleButtonClick("eten & drinken")}
                        >
                           🍴 Eten en drinken
                        </button>
                        <button
                            className={buttonClass("Parken")}
                            onClick={() => handleButtonClick("Parken")}
                        >
                          🌲 Natuur
                        </button>
                    </div>
                </div>
                {/* Blog Content */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Blog Item */}
                        <div className=" bg-gray-50 rounded-lg overflow-hidden">
                            <div className="relative h-80">
                                <img
                                    className="h-80 w-full object-cover"
                                    src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                                    alt=""
                                />
                                <span className="absolute bottom-5 right-5 bg-gray-400 text-sm font-semibold px-2.5 py-2 rounded">
                                    Product Updates
                                </span>
                            </div>
                            <div className="p-4 flex justify-between items-center">
                                <div>
                                    <h2 className="text-lg font-semibold mt-2">
                                        Here is the title for this News
                                    </h2>
                                    <p>Lorem ipsum dolor sit amet elit ut aliquam</p>
                                </div>
                                <button className="cursor-pointer h-14 w-14">
                                    <svg
                                        className="h-14 w-14"
                                        width="60"
                                        height="60"
                                        viewBox="0 0 60 60"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M30.0001 52.5001C42.4265 52.5001 52.5001 42.4265 52.5001 30.0001C52.5001 17.5736 42.4265 7.5 30.0001 7.5C17.5736 7.5 7.5 17.5736 7.5 30.0001C7.5 42.4265 17.5736 52.5001 30.0001 52.5001Z"
                                            fill="black"
                                            stroke="black"
                                            stroke-width="2"
                                            stroke-miterlimit="10"
                                        />
                                        <path
                                            d="M31.4297 37.9454L39.375 30L31.4297 22.0547"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M20.625 30H39.3751"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Blog Item */}
                        <div className="relative bg-gray-50 rounded-lg overflow-hidden">
                            <div className="relative h-80">
                                <img
                                    className="h-80 w-full object-cover"
                                    src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                                    alt=""
                                />
                                <span className="absolute bottom-5 right-5 bg-gray-400 text-sm font-semibold px-2.5 py-2 rounded">
                                    Product Updates
                                </span>
                            </div>
                            <div className="p-4 flex justify-between items-center">
                                <div>
                                    <h2 className="text-lg font-semibold mt-2">
                                        Here is the title for this News
                                    </h2>
                                    <p>Lorem ipsum dolor sit amet elit ut aliquam</p>
                                </div>
                                <button className="cursor-pointer h-14 w-14">
                                    <svg
                                        className="h-14 w-14"
                                        width="60"
                                        height="60"
                                        viewBox="0 0 60 60"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M30.0001 52.5001C42.4265 52.5001 52.5001 42.4265 52.5001 30.0001C52.5001 17.5736 42.4265 7.5 30.0001 7.5C17.5736 7.5 7.5 17.5736 7.5 30.0001C7.5 42.4265 17.5736 52.5001 30.0001 52.5001Z"
                                            fill="black"
                                            stroke="black"
                                            stroke-width="2"
                                            stroke-miterlimit="10"
                                        />
                                        <path
                                            d="M31.4297 37.9454L39.375 30L31.4297 22.0547"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M20.625 30H39.3751"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Blog Item */}
                        <div className="bg-gray-50 rounded-lg overflow-hidden">
                            <div className="relative h-72">
                                <img
                                    className="h-72 w-full object-cover"
                                    src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                                    alt=""
                                />
                                <span className="absolute bottom-5 right-5 bg-gray-400 text-sm font-semibold px-2.5 py-2 rounded">
                                    Product Updates
                                </span>
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mt-2">
                                    Here is the title for this News
                                </h2>
                                <p className="text-gray-500">
                                    We make every expression of Hero Spirits with precision and
                                    passion
                                </p>
                            </div>
                        </div>
                        {/* Blog Item */}
                        <div className=" bg-gray-50 rounded-lg overflow-hidden">
                            <div className="relative h-72">
                                <img
                                    className="h-72 w-full object-cover"
                                    src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                                    alt=""
                                />
                                <span className="absolute bottom-5 right-5 bg-gray-400 text-sm font-semibold px-2.5 py-2 rounded">
                                    Product Updates
                                </span>
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mt-2">
                                    Here is the title for this News
                                </h2>
                                <p className="text-gray-500">
                                    We make every expression of Hero Spirits with precision and
                                    passion
                                </p>
                            </div>
                        </div>
                        {/* Blog Item */}
                        <div className="bg-gray-50 rounded-lg overflow-hidden">
                            <div className="relative h-72">
                                <img
                                    className="h-72 w-full object-cover"
                                    src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                                    alt=""
                                />
                                <span className="absolute bottom-5 right-5 bg-gray-400 text-sm font-semibold px-2.5 py-2 rounded">
                                    Product Updates
                                </span>
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mt-2">
                                    Here is the title for this News
                                </h2>
                                <p className="text-gray-500">
                                    We make every expression of Hero Spirits with precision and
                                    passion
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                                         <h2 className="mb-4 mt-6 text-3xl font-bold md:text-5xl">
                        Parken
                    </h2>
                    <p className="text-gray-500 mt-2">
                        De leukste parken in Landen
                    </p>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Blog Item */}
                        <div className="bg-gray-50 rounded-lg overflow-hidden">
                            <div className="relative h-72">
                                <img
                                    className="h-72 w-full object-cover"
                                    src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                                    alt=""
                                />
                                <span className="absolute bottom-5 right-5 bg-gray-400 text-sm font-semibold px-2.5 py-2 rounded">
                                    Product Updates
                                </span>
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mt-2">
                                    Here is the title for this News
                                </h2>
                                <p className="text-gray-500">
                                    We make every expression of Hero Spirits with precision and
                                    passion
                                </p>
                            </div>
                        </div>
                        {/* Blog Item */}
                        <div className=" bg-gray-50 rounded-lg overflow-hidden">
                            <div className="relative h-72">
                                <img
                                    className="h-72 w-full object-cover"
                                    src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                                    alt=""
                                />
                                <span className="absolute bottom-5 right-5 bg-gray-400 text-sm font-semibold px-2.5 py-2 rounded">
                                    Product Updates
                                </span>
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mt-2">
                                    Here is the title for this News
                                </h2>
                                <p className="text-gray-500">
                                    We make every expression of Hero Spirits with precision and
                                    passion
                                </p>
                            </div>
                        </div>
                        {/* Blog Item */}
                        <div className="bg-gray-50 rounded-lg overflow-hidden">
                            <div className="relative h-72">
                                <img
                                    className="h-72 w-full object-cover"
                                    src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                                    alt=""
                                />
                                <span className="absolute bottom-5 right-5 bg-gray-400 text-sm font-semibold px-2.5 py-2 rounded">
                                    Product Updates
                                </span>
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mt-2">
                                    Here is the title for this News
                                </h2>
                                <p className="text-gray-500">
                                    We make every expression of Hero Spirits with precision and
                                    passion
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}