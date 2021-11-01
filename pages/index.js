import { Toolbar } from '../components/Toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="page-container">
        <Toolbar />
      <div className={styles.main}>
        <h1>Next.js News App</h1>
        <h3>Simple Next.js webapp which fetches news articles from news API</h3>
        

      </div>
    </div>
  )
}