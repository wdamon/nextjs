import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Subscribe from '../components/subscribe'
import Intro from '../components/intro'

import Head from 'next/head'

export default function Preception ({allPosts}) {
   return (
    <Layout>
      <Head>
         <title>Preception</title>
      </Head>
      <Container>
        <Header />  
        <Intro title="Preception" subtitle="Newsletter Signup" subtitle_color="grey" description="" />
         
        <Subscribe />
      </Container>
    </Layout>
  )
 }

// export async function getStaticProps() {}