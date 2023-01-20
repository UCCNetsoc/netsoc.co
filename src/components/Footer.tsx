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
    <>
      <footer>
          <section className={styles.footer_links}>
              {footer_links.map((link) => (
                  <a href={link.url}><img src={link.icon} /></a>
              ))}
          </section>
          <iframe src="https://discord.com/widget?id=248421213628530688&theme=dark" width="350" height="500" allowTransparency={true} 
              frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" title="Discord">
          </iframe>
      </footer>
    </>
  )
};

export default Footer;
