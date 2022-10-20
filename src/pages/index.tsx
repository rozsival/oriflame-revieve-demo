import type { NextPage } from 'next';

import { REVIEVE_HREF } from '../constants';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>Oriflame – Revieve Demo</h1>
      <p className={styles.description}>
        This is a simple static demo of Novage+ powered by Revieve via embed
        script.
      </p>
      <a className={styles.card} href={REVIEVE_HREF}>
        Open Revieve
      </a>
      <a className={styles.card} href="#">
        Do Nothing
      </a>
    </main>
  </div>
);

export default Home;
