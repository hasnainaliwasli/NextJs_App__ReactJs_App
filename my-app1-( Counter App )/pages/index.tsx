
import MyApp from './app'


import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Counter from '../components/Counter/counter'

export default function Home() {
  return (
    <div className={styles.container}>
        <h1>
          Main Landing Page 
        </h1>


<Counter/>

    </div>
  )
}

