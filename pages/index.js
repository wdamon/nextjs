import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Header from '../components/header'
import Intro from '../components/intro'
import Layout from '../components/layout'
import PostCard from '../components/post-card'
import { getAll } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  const posts = allPosts
  return (
    <>
      <Layout>
        <Head>
          <title>Preception</title>
        </Head>
        <Container>
          <Header />
          <Intro title="Preception" subtitle="Home" subtitle_color="grey" description="" />
       <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 gap-y-10 md:gap-y-16 mb-16">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            type={post.type}
          />
        ))}
      </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAll([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'type'
  ])

  return {
    props: { allPosts },
  }
}