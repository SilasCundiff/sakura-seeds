import React from 'react'
import styled from 'styled-components'

const StyledTestButton = styled.button`
    background: ${props => props.theme.bg};
    color: ${props => `hsl(${props.theme.fg}, 50% ,50%)`};
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

const TestButton = (props) => {
//    console.log(`props`, props)
//    console.log(`theme`, props.theme)
    return (
        <StyledTestButton theme={props.theme}>
            {props.children}
        </StyledTestButton>
    )
}

export default TestButton
