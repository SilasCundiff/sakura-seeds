import React from 'react'
import TestButton2 from './TestButton2'
import { SakuraSeedColorThemes } from '../themes/SakuraSeedColorThemes'
import { SakuraSeedFontThemes } from '../themes/SakuraSeedFontThemes'


export default {
    title: 'Test/TestButton',
    component: TestButton2,
    argTypes: { onClick: { action: 'clicked' },
        hue: {
            options: ['default', 'light', 'dark'],
            control: { type: 'select' }
        },
        font: {
            options: ['default', 'Poppins', 'Roboto'],
            control: { type: 'select' }
        },
    },
}

const setTheme = (hue, font) => {
    
    if ((hue !== 'default' && hue !== undefined) || (font !== 'default' && font !== undefined))
    {
       const newTheme = {
        ...SakuraSeedColorThemes[`${hue}`],
        ...SakuraSeedFontThemes[`${font}`]
       } 
       console.log(`newTheme`, newTheme)
       return newTheme;
    }
}


const Template = ({hue, font, theme, test, ...rest}) => {
    console.log(`context`, test)
    const selectedTheme = setTheme(hue, font);    
    return <TestButton2 theme={selectedTheme} {...rest} />
}

export const SecondButton = Template.bind({})
SecondButton.args = {
    children: "Test Button",
}
