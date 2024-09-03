import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  category,
  tags,
  author,
  slug,
  prefix
}: Omit<Post, '_id'>) {
  return (

  <div className="w-full relative flex items-center justify-center h-auto">
      <div className="group bg-white shadow-lg shadow-gray-200 rounded-xl p-2.5 transition-all duration-500 w-full hover:shadow-gray-300">
        <div className="rounded-3xl ">
          <CoverImage slug={slug} title={title} image={coverImage} priority/>
      </div>
      <div className="flex flex-col items-center justify-center py-6 px-4 gap-4 text-center">
      <div className="flex items-center justify-between w-full mb-2">
            <h4 className="font-manrope font-bold text-xl text-gray-900 ">{ title}</h4>
        <div className="flex items-center justify-end gap-3">
          {/* <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_13866_9712)">
              <path d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z" fill="#F3F4F6"></path>
              <g clip-path="url(#clip1_13866_9712)">
                <path d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z" fill="#FBBF24"></path>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_13866_9712">
                <rect width="30" height="30" fill="white"></rect>
              </clipPath>
              <clipPath id="clip1_13866_9712">
                <rect width="30" height="30" fill="white"></rect>
              </clipPath>
            </defs>
          </svg> */}
          {/* <span className="text-sm font-medium text-gray-800">5.0</span> */}
        </div>
      </div>
      <p className="text-base font-medium text-gray-500 mb-4 text-left">{excerpt}</p>
      <div className="flex items-center justify-start w-full gap-4 mb-4">
        <a href="#" className="w-10 aspect-square rounded-full bg-gray-50 border-gray-600 border flex items-center justify-center transition-all duration-500 hover:bg-gray-100 hover:border-gray-900">
          <svg className="stroke-gray-700 hover:stroke-gray-900" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M13 14.9082L7 14.9082M1 8.91454V14.9082C1 16.8371 1 17.8015 1.58579 18.4008C2.17157 19 3.11438 19 5 19H15C16.8856 19 17.8284 19 18.4142 18.4008C19 17.8015 19 16.8371 19 14.9082V11.1044C19 8.96044 19 7.88847 18.5267 6.98381C18.0534 6.07914 17.1815 5.48452 15.4376 4.29527L12.2188 2.10017C11.1433 1.36672 10.6056 1 10 1C9.39445 1 8.8567 1.36673 7.7812 2.10017L2.7812 5.50998C1.90927 6.10461 1.4733 6.40192 1.23665 6.85425C1 7.30658 1 7.84257 1 8.91454Z" stroke="" stroke-width="1.6" stroke-linecap="round"></path>
          </svg>
        </a>
        <a href="#" className="w-10 aspect-square rounded-full bg-gray-50 border-gray-600 border flex items-center justify-center transition-all duration-500 hover:bg-gray-100 hover:border-gray-900">
          <svg className="stroke-gray-700 hover:stroke-gray-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 15C8.84757 14.4022 10.3969 14 12 14C13.6031 14 15.1524 14.4022 16 15M5 11C6.48324 9.8044 9.19456 9 12 9C14.8054 9 17.5168 9.8044 19 11M3 7C4.90703 5.2066 8.39301 4 12 4C15.607 4 19.093 5.2066 21 7M13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19Z" stroke="" stroke-width="1.6" stroke-linecap="round"></path>
          </svg>
        </a>
        <a href="#" className="w-10 aspect-square rounded-full bg-gray-50 border-gray-600 border flex items-center justify-center transition-all duration-500 hover:bg-gray-100 hover:border-gray-900">
          <svg className="stroke-gray-700 hover:stroke-gray-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 15V9M5 15C5 15.9428 5 16.4142 5.29289 16.7071C5.58579 17 6.05719 17 7 17C7.94281 17 8.41421 17 8.70711 16.7071C9 16.4142 9 15.9428 9 15V9C9 8.05719 9 7.58579 8.70711 7.29289C8.41421 7 7.94281 7 7 7C6.05719 7 5.58579 7 5.29289 7.29289C5 7.58579 5 8.05719 5 9M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12C2 11.0681 2 10.6022 2.15224 10.2346C2.35523 9.74458 2.74458 9.35523 3.23463 9.15224C3.60218 9 4.06812 9 5 9M19 15V9M19 15C19 15.9428 19 16.4142 18.7071 16.7071C18.4142 17 17.9428 17 17 17C16.0572 17 15.5858 17 15.2929 16.7071C15 16.4142 15 15.9428 15 15V9C15 8.05719 15 7.58579 15.2929 7.29289C15.5858 7 16.0572 7 17 7C17.9428 7 18.4142 7 18.7071 7.29289C19 7.58579 19 8.05719 19 9M19 15C19.9319 15 20.3978 15 20.7654 14.8478C21.2554 14.6448 21.6448 14.2554 21.8478 13.7654C22 13.3978 22 12.9319 22 12C22 11.0681 22 10.6022 21.8478 10.2346C21.6448 9.74458 21.2554 9.35523 20.7654 9.15224C20.3978 9 19.9319 9 19 9M9 12L15 12" stroke="" stroke-width="1.6" stroke-linecap="round"></path>
          </svg>
        </a>
        <a href="#" className="w-10 aspect-square rounded-full bg-gray-50 border-gray-600 border flex items-center justify-center transition-all duration-500 hover:bg-gray-100 hover:border-gray-900">
          <svg className="stroke-gray-700 hover:stroke-gray-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 5C6 5.75493 7.51556 7.27799 9.50667 7.27799C10.1704 7.27799 11 8.04173 11 8.79666C11 9.55158 10.1704 10.3153 9.50667 10.3153C8.84296 10.3153 7.78519 10.5864 7.78519 11.7943C7.5 13.5 5.65482 13.302 3 13M18 19C18 18.2451 16.4844 16.9238 14.4933 16.9238C13.8296 16.9238 13 16.16 13 15.4051C13 14.6502 13.8296 13.8865 14.4933 13.8865C15.157 13.8865 16.2148 13.6153 16.2148 12.4075C16.5 10.7018 18.3452 10.8998 21 11.2018M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="" stroke-width="1.6"></path>
          </svg>
        </a>
        <a href="#" className="w-10 aspect-square rounded-full bg-gray-50 border-gray-600 border flex items-center justify-center transition-all duration-500 hover:bg-gray-100 hover:border-gray-900">
          <svg className="stroke-gray-700 hover:stroke-gray-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14ZM16 14V7M9 4L3 4M9 12H3M9 8H5M21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16C11 14.3643 11.7857 12.9122 13 12V6C13 4.34315 14.3431 3 16 3C17.6569 3 19 4.34315 19 6L19.0005 12C20.2147 12.9122 21 14.3644 21 16Z" stroke="" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
        <a href="#" className="w-10 aspect-square rounded-full bg-gray-50 border-gray-600 border flex items-center justify-center transition-all duration-500 hover:bg-gray-100 hover:border-gray-900">
          <svg className="stroke-gray-700 hover:stroke-gray-900" xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
            <path d="M17 8C17 9.65685 13.4183 11 9 11C4.58172 11 1 9.65685 1 8M17 12C17 13.6569 13.4183 15 9 15C4.58172 15 1 13.6569 1 12M17 16C17 17.6569 13.4183 19 9 19C4.58172 19 1 17.6569 1 16M17 4C17 5.65685 13.4183 7 9 7C4.58172 7 1 5.65685 1 4C1 2.34315 4.58172 1 9 1C13.4183 1 17 2.34315 17 4Z" stroke="" stroke-width="1.6" stroke-linecap="round"></path>
          </svg>
        </a>
      </div>
      <a href={`/${prefix}/${slug}`} className="rounded-lg py-2.5 px-6 text-center w-full text-white bg-indigo-600 font-semibold text-lg transition-all duration-500 hover:bg-indigo-700">Lees meer!</a>
      </div>
      </div>
      </div>

  )
}
