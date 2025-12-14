import styles from "./About1.module.css";
import aboutImg from "./assets/11289770.png";

export default function About1() {
  return (
    <section className={styles.about}>

      
      <div className={styles.container}>

        <div className={styles.left}>
          <h2>
            Know Who <span>I&apos;M</span>
          </h2>

          <p>
            Hi everyone! I&apos;m <span>Asnia M</span>, an aspiring
            <span> Java Full Stack Developer</span> and
            <span> UI/UX Designer</span> from India.
          </p>

          <p>
            I am passionate about building responsive, scalable, and
            user-centered web applications. I enjoy transforming ideas
            into reliable digital solutions using modern technologies
            and clean design principles.
          </p>

          <p>
            I work with <span>Java</span>, <span>Spring Boot</span>,
            <span> React.js</span>, <span>HTML5</span>, <span>CSS3</span>,
            <span> Bootstrap</span>, and <span>MySQL</span>, and I design
            intuitive interfaces using <span>Figma</span>,
            <span> Adobe Photoshop</span>, and
            <span> Adobe Illustrator</span>.
          </p>

          <p>
           I hold an M.Sc. in Physics, which has strengthened
           my analytical thinking, problem-solving skills, 
           and logical approach—all of which I apply in software development.
          </p>

          <p className={styles.quote}>
            “Strive to build things that make a difference.”
          </p>
        </div>

        <div className={styles.right}>
          <img src={aboutImg} alt="About illustration" />
        </div>

      </div>

      
      <div className={styles.skills}>
        <h2>
          Professional <span>Skillset</span>
        </h2>

        <div className={styles.skillGrid}>
          {[
            "HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap",
            "Java", "Spring Boot", "MySQL", "REST APIs",
            "Figma", "Photoshop", "Illustrator", "Git", "GitHub"
          ].map((skill, i) => (
            <div key={i} className={styles.skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>

      
      <div className={styles.tools}>
        <h2>
          Tools <span>I use</span>
        </h2>

        <div className={styles.toolGrid}>
          {["VS Code", "GitHub", "Chrome"].map((tool, i) => (
            <div key={i} className={styles.tool}>
              {tool}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

