import React from "react";
import StyledWorkDescription from "../styles/StyledWorkDescription";
import TextBox from "../TextBox";
import { Tag } from "../IconTag";
import TagContainer from "./TagContainer";
import Link from "../Link";

const WorkDescription = ({
  titleWork,
  infoApp,
  description,
  tecnologies,
  hrefDemo,
  hrefCode
}) => {
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
