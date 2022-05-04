import Link from "next/link";
import Logo from "./logo";
import css from './main-navigation.module.css';

function MainNavigation() {
    return (
        <header className={css.header}>
            {/* 
                Link doesn't add <a> tag to a component automatically.
                It only add that to a simple text 
                */}
            <Link href="/" passHref>
                <a>
                    <Logo />
                </a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;
