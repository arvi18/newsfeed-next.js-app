import Head from 'next/head'
import Image from 'next/image'
import { Toolbar } from '../components/Toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="page-container">
        <Toolbar />
      <div className={styles.main}>
        <h1>Next.js News App</h1>
        <h3>Lorem ipsum dolor sit amet consectetur lorem</h3>
      </div>
    </div>
  )
}
