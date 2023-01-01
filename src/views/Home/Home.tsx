import { Link } from "react-router-dom";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <main style={{ userSelect: "none" }}>
      <section className={styles.jumbo}>
        <h1 className={styles.title}>Welcome to UCC Netsoc</h1>
        <h2 className={styles.subtitle}>The UCC Networking, Gaming and Technology Society</h2>
      </section>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/about" className={styles.btn}>About</Link>
          </li>
          <li>
            <Link to="/technology" className={styles.btn}>Technology</Link>
          </li>
          <li>
            <Link to="/about" className={styles.btn}>Gaming</Link>
          </li>
          <li>
            <Link to="/about" className={styles.btn}>Esports</Link>
          </li>
        </ul>
      </nav>
      <nav className={styles.quicklinks}>
        <h1 className={styles.title}>Quick Links</h1>
        <ul>
          {quick_links.map((link) => (
            <li key={link.title}>
              <a href={link.url}>
                <div className={styles.quicklinkheader}>
                  <img src={link.icon ? link.icon : `https://${new URL(link.url).hostname}/favicon.ico`} alt={link.title} />
                  <h1>{link.title}</h1>
                </div>
                <p>{link.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}

const quick_links: { icon?: string, title: string, description: string, url: string }[] = [
  {
    icon: "/img/discord.svg",
    title: "Discord",
    description: "Join our Discord server to chat with other members",
    url: "https://discord.netsoc.co"
  }, 
  {
    icon: "/img/google_calendar.png",
    title: "Events Calendar",
    description: "See what events we have coming up",
    url: "https://google.com"
  },
  {
    title: "Instagram",
    description: "Keep up to date with news on our Instagram",
    url: "https://instagram.com/uccnetsoc"
  },
  {
    icon: "/img/github.svg",
    title: "GitHub",
    description: "Check out our open source projects on GitHub",
    url: "https://github.com/uccnetsoc"
  },
  {
    icon: "https://www.ucc.ie/en/media/support/societies/uccsocs/DDB3B04A-03E1-4EB0-891C-7DE966A71E81.jpeg",
    title: "Join the Society",
    description: "Go to \"My Memberships\" and click \"Add New\" to join the society",
    url: "https://candsportal.ucc.ie"
  },
  {
    title: "Netsoc Cloud",
    description: "Free access our cloud services for students",
    url: "https://netsoc.cloud"
  },
  {
    icon: "https://wiki.netsoc.co/favicon.ico",
    title: "Netsoc Cloud Tutorial",
    description: "Learn how to use our cloud services",
    url: "https://tutorial.netsoc.cloud"
  },
  {
    title: "Wiki",
    description: "Find out more about our society on our wiki",
    url: "https://wiki.netsoc.co"
  },
  {
    icon: "https://wiki.netsoc.co/favicon.ico",
    title: "Constitution",
    description: "See our constitution to learn more about us",
    url: "https://constitution.netsoc.co"
  },
  {
    icon: "https://handbook.netsoc.co/favicon.png",
    title: "SysAdmin Handbook",
    description: "Learn about Netsoc's infrasturcture",
    url: "https://handbook.netsoc.co"
  },
]

export default Home;