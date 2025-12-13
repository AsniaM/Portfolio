import styles from "./Home1.module.css";
import coder from "./assets/3d-application-developer-working-on-project-illustration-png.png";

import Typewriter from "typewriter-effect";

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

export default function Home1() {
  return (
    <section className={styles.home}>

      
      <div className={styles.heroWrapper}>
        <div className={styles.hero}>

          <div className={styles.left}>
            <h1 className={styles.greet}>
              Hi There! <span className={styles.wave}>👋</span>
            </h1>

            <h2 className={styles.name}>
              I&apos;M <span>ASNIA M</span>
            </h2>

            <h3 className={styles.role}>
              <Typewriter
                options={{
                  strings: [
                    "Java Fullstack Developer",
                    "Frontend Developer",
                    "UI/UX Developer",
                    "Backend Developer"
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 40,
                  delay: 70
                }}
              />
            </h3>
          </div>

          <div className={styles.right}>
            <img src={coder} alt="Developer illustration" />
          </div>

        </div>
      </div>

      
      <div className={styles.introWrapper}>
        <div className={styles.intro}>
          <h2>
            LET ME <span>INTRODUCE</span> MYSELF
          </h2>

          <p>
  I am passionate about building reliable, scalable, and user-friendly web
  applications. With hands-on experience in <span>HTML5</span>, <span>CSS3</span>,
  <span>Bootstrap</span>, <span>JavaScript</span>, and <span>React.js</span>, I enjoy
  crafting responsive and visually appealing user interfaces. On the backend,
  I work with <span>Java</span>, <span>Spring Boot</span>, and <span>SQL</span> to
  develop robust and efficient systems. I also leverage design tools like
  <span>Figma</span>, <span>Adobe Photoshop</span>, and
  <span>Adobe Illustrator</span> to create intuitive and engaging user
  experiences, while continuously learning and exploring new technologies
  across both frontend and backend development.
</p>

        </div>
      </div>

      
      
      

    </section>
  );
}
