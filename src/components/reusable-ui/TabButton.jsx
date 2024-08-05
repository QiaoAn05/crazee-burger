import React from 'react'
import styled from 'styled-components';

export default function TabButton({onClick, Label, Icon}) {
  return (
    <TabButtonStyled onClick={onClick}>
        <span>
          {Label}
        </span>
        { Icon && Icon }
    </TabButtonStyled>
  )
}

const TabButtonStyled = styled.button`
    background-color: blue;
    padding: 10px 22px 11px 22px;
    border-radius: 5px 5px 0 0;
    height: 100%;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
        text-underline-offset: 5px;

    }
`;
