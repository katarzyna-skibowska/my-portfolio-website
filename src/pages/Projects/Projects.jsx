import "./Projects.css";
import CardImg from "../../assets/cardPhoto.png";

const Projects = () => {
  return (
    <div id="projects" className="box">
      <h2>Moje projekty</h2>
      <section className="cardsBox">
        <div className="card">
          <img className="cardImg" src={CardImg} alt="card image" />
          <div>
            <h3 className="cardName">FitPal</h3>
            <p className="cardDescription">
              #react #js #API #authorization Znajdź kompana do wspólnych
              aktywności sportowych.
            </p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/fitpal-react-app"
          >
            <button className="cardButton">Kod źródłowy</button>
          </a>
        </div>
        <div className="card">
          <img className="cardImg" src={CardImg} alt="card image" />
          <div>
            <h3 className="cardName">Moje portfolio</h3>
            <p className="cardDescription">Portfolio #react #js #html #css</p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/my-portfolio-website"
          >
            <button className="cardButton">Kod źródłowy</button>
          </a>
        </div>
        <div className="card">
          <img className="cardImg" src={CardImg} alt="card image" />
          <div>
            <h3 className="cardName">Kraje</h3>
            <p className="cardDescription">
              Pobieranie i wyświetlanie danych krajów za pomocą REST API.
            </p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/countries-app"
          >
            <button className="cardButton">Kod źródłowy</button>
          </a>
        </div>
        <div className="card">
          <img className="cardImg" src={CardImg} alt="card image" />
          <div>
            <h3 className="cardName">Książki</h3>
            <p className="cardDescription">
              Dynamiczna tabela + breadcrumbs + pobieranie i wyświetlanie danych
              krajów za pomocą REST API.
            </p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/dynamic-table-with-breadcrumbs"
          >
            <button className="cardButton">Kod źródłowy</button>
          </a>
        </div>
        <div className="card">
          <img className="cardImg" src={CardImg} alt="card image" />
          <div>
            <h3 className="cardName">FAQ</h3>
            <p className="cardDescription">Lista rozwijana, FAQ</p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/faq-app"
          >
            <button className="cardButton">Kod źródłowy</button>
          </a>
        </div>
        <div className="card">
          <img className="cardImg" src={CardImg} alt="card image" />
          <div>
            <h3 className="cardName">Kalkulator</h3>
            <p className="cardDescription">Kalkulator napisany w JavaScript</p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/tip-calculator"
          >
            <button className="cardButton">Kod źródłowy</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
