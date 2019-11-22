import React, { FC } from "react";
import styled from "styled-components";

const AddressSectionContentHeader = styled.div`
  margin: 0 0 30px 0;
  font-weight: bold;
  background-color: inherit;
`;

const Heading: FC<{ headingTitle: string }> = props => (
  <AddressSectionContentHeader>
    {props.headingTitle}
  </AddressSectionContentHeader>
);

export default Heading;
