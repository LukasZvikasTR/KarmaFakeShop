import React, { FC } from "react";
import { Styled } from "./styles";
import AddressDetails from "../AddressDetails";
import { SeparatorLine } from "../../commonStyles";
import Heading from "../Heading";

const EmailSection: FC<{}> = () => {
  return (
    <Styled.PaymentSectionWrapper>
      <AddressDetails headingTitle="BILLING ADDRESS" />
    </Styled.PaymentSectionWrapper>
  );
};

export default EmailSection;
