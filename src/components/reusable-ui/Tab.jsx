import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({Icon}) {
  return (
    <TabStyled>
        <div className="icon">
            {Icon}
        </div>
    </TabStyled>
  )
}

const TabStyled = styled.button`
  /* border: 1px solid blue; */
  height: 43px;
  padding: 0 22px;

  display: flex;
  justify-content: center;
  align-items: center;
  
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
  }
  .icon {
    display: flex;
  }
`;
