import Link from 'next/link';
import {BsFacebook, BsInstagram } from 'react-icons/bs'
import s from './Footer.module.css'



const Footer = () => {
    return (
        <>
            <footer className={s.footer_section}>
                <span className={s.span_logo}>LOGO</span>
                    <Link href={"/"}  className={s.link_fb}>
                        <BsFacebook size={25} />
                    </Link>
                    <Link href={"/"} className={s.link_ig}>
                        <BsInstagram size={25} />
                    </Link>
            </footer>
        </>
    )
};

export default Footer;
