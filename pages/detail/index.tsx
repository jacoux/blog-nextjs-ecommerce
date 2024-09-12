import { Star, Heart, ShoppingCart, ChevronDown, MapPin, Clock } from 'lucide-react';

export default function ShopDetailPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 font-sans">
      {/* Header */}

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left column: Product images */}
        <div className="md:w-1/2">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Reebok Zig Kinetica 3" className="w-full rounded-lg mb-4" />
          <div className="flex space-x-2">
            <img src="https://images.unsplash.com/photo-1548801133-da353ebb1d97?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Thumbnail 1" className="w-20 h-20 rounded-lg" />
            <img src="https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Thumbnail 2" className="w-20 h-20 rounded-lg" />
            <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Thumbnail 3" className="w-20 h-20 rounded-lg" />
          </div>
        </div>

        {/* Right column: Product details */}
        <div className="md:w-1/2">
          <div className="flex items-center mb-2">
            <div className="bg-black text-white text-xs px-2 py-1 rounded-full mr-2">Reebok</div>
            <h1 className="text-2xl font-bold">Shoes Reebok Zig Kinetica 3</h1>
          </div>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-500 ml-2">(42 reviews)</span>
          </div>
          <div className="text-3xl font-bold mb-4">€199.00</div>
                    <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <h2 className="font-semibold mb-2">Verkocht door </h2>
            <div className="flex items-center">
              <img src="https://www.jacouxit.be/assets/img/logo-blue-light.png" alt="Shop logo" className="w-16 h-16 rounded-full mr-4 bg-black" />
              <div>
                <h3 className="font-bold">SportyGear Shop</h3>
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Stationstraat 22, Landen</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Lid sinds 08/2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold mb-2">Kleur</h2>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-gray-300"></div>
              <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
              <div className="w-8 h-8 bg-red-600 rounded-full"></div>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold mb-2">Maat</h2>
            <div className="grid grid-cols-6 gap-2">
              {[40.5, 41, 42, 43, 43.5, 44, 44.5, 45, 46].map((size) => (
                <button key={size} className="border rounded py-2 hover:bg-gray-100">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg mb-4">
            Koop bij 't schoentje
          </button>
          <p className="text-sm text-gray-500 mb-4">Gratis ophalen en levering</p>
          
          {/* Tabs */}
          <div className="border-b mb-4">
            <div className="flex space-x-4">
              <button className="py-2 border-b-2 border-black font-semibold">Details</button>
              <button className="py-2 text-gray-500">Reviews</button>
              <button className="py-2 text-gray-500">Discussion</button>
            </div>
          </div>
          
          {/* Reviews */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-2xl font-bold">4.8</span>
              </div>
              <select className="border rounded px-2 py-1">
                <option>Newest</option>
                <option>Highest rated</option>
                <option>Lowest rated</option>
              </select>
            </div>
            {/* Sample review */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold">Helen M.</div>
                  <div className="text-sm text-gray-500">Yesterday</div>
                </div>
              </div>
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mb-2">Excellent running shoes. It turns very sharply on the foot.</p>
              <div className="flex items-center text-sm text-gray-500">
                <button className="flex items-center mr-4">
                  <ChevronDown className="w-4 h-4 mr-1" /> 42
                </button>
                <button className="flex items-center">
                  <ChevronDown className="w-4 h-4 mr-1 transform rotate-180" /> 0
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
