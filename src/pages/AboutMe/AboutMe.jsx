// import sideimage from "../../assets/sideimage.png";
import sideimage from "../../assets/photo.png";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div id="about-me" className="wrapper">
      <section className="container">
        <h1>Katarzyna Skibowska</h1>
        <h3>Junior Frontend Developer</h3>
        <p>
          Hi! I am Katarzyna and I am Junior Fronted Developer specialized in
          Javascript and React. My journey with frontend technologies started in
          2022 when enrolled to 8 months Frontend Developer course. I became
          familiar with HTML, CSS, JavaScript, React, unnit and E2E testing as
          well as TypeScript and Git. I am still developing my skills!
        </p>
      </section>
      <section className="container">
        <img
          className="sideimage"
          src={sideimage}
          alt="Image by catalyststuff on Freepik. woman-working-laptop-with-fire-cartoon-vector-icon-illustration-people-technology."
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default AboutMe;
