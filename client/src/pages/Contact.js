import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Contact.module.css";
const Contact = () => {
  const navigate = useNavigate();

  const onHomeText1Click = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onAboutText1Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.contact}>
      <div className={styles.logolandie}>
        <div className={styles.kontaktiereUnsWirContainer}>
          <p className={styles.kontaktiereUns}>
            <b className={styles.kontaktiereUns1}>Kontaktiere uns</b>
          </p>
          <p className={styles.kontaktiereUns}>
            <span>&nbsp;</span>
          </p>
          <p className={styles.kontaktiereUns}>
            <span>
              Wir freuen uns darauf, von dir zu hören und sind hier, um  deine
              Fragen, Anregungen oder Anliegen zu beantworten. Bitte zögere
              nicht, uns zu kontaktieren:
            </span>
          </p>
          <p className={styles.kontaktiereUns}>
            <span>&nbsp;</span>
          </p>
          <p className={styles.kontaktiereUns}>
            <span>Max Mustermann</span>
          </p>
          <p className={styles.kontaktiereUns}>
            <span>Musterstraße 12 12345 Musterstadt</span>
          </p>
          <p className={styles.kontaktiereUns}>
            <span>Musterland</span>
          </p>
          <p className={styles.kontaktiereUns}>
            <span>&nbsp;</span>
          </p>
          <p className={styles.kontaktiereUns}>
            <span>{`E-Mail: `}</span>
            <a
              className={styles.infodeinwebsitecom}
              href="mailto:info@deinwebsite.com"
              target="_blank"
            >
              <span>
                <span className={styles.infodeinwebsitecom1}>
                  info@deinwebsite.com
                </span>
              </span>
            </a>
          </p>
          <p className={styles.telefon1234567890}>
            <span>Telefon: (+123) 456-7890</span>
          </p>
        </div>
      </div>
      <div className={styles.logoname}>NomadNexus</div>
      <div className={styles.footer}>
        <div className={styles.frame}>
          <div className={styles.rectangle} />
          <div className={styles.frame1}>
            <div className={styles.frame2}>
              <div className={styles.frame3}>
                <div className={styles.home}>Home</div>
                <div className={styles.home}>About</div>
                <div className={styles.home}>Contact</div>
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
        <div className={styles.frame4}>
          <div className={styles.div}>©2023 Yourcompany</div>
        </div>
      </div>
      <div className={styles.frame5}>
        <div className={styles.home1} onClick={onHomeText1Click}>
          Home
        </div>
        <div className={styles.home1} onClick={onAboutText1Click}>
          About
        </div>
        <div className={styles.home1} onClick={onContactText1Click}>
          Contact
        </div>
      </div>
    </div>
  );
};

export default Contact;
