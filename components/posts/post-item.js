import Image from 'next/image';
import Link from 'next/link';
import css from './post-item.module.css';

function PostItem({post}) {

    const {title, image, excerpt, date, slug} = post;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    const imagePath = `/images/posts/${slug}/${image}`;

    const postLink = `/posts/${slug}`;

    return (
        <li className={css.post}>
            <Link href={postLink}>
                <a>
                    <div className={css.image}>
                        <Image src={imagePath} alt={title} width={300} height={200} layout="responsive" />
                    </div>
                    <div className={css.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default PostItem;
