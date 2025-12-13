import styles from "./Project1.module.css";
import { FaGithub } from "react-icons/fa";
import ecommerceImg from "../../assets/ecommerce.png";
import cafeImg from "../../assets/cafe.png";
import bootstrapImg from "../../assets/bootstrap.png";
import profileImg from "../../assets/profile.png";


const projects = [
  {
    title: "E-Commerce Cart – API Integration",
    description:
      "Developed dynamic cart functionalities using REST APIs with real-time pricing updates. Implemented validation and improved user experience through clean UI components.",
    image: ecommerceImg,
    github: "https://github.com/AsniaM",
  },
  {
    title: "One-Page Profile Website",
    description:
      "Built a responsive one-page profile website using HTML5 and CSS3 with semantic markup and clean layout structure.",
     image: profileImg,
    
    github: "https://github.com/AsniaM",
  },
  {
    title: "Cafe Website – Static",
    description:
      "Designed a clean static cafe website focusing on layout hierarchy, styling, and user-friendly visual presentation.",
    image: cafeImg,
    github: "https://github.com/AsniaM",
  },
  {
    title: "Bootstrap Practice Page",
    description:
      "Created structured UI layouts using Bootstrap grids, cards, and reusable components to understand responsive design.",
    image: bootstrapImg,
    github: "https://github.com/AsniaM",
  },
];

export default function Project1() {
  return (
    <section className={styles.projectsSection}>
      <h1 className={styles.title}>
        My Recent <span>Works</span>
      </h1>

      <p className={styles.subtitle}>
        Here are a few projects I&apos;ve worked on recently.
      </p>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className={styles.buttons}>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
