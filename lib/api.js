import {createClient} from 'contentful'

const client = createClient({
    space: 'ejj1s5pw6ulg',
    accessToken: '8vTnabSXn0xCCeFfzCTI5_SamB-BmSlcW4xwfITidjY',
    host: 'preview.contentful.com',
});


const parsePost = ({fields}) => ({
    title: fields?.title ?? null,
    slug: fields?.slug ?? null,
    date: fields?.date ?? null,
    content: fields?.content ?? null,
    coverImage: fields?.coverImage?.fields?.file ?? {},
});

const parsePostEntries = (entries, cb = parsePost) => entries?.items?.map(cb);

export async function getPreviewPostBySlug(slug) {
    const entries = await client.getEntries({
        content_type: 'post',
        limit: 1,
        'fields.slug[in]': slug,
    })
    return parsePostEntries(entries)[0]
}

export async function getAllPostsWithSlug() {
    const entries = await client.getEntries({
        content_type: 'post',
        select: 'fields.slug',
    })
    return parsePostEntries(entries, (post) => post.fields)
}

export async function getAllPostsForHome() {
    const entries = await client.getEntries({
        content_type: 'post',
        order: '-fields.date',
    });
    return parsePostEntries(entries)
}

export async function getPostAndMorePosts(slug) {
    const entry = await client.getEntries({
        content_type: 'post',
        limit: 1,
        'fields.slug[in]': slug,
    })
    const entries = await client.getEntries({
        content_type: 'post',
        limit: 2,
        order: '-fields.date',
        'fields.slug[nin]': slug,
    })

    return {
        post: parsePostEntries(entry)[0],
        morePosts: parsePostEntries(entries),
    }
}
