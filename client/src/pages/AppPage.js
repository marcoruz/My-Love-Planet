import { useCallback } from "react";
import BottomFooter from "../components/BottomFooter";
import { useNavigate } from "react-router-dom";
import StyleFilledStateDefaultS from "../components/StyleFilledStateDefaultS";
import RichTextField from "../components/RichTextField";
import TypeText from "../components/TypeText";
import SectionCard from "../components/SectionCard";
import styles from "./AppPage.module.css";
const AppPage = () => {
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
    <div className={styles.appPage}>
      <div className={styles.appPageChild} />
      <BottomFooter />
      <nav className={styles.frame}>
        <div className={styles.home} onClick={onHomeText1Click}>
          Home
        </div>
        <div className={styles.home} onClick={onAboutText1Click}>
          About
        </div>
        <div className={styles.home} onClick={onContactText1Click}>
          Contact
        </div>
      </nav>
      <h2 className={styles.logoname}>NomadNexus</h2>
      <div className={styles.nameDerStadt}>LISSABON</div>
      <img
        className={styles.containerFrBilder}
        alt=""
        src="/container-fr-bilder@2x.png"
      />
      <StyleFilledStateDefaultS
        label="Stadt löschen"
        styleFilledStateDefaultSPosition="absolute"
        styleFilledStateDefaultSBackgroundColor="#cd1616"
        styleFilledStateDefaultSWidth="180px"
        styleFilledStateDefaultSHeight="50px"
        styleFilledStateDefaultSTop="2173px"
        styleFilledStateDefaultSLeft="1180px"
        styleFilledStateDefaultSBorderRadius="78px"
        styleFilledStateDefaultSOverflow="hidden"
        styleFilledStateDefaultSMargin="unset"
        styleFilledStateDefaultSCursor="unset"
        styleFilledStateDefaultSZIndex="unset"
      />
      <StyleFilledStateDefaultS
        label="Foto hinzufügen"
        styleFilledStateDefaultSPosition="absolute"
        styleFilledStateDefaultSBackgroundColor="#1b1d1f"
        styleFilledStateDefaultSWidth="200px"
        styleFilledStateDefaultSHeight="50px"
        styleFilledStateDefaultSTop="1959px"
        styleFilledStateDefaultSLeft="670px"
        styleFilledStateDefaultSBorderRadius="78px"
        styleFilledStateDefaultSOverflow="hidden"
        styleFilledStateDefaultSMargin="unset"
        styleFilledStateDefaultSCursor="unset"
        styleFilledStateDefaultSZIndex="unset"
      />
      <RichTextField
        inputText="Notizen hinzufügen..."
        strikethrough="/strikethrough1.svg"
        plusCircle="/pluscircle.svg"
        paperAirplane="/paperairplane1.svg"
        inputLabel={false}
        richTextFieldPosition="absolute"
        richTextFieldWidth="487px"
        richTextFieldHeight="309px"
        richTextFieldTop="1526px"
        richTextFieldLeft="116px"
        leadingIcon={false}
        trailingIcon
      />
      <div className={styles.welcheStadtHastDuSchonBesParent}>
        <div className={styles.welcheStadtHast}>
          Welche Stadt hast du schon besucht?
        </div>
        <TypeText
          typeTextPosition="absolute"
          typeTextWidth="343px"
          typeTextBorder="none"
          typeTextFontFamily="Inter"
          typeTextFontSize="16px"
          typeTextTop="120px"
          typeTextLeft="calc(50% - 175.5px)"
          typeTextBorderRadius="22px"
        />
      </div>
      <SectionCard />
    </div>
  );
};

export default AppPage;
