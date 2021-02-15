import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import EpisodeBody from '../../components/episode-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getEpisodeBySlug, getAllEpisodes } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Episode({ episode, moreEpisodes, preview }) {
  const router = useRouter()
  if (!router.isFallback && !episode?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {episode.title}
                </title>
                <meta property="og:image" content={episode.ogImage.url} />
              </Head>
              <PostHeader
                category={'episodes'}
                title={episode.title}
                coverImage={episode.coverImage}
                date={episode.date}
                author={episode.author}
              />
              <EpisodeBody src={episode.source} content={episode.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const episode = getEpisodeBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'source',
  ])
  const content = await markdownToHtml(episode.content || '')

  return {
    props: {
      episode: {
        ...episode,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const episodes = getAllEpisodes(['slug'])

  return {
    paths: episodes.map((episode) => {
      return {
        params: {
          slug: episode.slug,
        },
      }
    }),
    fallback: false,
  }
}  