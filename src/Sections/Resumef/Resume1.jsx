import styles from "./Resume1.module.css";
import { FaDownload } from "react-icons/fa";

export default function Resume1() {
  return (
    <section className={styles.resumePage}>
      
      <div className={styles.topBar}>
        <a
          href="/resume/Asnia_M_Resume.pdf"
          download
          className={styles.downloadBtn}
        >
          <FaDownload /> Download CV
        </a>
      </div>

      
      <div className={styles.resumeImageWrapper}>
        <img
          src="/assets/Resume.png"
          alt="Asnia Resume"
          className={styles.resumeImage}
        />
      </div>
    </section>
  );
}


