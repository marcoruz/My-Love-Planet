import { useMemo } from "react";
import styles from "./RichTextField.module.css";
const RichTextField = ({
  inputText = "Rich text editor.",
  strikethrough,
  plusCircle,
  paperAirplane,
  inputLabel = true,
  richTextFieldPosition,
  richTextFieldWidth,
  richTextFieldHeight,
  richTextFieldTop,
  richTextFieldLeft,
  leadingIcon,
  trailingIcon,
}) => {
  const richTextFieldStyle = useMemo(() => {
    return {
      position: richTextFieldPosition,
      width: richTextFieldWidth,
      height: richTextFieldHeight,
      top: richTextFieldTop,
      left: richTextFieldLeft,
    };
  }, [
    richTextFieldPosition,
    richTextFieldWidth,
    richTextFieldHeight,
    richTextFieldTop,
    richTextFieldLeft,
  ]);

  return (
    <div className={styles.richTextField} style={richTextFieldStyle}>
      <div className={styles.frameParent}>
        <div className={styles.textWrapper}>
          <div className={styles.text}>{inputText}</div>
        </div>
        <div className={styles.boldParent}>
          <img className={styles.boldIcon} alt="" src="/bold.svg" />
          <img className={styles.italicIcon} alt="" src="/italic.svg" />
          <img
            className={styles.strikethroughIcon}
            alt=""
            src={strikethrough}
          />
          <div className={styles.frameChild} />
          <img
            className={styles.bulletedListIcon}
            alt=""
            src="/bulleted-list.svg"
          />
          <img
            className={styles.numberedListIcon}
            alt=""
            src="/numbered-list.svg"
          />
          <div className={styles.frameItem} />
          <img
            className={styles.blockQuoteIcon}
            alt=""
            src="/block-quote.svg"
          />
          <img className={styles.codeIcon} alt="" src="/code.svg" />
          <div className={styles.button}>
            <img className={styles.plusCircleIcon} alt="" src={plusCircle} />
            <div className={styles.buttonLabel}>Send</div>
            <img
              className={styles.paperAirplaneIcon}
              alt=""
              src={paperAirplane}
            />
          </div>
        </div>
      </div>
      {inputLabel && <div className={styles.label}>Default</div>}
    </div>
  );
};

export default RichTextField;
