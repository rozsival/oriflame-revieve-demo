import type { NextPage } from "next";
import { RevieveConfig } from "../../types/revieve";
import { REVIEVE_HREF, useOpenRevieve } from "../hooks/useOpenRevieve";
import { useRevieve } from "../hooks/useRevieve";
import styles from "../styles/Home.module.css";

const revieveConfig: RevieveConfig = {
  partner_id: "5aPAwy5Z2m",
  locale: "en",
  env: "test",
  onAddToCart: (products) => console.log("onAddToCart", { products }),
  onCheckout: (data) => console.log("onCheckout", { data }),
  onClickProduct: (product) => console.log("onClickProduct", { product }),
  onClose: () => console.log("onClose"),
};

const Home: NextPage = () => {
  useRevieve(revieveConfig);
  useOpenRevieve();
  return (
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
};

export default Home;
