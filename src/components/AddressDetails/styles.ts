import styled from "styled-components";

const AddressSectionContent = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
`;

const AddressSectionContentItem = styled.div`
  background-color: inherit;
  margin-bottom: 10px;
`;

const AddressSectionContentHeader = styled(AddressSectionContentItem)`
  margin: 0 0 30px 0;
  font-weight: bold;
`;

const AddressSectionContentAddress = styled(AddressSectionContentItem)`
  font-size: 10;
`;

const AddressSectionContentDetails = styled.div`
  background-color: inherit;
`;

export const Styled = {
  AddressSectionContent,
  AddressSectionContentItem,
  AddressSectionContentHeader,
  AddressSectionContentAddress,
  AddressSectionContentDetails
};
