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
      <p className={styles.flex}>
        <a className={styles.card} href={REVIEVE_HREF}>
          Open Revieve
        </a>
        <a className={styles.card} href="#">
          Do Nothing
        </a>
      </p>
      <h2>Product 1276</h2>
      <p className={styles.flex}>
        <a
          className={styles.card}
          href="https://mv7stg.page.link/qAuW76p6XSavij7S8"
        >
          MV7 STG
        </a>
        <a
          className={styles.card}
          href="https://mv7uat.page.link/nps5NsJ32V5k6xTb7"
        >
          MV7 UAT
        </a>
        <a
          className={styles.card}
          href="https://uk-stg.oriflame.com/products/product?code=1276"
        >
          Legacy STG
        </a>
        <a
          className={styles.card}
          href="https://uk-uat.oriflame.com/products/product?code=1276"
        >
          Legacy UAT
        </a>
      </p>
    </main>
  </div>
);

export default Home;
