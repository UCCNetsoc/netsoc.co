import styles from './Footer.module.css'

const Footer = (): JSX.Element => {

  const footer_links: { icon?: string, url: string, description: string }[] = [
    {
        icon: "/img/discord.svg",
        url: "https://discord.netsoc.co",
        description: "Join our Discord server"
      }, 
      {
        icon: "/img/google_calendar.png",
        url: "https://google.com",
        description: "See what events we have coming up"
      },
      {
        icon: "https://instagram.com/favicon.ico",
        url: "https://instagram.com/uccnetsoc",
        description: "Follow us on instagram to be updated with upcoming events"
      },
      {
        icon: "/img/github.svg",
        url: "https://github.com/uccnetsoc",
        description: "Check out our Github"
      },
  ]

  return (
    <>
      <footer>
          <section className={styles.footer_links}>
              {footer_links.map((link) => (
                  <a href={link.url}><img src={link.icon} alt={link.description}/></a>
              ))}
          </section>
          <iframe src="https://discord.com/widget?id=248421213628530688&theme=dark" width="350" height="500" allowTransparency={true} 
              frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" title="Discord">
          </iframe>
          <img className={styles.logo} src="/img/logo-horizontal.svg" alt="Netsoc" />
      </footer>
    </>
  )
};

export default Footer;
