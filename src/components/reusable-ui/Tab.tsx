import styled from "styled-components";
import { theme } from "../../theme";
import { TabType } from "../../typescript/TabType";

export default function Tab({ label, Icon, onClick, className }: TabType) {
  return (
    <TabStyled onClick={onClick} className={className}>
        <div className="icon">
            {Icon}
        </div>
        {label}
    </TabStyled>
  )
}

const TabStyled = styled.button`
  height: 43px;
  padding: 0 22px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};

  cursor: pointer;

  position: relative;
  left: 5%;
  top: 1px;
  
  // fonts
  font-size: ${theme.fonts.sizes.P0};
  color: ${theme.colors.greySemiDark};
  
  // border
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  
  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
    text-decoration: underline;
    text-underline-offset: 5px;
  }
  .icon {
    display: flex;
  }
`;
