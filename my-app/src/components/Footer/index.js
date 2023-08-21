import styles from '@/components/Footer/Footer.module.css'
import Link from 'next/link';
const Footer = () => {
    return(
        <footer className={styles.footer}>
            <span>Created By <Link href="https://www.linkedin.com/in/vinicios-matheus-oliveira-da-silva-a35a9a181">Vinicios Matheus</Link></span>
        </footer>

    );
}

export default Footer;