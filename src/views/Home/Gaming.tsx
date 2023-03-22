import Paragraph from '../../components/Paragraph'
import styles from './Home.module.css'

const Gaming = () => {
    return (
        <main className={styles.section}>
            <h1 className={styles.title}>Gaming</h1>
            <Paragraph>
            We host a variety of gaming events, including VR competitions, LAN nights and many more. In addition, we also host General Gaming events, which are a great way to enjoy casual gaming, make new friends, and try out the latest games.
            </Paragraph>

            <Paragraph>
               Our eSports team, the Netsoc Rebels, compete in games such as Rocket League, Valorant and League of Legends.
            </Paragraph>
        </main>
    )
}

export default Gaming 
