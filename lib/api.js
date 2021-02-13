import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')
const episodesDirectory = join(process.cwd(), '_episodes')


export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getAllSlugs() {
  return [fs.readdirSync(postsDirectory), fs.readdirSync(episodesDirectory)]
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getPosts(fields = []) {
 const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

  // sort posts by date in descending order
  return posts
}

export function getAll(fields = []) {
  const [postSlugs, episodeSlugs] = getAllSlugs()
  const posts = postSlugs
    .map((slug) => getPostBySlug(slug, fields))

  const episodes = episodeSlugs
    .map((slug) => getEpisodeBySlug(slug, fields))

  // sort posts by date in descending order
  return [...posts, ...episodes].sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
}

export function getEpisodeSlugs() {
  return fs.readdirSync(episodesDirectory)
}

export function getEpisodeBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(episodesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllEpisodes(fields = []) {
  const slugs = getEpisodeSlugs()
  const posts = slugs
    .map((slug) => getEpisodeBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}

