import Container from '../components/container'
import Blog from '../components/blog'
import Intro from '../components/intro'
import Layout from '../components/layout'
import {getAllPostsForHome} from '../lib/api'
import Head from 'next/head'
import NewReports from "../components/new-reports";
import MediaPartners from "../components/media-partners";
import WhyBanner from "../components/why-banner";
import Header from "../components/header";

export default function Index({allPosts}) {
    const posts = allPosts.slice(0)
    return (
        <>
            <Layout>
                <Head>
                    <title>Global Drugs Survey</title>
                </Head>
                <Container>
                    <Header />
                    <Intro/>
                    <NewReports/>
                    <MediaPartners/>
                    {posts.length > 0 && <Blog posts={posts}/>}
                    <WhyBanner/>
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const allPosts = await getAllPostsForHome()
    return {
        props: {allPosts},
    }
}
