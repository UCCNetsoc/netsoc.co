import { Link } from "react-router-dom";
import styles from "./Home.module.css";
const Home = () => {
  return (

    <main>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/about" className={styles.btn}>About</Link>
          </li>
          <li>
            <Link to="/about" className={styles.btn}>Technology</Link>
          </li>
          <li>
            <Link to="/about" className={styles.btn}>Gaming</Link>
          </li>
          <li>
            <Link to="/about" className={styles.btn}>Esports</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}

export default Home;