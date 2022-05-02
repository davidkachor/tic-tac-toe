import React, { useState, useEffect, useRef } from "react";
import styles from "./GameFieldSection.module.css";
import GameCrossOrCircle from "./GameCrossOrCircle";

function GameFieldSection(props) {
  const [className, setClassName] = useState(
    `${styles["game-field__section"]} ${styles["__free-section"]}`
  );
  const [sectionContent, setSectionContent] = useState("none");
  const [isClicked, setIsClicked] = useState(false);
  const section = useRef();

  useEffect(() => {
    if (props.isComputersTurn) {
      if (section.current.classList.contains(styles["__free-section"])) {
        setClassName((prev) =>
          prev.replace(styles["__free-section"], "not-avaible")
        );
      }
    } else {
      if (!section.current.classList.contains(styles["__free-section"])) {
        setClassName((prev) =>
          prev.replace("not-avaible", styles["__free-section"])
        );
      }
    }
  }, [props.isComputersTurn]);

  const clickHandler = (event) => {
    if (!isClicked) {
      setIsClicked(true);
      setSectionContent(props.sign);

      props.sign === "circle"
        ? setClassName(
            `${styles["game-field__section"]} ${styles["section-with-circle"]}`
          )
        : setClassName(
            `${styles["game-field__section"]} ${styles["section-with-cross"]}`
          );

      props.onClick(event);
    }
  };

  return (
    <div
      ref={section}
      id={props.id}
      onClick={clickHandler}
      className={className}
    >
      <GameCrossOrCircle content={sectionContent} />
    </div>
  );
}

export default GameFieldSection;
