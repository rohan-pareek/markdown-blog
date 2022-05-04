import css from './all-posts.module.css';
import PostGrid from './posts-grid';

function AllPosts({posts}) {
    return (
        <section className={css.posts}>
            <h1>All Posts</h1>
            <PostGrid posts={posts} />
        </section>
    )
}

export default AllPosts;