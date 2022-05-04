import PostHeader from "./post-header";
import css from './post-content.module.css';
import ReactMarkdown from 'react-markdown';

const DUMMY_POST = {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    content: '# This is the first post',
    date: '2022-05-04'
}

function PostContent() {

    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article className={css.content}>
            <PostHeader title={DUMMY_POST.title} image = {imagePath} />
            <ReactMarkdown>
                {DUMMY_POST.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent;