import css from './post-grid.module.css';
import PostItem from './post-item';

function PostGrid({posts}) {
    return (
        <ul className={css.grid}>
            {posts.map(post=><PostItem key = {post.slug} post = {post} />)}
        </ul>
    )
}

export default PostGrid;
