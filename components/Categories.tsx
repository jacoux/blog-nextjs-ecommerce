export default function Categories() {
  return (
    <div className="flex items-center space-x-4 container mx-auto px-5">
      <div className="flex space-x-4 overflow-x-auto mb-16">
        <div className="flex-shrink-0 bg-gray-200 p-6 rounded-lg text-center max-w-xs">
          Wandelen & fietsen
        </div>
        <div className="flex-shrink-0 bg-gray-200 p-6 rounded-lg text-center max-w-xs">
          Eten & drinken
        </div>
        <div className="flex-shrink-0 bg-gray-200 p-6 rounded-lg text-center max-w-xs">
          Voor de kinderen
        </div>
        <div className="flex-shrink-0 bg-gray-200 p-6 rounded-lg text-center max-w-xs">
          Evenementen
        </div>
        <div className="flex-shrink-0 bg-gray-200 p-6 rounded-lg text-center max-w-xs">
          Nieuws
        </div>
      </div>
    </div>
  )
}
