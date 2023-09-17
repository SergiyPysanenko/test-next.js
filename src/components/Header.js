import Link from 'next/link'
import  styles  from './Header.module.css';

const Header = () => {
    return (
        <>
            <header className={styles.headerWrapper}>
                <div className={styles.divWrapper}>
                    <span className={styles.divWrapper}>
                    !!!!!
                    </span>
                </div>
                <nav >
                    <Link href="/" className={styles.linkNav}>Home</Link>
                    <Link href="About Me" className={styles.linkNav}>About Me</Link>
                    <Link href="Contacts" className={styles.linkNav}>Contacts</Link>
                    <Link href="Pages" className={styles.linkNav}>Pages</Link> 
                </nav>
            </header>
        </>    
    )
};

export default Header; 