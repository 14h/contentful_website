import PostPreview from '../components/post-preview'

export default function Blog({posts}) {
    return (
        <section
            className="bg-accent-8-9 md:h-1/2 relative p-12 text-center pt-0"
        >
            <h1 className="text-4xl mb-12 md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 text-center text-accent-5">
                Latest Posts
            </h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 md:col-gap-16 lg:col-gap-32 row-gap-8 md:row-gap-12 mb-32">
                {posts.map((post) => (
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
    )
}
