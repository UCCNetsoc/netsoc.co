import Paragraph from '../../components/Paragraph'
import styles from './Home.module.css'

const About = () => {
    return (
        <main className={styles.section}>
            <h1 className={styles.title}>About</h1>
            <Paragraph>
               UCC Netsoc is a student-run society in UCC (University College Cork). We are a group of students who are passionate about technology, gaming and computer networking. We host events, workshops and competitions throughout the year. We also have a Discord server where we chat and play games together.
            </Paragraph>

            <Paragraph>
                UCC Netsoc has a rich history, and a backlog of our committee and HLMs (Honorary Life Members) can be seen on our <a href="https://wiki.netsoc.co/en/about/history">Wiki</a>.
            </Paragraph>

            <Paragraph>
                Many UCC Netsoc alumni have gone on to work for big tech companies such as Google, Stripe and more. We are proud of our alumni and the work they do.
            </Paragraph>

            <Paragraph>
                We work closely with CSIT students to try help fill in the gap in the curriculum. We host workshops and talks to help students learn more about the tech industry, modern development practices, and more.
            </Paragraph>

            <Paragraph>
                Our Esports team "Netsoc Rebels" have gone on to compete in collegiate leagues such as ICE, Legion and Nativz Collegiate.
            </Paragraph>
        </main>
    )
}

export default About
