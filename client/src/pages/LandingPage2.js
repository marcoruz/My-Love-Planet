import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import StyleFilledStateDefaultS from "../components/StyleFilledStateDefaultS";
import styles from "./LandingPage2.module.css";
const LandingPage = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/app-page");
  }, [navigate]);

  const onAboutText1Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.landingPage}>
      <div className={styles.landingPageInner}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            <p className={styles.erweckeDeineAbenteuer}>
              »Erwecke deine Abenteuer zum Leben: Die Reisehelden-Chroniken –
              Orte, Erinnerungen und Geschichten«
            </p>
            <p className={styles.erweckeDeineAbenteuer}>&nbsp;</p>
            <p className={styles.dieKartographieDeiner}>
              »Die Kartographie deiner Abenteuer: Orte, Erinnerungen, unendliche
              Möglichkeiten«
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <img
        className={styles.dreamshaperV7WhiteBackgrounIcon}
        alt=""
        src="/dreamshaper-v7-white-background-travel-comic-look-earth-0-1@2x.png"
      />
      <div className={styles.frame}>
        <div className={styles.home}>Home</div>
        <div className={styles.about} onClick={onAboutText1Click}>
          About
        </div>
        <div className={styles.about} onClick={onContactText1Click}>
          Contact
        </div>
      </div>
      <div className={styles.logoname}>NomadNexus</div>
      <StyleFilledStateDefaultS
        label="Los geht's"
        styleFilledStateDefaultSPosition="absolute"
        styleFilledStateDefaultSBackgroundColor="#37447e"
        styleFilledStateDefaultSWidth="300px"
        styleFilledStateDefaultSHeight="57px"
        styleFilledStateDefaultSTop="659px"
        styleFilledStateDefaultSLeft="calc(50% + 110px)"
        styleFilledStateDefaultSBorderRadius="31px"
        styleFilledStateDefaultSOverflow="unset"
        styleFilledStateDefaultSMargin="0 !important"
        styleFilledStateDefaultSCursor="pointer"
        styleFilledStateDefaultSZIndex="5"
        onButtonContainerClick={onButtonContainerClick}
      />
    </div>
  );
};

export default LandingPage;
