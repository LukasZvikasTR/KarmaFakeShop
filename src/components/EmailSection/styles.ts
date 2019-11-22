import styled from "styled-components";

const EmailSectionWrapper = styled.div`
  padding: 0 20px 20px 20px;
`;

const EmailSectionContent = styled.div`
  padding: 20px;
  background-color: white;
`;

const EmailSectionContentItem = styled.div`
  background-color: inherit;
`;

const EmailSectionContentHeader = styled(EmailSectionContentItem)`
  margin: 0 0 30px 0;
  font-weight: bold;
`;

const EmailSectionContentEmail = styled(EmailSectionContentItem)`
  font-size: 10;
`;

export const Styled = {
  EmailSectionWrapper,
  EmailSectionContent,
  EmailSectionContentItem,
  EmailSectionContentHeader,
  EmailSectionContentEmail
};
