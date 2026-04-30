import styles from "./FeatureCard.module.css";

function FeatureCard() {
  return (
    <article className={styles.card}>
      <span className={styles.label}>Заметка</span>
      <h2 className={styles.title}>Product title</h2>
      <p className={styles.text}>Тут я учусь использовать React с CSS Modules</p>
      <a className={styles.link} href="#">Учебная ссылка</a>
      <button className={styles.button}>Купить</button>
    </article>
  );
}

export default FeatureCard;
