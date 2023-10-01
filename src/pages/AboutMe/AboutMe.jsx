import myprofilephoto from "../../assets/myprofilephoto.webp";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h1>Katarzyna Skibowska</h1>
        <h3>Junior Frontend Developer</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit fugiat
          a provident vero tenetur. Consequatur nobis dolore voluptatum vero
          maxime repellendus iste aperiam. Minima vitae ducimus similique.
          Dignissimos officia adipisci quasi minima vero reiciendis quo aperiam
          modi sapiente, ab quisquam in, laborum perferendis quibusdam
          laboriosam aliquam voluptatem sequi molestiae fugiat.
        </p>
      </section>
      <section className={styles.container}>
        <img
          className={styles.profilephoto}
          src={myprofilephoto}
          alt="Katarzyna Skibowska photo"
        />
      </section>
    </div>
  );
};

export default AboutMe;
