import styles from "./Projects.module.css";
import CardImg from "../../assets/cardPhoto.png";

const Projects = () => {
  return (
    <div id="projects" className={styles.box}>
      <h2>Moje projekty</h2>
      <section className={styles.cardsBox}>
        <div className={styles.card}>
          <img className={styles.cardImg} src={CardImg} alt="card image" />
          <div>
            <h3 className={styles.cardName}>FitPal</h3>
            <p className={styles.cardDescription}>
              #react #js #API #authorization Znajdź kompana do wspólnych
              aktywności sportowych.
            </p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/fitpal-react-app"
          >
            <button className={styles.cardButton}>Kod źródłowy</button>
          </a>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImg} src={CardImg} alt="card image" />
          <div>
            <h3 className={styles.cardName}>Moje portfolio</h3>
            <p className={styles.cardDescription}>
              Portfolio #react #js #html #css
            </p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/my-portfolio-website"
          >
            <button className={styles.cardButton}>Kod źródłowy</button>
          </a>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImg} src={CardImg} alt="card image" />
          <div>
            <h3 className={styles.cardName}>Kraje</h3>
            <p className={styles.cardDescription}>
              Pobieranie i wyświetlanie danych krajów za pomocą REST API.
            </p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/countries-app"
          >
            <button className={styles.cardButton}>Kod źródłowy</button>
          </a>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImg} src={CardImg} alt="card image" />
          <div>
            <h3 className={styles.cardName}>Książki</h3>
            <p className={styles.cardDescription}>
              Dynamiczna tabela + breadcrumbs + pobieranie i wyświetlanie danych
              krajów za pomocą REST API.
            </p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/dynamic-table-with-breadcrumbs"
          >
            <button className={styles.cardButton}>Kod źródłowy</button>
          </a>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImg} src={CardImg} alt="card image" />
          <div>
            <h3 className={styles.cardName}>FAQ</h3>
            <p className={styles.cardDescription}>Lista rozwijana, FAQ</p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/faq-app"
          >
            <button className={styles.cardButton}>Kod źródłowy</button>
          </a>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImg} src={CardImg} alt="card image" />
          <div>
            <h3 className={styles.cardName}>Kalkulator</h3>
            <p className={styles.cardDescription}>
              Kalkulator napisany w JavaScript
            </p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/tip-calculator"
          >
            <button className={styles.cardButton}>Kod źródłowy</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
