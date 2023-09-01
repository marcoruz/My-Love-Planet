import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.css";
const About = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.about}>
      <div className={styles.logolandie} />
      <div className={styles.frame}>
        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.about1}>About</div>
        <div className={styles.home} onClick={onContactTextClick}>
          Contact
        </div>
      </div>
      <div className={styles.logoname}>NomadNexus</div>
      <div className={styles.logoname1}>NomadNexus</div>
      <div className={styles.aboutUsSelbstContainer}>
        <p className={styles.aboutUs}>About us</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          Selbst in der hektischsten Welt streben wir danach, unsere kostbaren
          Momente einzufangen und festzuhalten. Willkommen bei NomadNexus,  dem
          Ort, an dem Erinnerungen zu einem lebendigen Teil deiner Reise werden.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          Unsere Leidenschaft für das Entdecken von Orten hat uns dazu
          inspiriert,  eine Plattform zu schaffen, auf der du die Geschichten
          hinter den von dir besuchten Orten teilen kannst. Egal, ob es sich um
          faszinierende Städte, atemberaubende Landschaften oder versteckte
          Juwelen handelt - hier  kannst du sie auf eine einzigartige Weise
          dokumentieren.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          Unser Ziel ist es, eine lebendige Gemeinschaft von Abenteurern,
          Welt-entdeckern und Geschichtenerzählern aufzubauen. Mit jeder
          eingegebenen Stadt, jedem hochgeladenen Foto und jeder geteilten
          Erinnerung formen  wir gemeinsam eine Karte der Emotionen, die mit den
          Plätzen verbunden  sind, die wir besucht haben.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          Trete ein in die Welt von NomadNexus und lass uns gemeinsam Orte zum
          Leben erwecken. Teile deine Reiseerlebnisse, bewahre kostbare
          Erinnerungen und werde Teil einer wachsenden Gemeinschaft, die
          versteht, dass das  Leben aus den Abenteuern besteht, die wir erleben
          und teilen.
        </p>
      </div>
      <div className={styles.footer}>
        <div className={styles.frame1}>
          <div className={styles.div}>©2023 Yourcompany</div>
        </div>
        <div className={styles.frame2}>
          <div className={styles.rectangle} />
          <div className={styles.frame3}>
            <div className={styles.frame4}>
              <div className={styles.frame5}>
                <div className={styles.about1}>Home</div>
                <div className={styles.about1}>About</div>
                <div className={styles.about1}>Contact</div>
              </div>
              <img
                className={styles.iconsocialinstagramCopy4}
                alt=""
                src="/iconsocialinstagram-copy-4.svg"
              />
            </div>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
