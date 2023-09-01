import { useMemo } from "react";
import styles from "./StyleFilledStateDefaultS.module.css";
const StyleFilledStateDefaultS = ({
  label = "Button",
  styleFilledStateDefaultSPosition,
  styleFilledStateDefaultSBackgroundColor,
  styleFilledStateDefaultSWidth,
  styleFilledStateDefaultSHeight,
  styleFilledStateDefaultSTop,
  styleFilledStateDefaultSLeft,
  styleFilledStateDefaultSBorderRadius,
  styleFilledStateDefaultSOverflow,
  styleFilledStateDefaultSMargin,
  styleFilledStateDefaultSCursor,
  styleFilledStateDefaultSZIndex,
  onButtonContainerClick,
}) => {
  const styleFilledStateDefaultSStyle = useMemo(() => {
    return {
      position: styleFilledStateDefaultSPosition,
      backgroundColor: styleFilledStateDefaultSBackgroundColor,
      width: styleFilledStateDefaultSWidth,
      height: styleFilledStateDefaultSHeight,
      top: styleFilledStateDefaultSTop,
      left: styleFilledStateDefaultSLeft,
      borderRadius: styleFilledStateDefaultSBorderRadius,
      overflow: styleFilledStateDefaultSOverflow,
      margin: styleFilledStateDefaultSMargin,
      cursor: styleFilledStateDefaultSCursor,
      zIndex: styleFilledStateDefaultSZIndex,
    };
  }, [
    styleFilledStateDefaultSPosition,
    styleFilledStateDefaultSBackgroundColor,
    styleFilledStateDefaultSWidth,
    styleFilledStateDefaultSHeight,
    styleFilledStateDefaultSTop,
    styleFilledStateDefaultSLeft,
    styleFilledStateDefaultSBorderRadius,
    styleFilledStateDefaultSOverflow,
    styleFilledStateDefaultSMargin,
    styleFilledStateDefaultSCursor,
    styleFilledStateDefaultSZIndex,
  ]);

  return (
    <div
      className={styles.stylefilledStatedefaultS}
      style={styleFilledStateDefaultSStyle}
      onClick={onButtonContainerClick}
    >
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default StyleFilledStateDefaultS;
