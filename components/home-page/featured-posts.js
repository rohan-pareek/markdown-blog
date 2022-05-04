import PostGrid from '../posts/posts-grid';
import css from './featured-posts.module.css';

function FeaturedPosts({posts}) {
    return (
        <section className={css.latest}>
            <h2>Featured Posts</h2>
            <PostGrid posts={posts} />
        </section>
    )
}

export default FeaturedPosts;
