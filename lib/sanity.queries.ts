import { groq } from 'next-sanity'
export const productFields = groq`
  _id,
  name,
  "images": images[]{
    _key,
    "url": asset->url,
    alt
  },
  description,
  "slug": slug.current,
  price,
  category->{
    _id,
    title
  },
  company->{
    _id,
    title
  }
`
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
export const exploreQuery = groq`
*[_type == "explore"] | order(date desc, _updatedAt desc) {
  ${exploreFields}
}`
export const productQuery = groq`
*[_type == "product"]| order(date desc, _updatedAt desc) {
  ${productFields}
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

export const exploreSlugsQuery = groq`
*[_type == "explore" && defined(slug.current)][].slug.current
`
export const productSlugsQuery = groq`
*[_type == "product" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`
export const exploreBySlugQuery = groq`
*[_type == "explore" && slug.current == $slug][0] {
  ${exploreFields}
}
`
export const productBySlugQuery = groq`
*[_type == "product" && slug.current == $slug][0] {
  ${productFields}
}
`

export interface Author {
  name?: string
  picture?: any
}

export interface Product {
  _id: string
  name: string
  images: Array<{
    _key: string
    asset: {
      _ref: string
    }
    alt: string
  }>
  description: string
  slug: {
    current: string
  }
  price: number
  category?: {
    _ref: string
  }
  company?: {
    _ref: string
  }
}

export interface Post {
  _id: string
  title?: string
  prefix?: string
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
  datehour?: any
  whom?: any
}
export interface Explore {
  _id: string
  title?: string
  coverImage?: any
  prefix?: string
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
  datehour?: any
  whom?: any
}
export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
