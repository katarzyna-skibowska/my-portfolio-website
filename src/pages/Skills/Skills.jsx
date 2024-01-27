import "./Skills.css";
import react from "../../assets/react.png";
import js from "../../assets/js.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import firebase from "../../assets/firebase.png";
import bootstrap from "../../assets/bootstrap.png";
import figma from "../../assets/figma.png";
import jira from "../../assets/jira.png";
import git from "../../assets/git.png";
import npm from "../../assets/npm.png";
import api from "../../assets/api.png";
import typescript from "../../assets/typescript.png";
import tests from "../../assets/tests.png";

const Skills = () => {
  return (
    <div id="skills" className="box">
      <h2 className="title">My skills</h2>
      <div className="wrapperContent">
        <section>
          <ul className="list">
            <li>
              <img className="skills-icon" src={react} alt="react-icon" />
              <p className="name">React</p>
            </li>
            <li>
              <img className="skills-icon" src={js} alt="javascript-icon" />
              <p className="name">JavaScript</p>
            </li>
            <li>
              <img className="skills-icon" src={html} alt="html-icon" />
              <p className="name">HTML</p>
            </li>
            <li>
              <img className="skills-icon" src={css} alt="css-icon" />
              <p className="name">CSS</p>
            </li>
            <li>
              <img className="skills-icon" src={firebase} alt="firebase-icon" />
              <p className="name">Firebase</p>
            </li>
            <li>
              <img
                className="skills-icon"
                src={bootstrap}
                alt="bootstrap-icon"
              />
              <p className="name">Bootstrap</p>
            </li>
            <li>
              <img className="skills-icon" src={api} alt="api-icon" />
              <p className="name">REST API</p>
            </li>
            <li>
              <img className="skills-icon" src={figma} alt="figma-icon" />
              <p className="name">Figma</p>
            </li>
            <li>
              <img className="skills-icon" src={jira} alt="jira-icon" />
              <p className="name">Jira</p>
            </li>
            <li>
              <img className="skills-icon" src={git} alt="git-icon" />
              <p className="name">Git</p>
            </li>
            <li>
              <img className="skills-icon" src={npm} alt="npm-icon" />
              <p className="name">NPM</p>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="subtitle">Still improving</h3>

          <ul className="list bottom">
            <li>
              <img
                className="skills-icon"
                src={typescript}
                alt="typescript-icon"
              />
              <p className="name">Typescript</p>
            </li>
            <li>
              <img className="skills-icon" src={js} alt="javascript-icon" />
              <p className="name">JavaScript</p>
            </li>
            <li>
              <img className="skills-icon" src={react} alt="react-icon" />
              <p className="name">React</p>
            </li>
            <li>
              <img className="skills-icon" src={tests} alt="tests-icon" />
              <p className="name">Unit and E2E tests</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Skills;
