import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  category,
  tags,
  whom,
  location,
  datehour,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`
const exploreFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  category,
  tags,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`
const newsFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`
export const exploreAndMoreStoriesQuery = groq`
{
  "explore": *[_type == "explore" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${exploreFields}
  },
  "moreExplore": *[_type == "explore" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${exploreFields}
  }
}`
export const newsAndMoreStoriesQuery = groq`
{
  "news": *[_type == "news" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${newsFields}
  },
  "newsMorePosts": *[_type == "news" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${newsFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  category?: string
  tags: string[]
  _updatedAt?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
  organiser?: any
  location?: any
  datehour?:any
  whom?: any 

}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
