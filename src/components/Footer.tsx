import styles from './Footer.module.css'

const Footer = (): JSX.Element => {

  const footer_links: { icon?: string, url: string }[] = [
    {
        icon: "/img/discord.svg",
        url: "https://discord.netsoc.co"
      }, 
      {
        icon: "/img/google_calendar.png",
        url: "https://google.com"
      },
      {
        icon: "https://instagram.com/favicon.ico",
        url: "https://instagram.com/uccnetsoc"
      },
      {
        icon: "/img/github.svg",
        url: "https://github.com/uccnetsoc"
      },
  ]

  return (
    <footer>

        <section className={styles.footer_links}>
            {footer_links.map((link) => (
                <a href={link.url}><img src={link.icon} /></a>
            ))}
        </section>
    </footer>
  )
};

export default Footer;
