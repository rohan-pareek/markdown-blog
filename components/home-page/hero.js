import Image from 'next/image';
import css from './hero.module.css';

function Hero() {
    return (
        <section className={css.hero}>
            <div className={css.image}>
                <Image src="/images/site/dp.jpg" alt="Display Picture" height={300} width={300} />
            </div>
            <h1>Hi, I am Rohan</h1>
            <p>
                I am front end developer. I work on technologies like ReactJS, NextJS, NodeJS and more.
            </p>
        </section>
    )
}

export default Hero;
