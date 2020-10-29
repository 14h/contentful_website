import {useRouter} from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Blog from '../../components/blog'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import {getAllPostsWithSlug, getPostAndMorePosts} from '../../lib/api'
import PostTitle from '../../components/post-title'

export default function Post({post, morePosts}) {
    const router = useRouter()

    if (!router.isFallback && !post) {
        return <ErrorPage statusCode={404}/>
    }

    return (
        <Layout>
            <Container>
                <Header/>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article>
                            <Head>
                                <title>
                                    {post.title} | Global Drugs Survey
                                </title>
                                <meta property="og:image" content={post.coverImage.url}/>
                            </Head>
                            <PostHeader
                                title={post.title}
                                coverImage={post.coverImage}
                                date={post.date}
                            />
                            <PostBody content={post.content}/>
                        </article>
                        {morePosts && morePosts.length > 0 && (
                            <Blog posts={morePosts}/>
                        )}
                    </>
                )}
            </Container>
        </Layout>
    )
}

export async function getStaticProps({params}) {
    const data = await getPostAndMorePosts(params.slug)

    return {
        props: {
            post: data?.post ?? null,
            morePosts: data?.morePosts ?? null,
        },
    }
}

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug()
    return {
        paths: allPosts?.map(({slug}) => `/posts/${slug}`) ?? [],
        fallback: true,
    }
}
