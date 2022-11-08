import styled from "@emotion/styled";

export const Section = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 9px double rgba(163,95,164,0.2);
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;