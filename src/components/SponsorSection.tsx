import styles from "./SponsorSection.module.css"

const SponsorSection = () => {

    const sponsors = [
        {
            name: "SIG",
            logo: "/img/sig.svg",
            link: "https://www.sig.com/"
        }
    ]

    return (
        <section id="sponsors">
            <h1 className={styles.title}>Proudly sponsored by</h1>
            {sponsors.map((sponsor) => (
                <div className={styles.sponsorContainer} id={sponsor.name} key={sponsor.name}>
                    <a href={sponsor.link} target="_blank" rel="noreferrer">
                        <img className={styles.sponsorImg} src={sponsor.logo} alt={sponsor.name} />
                    </a>
                </div>
            ))}
        </section>
    )
}


export default SponsorSection
