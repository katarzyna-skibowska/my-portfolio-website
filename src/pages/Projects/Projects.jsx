import "./Projects.css";
import CardImg from "../../assets/cardPhoto.png";

const Projects = () => {
  return (
    <div id="projects" className="box">
      <h2>My projects</h2>
      <section className="cardsBox">
        <div className="card">
          <img className="cardImg" src={CardImg} alt="card image" />
          <div>
            <h3 className="cardName">FITPAL</h3>
            <p className="cardDescription">#react #js #API #auth #firebase</p>
            <p className="cardDescription">Full app for sporty people.</p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/fitpal-react-app"
          >
            <button className="cardButton">Source code</button>
          </a>
        </div>
        <div className="card">
          <img className="cardImg" src={CardImg} alt="card image" />
          <div>
            <h3 className="cardName">MY PORTFOLIO</h3>
            <p className="cardDescription">Portfolio #react #js #html #css</p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/my-portfolio-website"
          >
            <button className="cardButton">Source code</button>
          </a>
        </div>
        <div className="card">
          <img className="cardImg" src={CardImg} alt="card image" />
          <div>
            <h3 className="cardName">COUNTRIES</h3>
            <p className="cardDescription">
              REST API fetching and displaying data + dark/light mode
              (useContext)
            </p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/countries-app"
          >
            <button className="cardButton">Source code</button>
          </a>
        </div>
        <div className="card">
          <img className="cardImg" src={CardImg} alt="card image" />
          <div>
            <h3 className="cardName">BOOKS</h3>
            <p className="cardDescription">
              Dynamic table with breadcrumbs + REST API fetching and displaying
              data.
            </p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/dynamic-table-with-breadcrumbs"
          >
            <button className="cardButton">Source code</button>
          </a>
        </div>
        <div className="card">
          <img className="cardImg" src={CardImg} alt="card image" />
          <div>
            <h3 className="cardName">FAQ</h3>
            <p className="cardDescription">Collapse, FAQ</p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/faq-app"
          >
            <button className="cardButton">Source code</button>
          </a>
        </div>
        <div className="card">
          <img className="cardImg" src={CardImg} alt="card image" />
          <div>
            <h3 className="cardName">JS CALCULATOR</h3>
            <p className="cardDescription">Calculator coded in JavaScript</p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/katarzyna-skibowska/tip-calculator"
          >
            <button className="cardButton">Source code</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
