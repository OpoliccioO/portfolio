import React, { useState, useCallback } from "react";
import StyledWorkDescription from "../styles/StyledWorkDescription";
import TextBox from "../TextBox";
import { Tag } from "../IconTag";
import TagContainer from "./TagContainer";
import Link from "../Link";
import { useTransition, animated, config } from "react-spring";

const WorkDescription = ({
  titleWork,
  infoApp,
  description,
  tecnologies,
  hrefDemo,
  hrefCode
}) => {
  /*
  const [toogle, set] = useState(false);
  const onClick = useCallback(e => {
    console.log(e.target.parentNode.title);
    if (e.target.parentNode.className.indexOf("svg-") !== -1) {
      console.log(e.target.parentNode);
    }
    set(state => !state);
  }, []);
  const transitions = useTransition(toogle, null, {
    initial: { transform: "translate3d(0%,0%,0)" },
    from: { transform: "translate3d(0%,0%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,100%,0)" },
    leave: { opacity: 1, transform: "translate3d(0%,-100%,0)" },
    config: { mass: 1, tension: 280, friction: 62 }
  });
  */
  return (
    <StyledWorkDescription>
      <TextBox className="title-work" title={<h3>{titleWork}</h3>}>
        <Link
          className="description-work"
          demo
          href={hrefDemo}
          target="_blank"
        />
        <Link
          className="description-work"
          code
          href={hrefCode}
          target="_blank"
        />
        {infoApp}
      </TextBox>
      <TextBox title={<h4>Descripción</h4>}>
        <p>{description}</p>
      </TextBox>
      <TextBox title={<h4>Tecnologias/Librerias</h4>}>
        <TagContainer>
          {tecnologies.map((tecno, index) => (
            <Tag key={index} text={tecno} />
          ))}
        </TagContainer>
      </TextBox>
    </StyledWorkDescription>
  );
};

export default WorkDescription;
