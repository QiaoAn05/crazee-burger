import styled from "styled-components";
import { theme } from "../../theme";
import { HeaderType } from "../../typescript/HeaderType";

export default function Header({ children }: HeaderType) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled.div`
  height: 70px;
  background-color: ${theme.colors.background_dark};
  padding: 0 16px;
`;
