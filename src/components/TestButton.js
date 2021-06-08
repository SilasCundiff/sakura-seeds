import React from 'react'
import styled from 'styled-components'

const StyledTestButton = styled.button`
    background: ${props => props.theme.colors.primaryColor};
    color: ${props => props.theme.colors.secondaryColor};
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 32px;
    border-radius: 4px;
    cursor: pointer;
    font-family: ${props => props.theme.font};
    font-weight: 900;
`;

const TestButton = ({children, theme}) => {
 
    return (
        <StyledTestButton theme={theme}>
            {children}
        </StyledTestButton>
    )
}

export default TestButton
