import styled from "styled-components";
import { theme } from "../../theme";

type HeaderProps = {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled.div`
  height: 70px;
  background-color: ${theme.colors.background_dark};
  padding: 0 16px;
`;
