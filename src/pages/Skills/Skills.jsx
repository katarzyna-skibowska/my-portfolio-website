import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <div id="skills" className={styles.box}>
      <h2>Moje Umiejętności</h2>
      <div className={styles.wrapperContent}>
        <section className={styles.sectionList}>
          <h3>Potrafię</h3>
          <ul className={styles.list}>
            <li>
              <i className="fa fa-code"> React</i>
            </li>
            <li>
              <i className="fa fa-code"> JavaScript</i>
            </li>
            <li>
              <i className="fa fa-code"> HTML</i>
            </li>
            <li>
              <i className="fa fa-code"> CSS</i>
            </li>
            <li>
              <i className="fa fa-code"> SASS</i>
            </li>
            <li>
              <i className="fa fa-code"> Firebase</i>
            </li>
            <li>
              <i className="fa fa-code"> Bootstrap</i>
            </li>
            <li>
              <i className="fa fa-code"> Praca z REST API</i>
            </li>
            <li>
              <i className="fa fa-code"> Figma</i>
            </li>
            <li>
              <i className="fa fa-code"> Jira</i>
            </li>
            <li>
              <i className="fa fa-code"> Git</i>
            </li>
            <li>
              <i className="fa fa-code"> NPM</i>
            </li>
          </ul>
        </section>
        <section>
          <h3>Doskonalę</h3>

          <ul className={styles.list}>
            <li>
              <i className="fa fa-code"> Typescript</i>
            </li>
            <li>
              {" "}
              <i className="fa fa-code"> Testy jednostkowe</i>
            </li>
            <li>
              <i className="fa fa-code"> React</i>
            </li>
            <li>
              <i className="fa fa-code"> JavaScript</i>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
