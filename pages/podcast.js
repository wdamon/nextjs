import Container from '../components/container'
import Intro from '../components/intro'
import HeroPost from '../components/hero-post'
import Header from '../components/header'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllEpisodes } from '../lib/api'

import Head from 'next/head'

export default function Preception ({allPosts}) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
   return (
    <Layout>
      <Head>
         <title>Preception</title>
      </Head>
      <Container>
        <Header />  
        <Intro title="Preception" subtitle="Podcast" subtitle_color="zen-green"description="Translating the Precepts Into Our Daily Lives" />
        {heroPost && (
            <HeroPost
              category={'episodes'}
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
      )
 }

export async function getStaticProps() {
  const allPosts = getAllEpisodes([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
  return {
    props: { allPosts },
  }
}