import {useRouter} from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import Blog from '../../components/blog'
import Header from '../../components/header'
import Layout from '../../components/layout'
import {getAllPostsWithSlug, getPostAndMorePosts} from '../../lib/api'
import DateComponent from "../../components/date";
import markdownStyles from "../../components/markdown-styles.module.css";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import PostPreview from "../../components/post-preview";

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
                    <div className='text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left'>Loading…</div>
                ) : (
                    <div className=' bg-accent-4'>
                        <article>
                            <Head>
                                <title>
                                    {post.title} | Global Drugs Survey
                                </title>
                                <meta property="og:image" content={post.coverImage.url}/>
                            </Head>
                            <div className="mt-20 max-w-6xl mx-auto">
                                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold md:leading-none mb-12 text-center">
                                    {post.title}
                                </h1>
                                <img
                                    src={post.coverImage.url}
                                    alt={`Cover Image for ${post.title}`}
                                    className='shadow-small mx-auto mb-16 w-full'
                                />
                                <div className="mb-6 text-lg">
                                    <DateComponent dateString={post.date}/>
                                </div>
                                <div className={markdownStyles['markdown']}>
                                    {documentToReactComponents(post.content)}
                                </div>
                            </div>
                        </article>
                        {morePosts && morePosts.length > 0 && (
                            <section
                                className="bg-accent-4 md:h-1/2 relative p-12 text-center pt-0"
                            >
                                <h1 className="text-4xl mb-12 md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 text-center text-white">
                                    Latest Posts
                                </h1>
                                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 md:col-gap-16 lg:col-gap-32 row-gap-8 md:row-gap-12 mb-32">
                                    {morePosts.map((post) => (
                                        <PostPreview
                                            key={post.slug}
                                            title={post.title}
                                            coverImage={post.coverImage}
                                            date={post.date}
                                            slug={post.slug}
                                        />
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
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
