import React, { FC } from "react";
import { Styled } from "./styles";
const EmailSection: FC<{}> = () => {
  return (
    <Styled.EmailSectionWrapper>
      <Styled.EmailSectionContent>
        <Styled.EmailSectionContentHeader>
          EMAIL ADDRESS
        </Styled.EmailSectionContentHeader>
        <Styled.EmailSectionContentEmail>
          johndoe@gmail.com
        </Styled.EmailSectionContentEmail>
      </Styled.EmailSectionContent>
    </Styled.EmailSectionWrapper>
  );
};

export default EmailSection;
