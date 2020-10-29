import Link from 'next/link'
import DateComponent from '../components/date'
import CoverImage from './cover-image'

export default function PostPreview({
                                        title,
                                        coverImage,
                                        date,
                                        slug,
                                    }) {
    return (
        <div>
            <div className="mb-5">
                <CoverImage title={title} slug={slug} url={coverImage.url}/>
            </div>
            <h3 className="text-3xl text-accent-3 mb-3 leading-snug">
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a className="hover:underline">{title}</a>
                </Link>
            </h3>
            <div className="text-lg text-accent-6">
                <DateComponent dateString={date}/>
            </div>
        </div>
    )
}
