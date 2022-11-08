import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 9px double rgba(163,95,164,0.2);
  
  >nav{
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    background-color: greenyellow;
  }
`;