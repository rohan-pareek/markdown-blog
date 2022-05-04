import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is a React framework for Production',
        date: '2022-05-04'
    },
    {
        slug: 'getting-started-with-nextjs2',
        title: 'Getting Started with NextJS 2',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is a React framework for Production',
        date: '2022-05-05'
    },
    {
        slug: 'getting-started-with-nextjs3',
        title: 'Getting Started with NextJS 3',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is a React framework for Production',
        date: '2022-05-06'
    },
];

function HomePage() {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </>
    )
}

export default HomePage;
