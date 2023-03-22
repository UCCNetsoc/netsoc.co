import Paragraph from '../../components/Paragraph'
import styles from './Home.module.css'

const Technology = () => {
    return (
        <main className={styles.section}>
            <h1 className={styles.title}>Technology</h1>
            <Paragraph>
                We host many tech events throughout the year, from informative tech talks to comprehensive, hands-on tutorials. Got an interest in web dev? Want to gain more insight into the technologies that power our lives? You're sure to enjoy our tech talks!
            </Paragraph>
            <Paragraph>
                Tech talks are a great way to showcase what you're passionate about. If you'd like to host one, feel free to let us know and we'd be more than happy to host you!
            </Paragraph>
            <Paragraph>
                As well as that, we've brought students to CIX, Cork's very own datacentre, took them to SISTEM in Dublin, which is a yearly conference for tech students, and also attended FOSDEM, an annual developer's conference in Brussels.
            </Paragraph>
            <Paragraph>
                We also host <a href="https://devcon.ie">Cork DevCon</a>, an annual developer conference in Cork.
            </Paragraph>
        </main>
    )
}

export default Technology
