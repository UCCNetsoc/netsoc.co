import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img className={styles.logo} src="/img/netsoc.png" alt="Netsoc Logo" />

            <nav className={styles.anchors}>
                <a href="mailto:netsoc@uccsocieties.ie">Mail us</a>
                <a href="https://discord.netsoc.co">Join our Discord</a>
                <a href="https://twitter.com/uccnetsoc">Follow us on Twitter</a>
                <a href="https://instagram.com/uccnetsoc">Follow us on Instagram</a>
                <a href="https://devcon.ie">Check out Cork DevCon</a>
            </nav>
        </footer>
    )
}

export default Footer
